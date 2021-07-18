import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Image,
  Button,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { EmptyCircle, FilledCircle } from '../../../components/ProgressCircles'
import { Camera } from 'expo-camera'
import * as ImagePicker from 'expo-image-picker'
import { firebase } from '../../../firebaseSpecs/config'
import { useDispatch, useSelector } from 'react-redux'
import { editUserInfo } from '../../../store/userReducer'
import styles from './styles'

const defaultPhoto = `https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80`

export default function AddProfilePic({ navigation, route }) {
  const { password } = route.params

  const user = useSelector((state) => state.user)
  const profilePicture = user.profilePicture

  const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
  const [hasCameraPermission, setHasCameraPermission] = useState(null)
  const [image, setImage] = useState(profilePicture || null)
  const [loading, setLoading] = useState(false)
  const [defaultPhotoBool, setDefaultPhotoBool] = useState(false)
  const [imageOption, setImageOption] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
      const cameraStatus = await Camera.requestPermissionsAsync()
      setHasCameraPermission(cameraStatus.status === 'granted')

      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync()
      setHasGalleryPermission(galleryStatus.status === 'granted')
    })()
  }, [])

  const useCamera = async () => {
    setLoading(true)
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      // aspect: [1, 1],
      quality: 0.5,
    })

    if (!result.cancelled) {
      dispatch(editUserInfo({ profilePicture: result.uri }))
      setImage(result.uri)
      setImageOption('camera')
    }
  }

  const pickImage = async () => {
    setLoading(true)
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      // aspect: [1, 1],
      quality: 0.5,
    })

    if (!result.cancelled) {
      dispatch(editUserInfo({ profilePicture: result.uri }))
      setImage(result.uri)
      setImageOption('gallery')
    }
  }

  const useDefaultPhoto = () => {
    setLoading(false)
    setDefaultPhotoBool(true)
    setImageOption('default')
    setImage(defaultPhoto)
    dispatch(editUserInfo({ profilePicture: defaultPhoto }))
  }

  const uploadPicture = async () => {
    const uri = image
    const childPath = `profile/${user.email}`
    const response = await fetch(uri)
    const blob = await response.blob()

    const task = firebase
      .storage()
      .ref()
      .child(childPath)
      .put(blob)
      .then(() => {
        setLoading(false)
        // setTimeout(() => {}, 1500)
        // setTimeout(() => {
        //   setLoading(false);
        // }, 1500);
      })
  }

  const navigateToNext = () => {
    navigation.navigate('Confirmation', { password, defaultPhotoBool })
  }

  const displayLoadingScreen = () => {
    console.log('loading inside displayLoadingScreen func', loading)
    return (
      <Modal transparent={true} animationType={'none'} visible={loading}>
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator animating={loading} />
          </View>
        </View>
      </Modal>
    )
  }

  if (hasCameraPermission === null || hasGalleryPermission === false) {
    return (
      <SafeAreaView style={styles.noAccessMessageContainer}>
        <Text style={styles.noAccessMessageTitleText}>Oh no! 😱</Text>
        <Text style={styles.noAccessMessageText}>
          For your most enjoyable Tingle experience, please give Tingle access
          to your camera and photos in your device settings.
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="Enable Access" style={styles.enableAccessText} />
        </View>
      </SafeAreaView>
    )
  }

  if (hasCameraPermission === false || hasGalleryPermission === false) {
    return (
      <SafeAreaView style={styles.noAccessMessageContainer}>
        <Text style={styles.noAccessMessageTitleText}>Oh no! 😱</Text>
        <Text style={styles.noAccessMessageText}>
          For your most enjoyable Tingle experience, please give Tingle access
          to your camera and photos in your device settings.
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="Enable Access" style={styles.enableAccessText} />
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>How do you look?</Text>
          <Text style={styles.subtitle}>
            Add a profile picture that shows off that quirky personality of
            yours!
          </Text>
        </View>

        <Image
          source={{ uri: image }}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 200,
            marginBottom: 15,
          }}
        >
          <Icon
            raised
            reverse="true"
            type="ionicon"
            name="camera-outline"
            color="#D1E265"
            size="28"
            onPress={() => useCamera()}
          />

          <Icon
            raised
            reverse="true"
            type="ionicon"
            name="images-outline"
            color="#D1E265"
            size="28"
            onPress={() => pickImage()}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => useDefaultPhoto()}
        >
          <Text style={styles.buttonText}>Use Default Photo</Text>
        </TouchableOpacity>

        <View style={styles.progressContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileStepTwo')}
          >
            <Icon type="font-awesome" name="chevron-left" color="#FBC912" />
          </TouchableOpacity>
          <FilledCircle />
          <FilledCircle />
          <FilledCircle />
          <EmptyCircle />
          {/* {loading && displayLoadingScreen()} */}
          <TouchableOpacity
            onPress={() => {
              setLoading(true)
              if (imageOption === '') {
                alert(
                  'Please upload a profile picture. You can also choose a default photo option and choose a different photo later!'
                )
              } else if (!defaultPhotoBool) {
                uploadPicture()
              } else if (loading) {
                alert('Please wait until the photo has been uploaded...')
              } else {
                navigateToNext()
              }
            }}
          >
            <Icon type="font-awesome" name="chevron-right" color="#FBC912" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
