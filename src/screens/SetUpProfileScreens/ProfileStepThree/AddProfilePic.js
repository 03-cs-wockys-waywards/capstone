import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { EmptyCircle, FilledCircle } from '../../../components/ProgressCircles'
import { Camera } from 'expo-camera'
import * as ImagePicker from 'expo-image-picker'

import styles from './styles'

export default function AddProfilePic({ navigation }) {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
  const [hasCameraPermission, setHasCameraPermission] = useState(null)
  //const [camera, setCamera] = useState(null)
  const [image, setImage] = useState(null)
  //const [type, setType] = useState(Camera.Constants.Type.back)

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
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })

    console.log(result)

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })
    console.log(result)

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  if (hasCameraPermission === null || hasGalleryPermission === false) {
    return <View />
  }

  if (hasCameraPermission === false || hasGalleryPermission === false) {
    return <Text>No access</Text>
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Step 3:</Text>
        <Text style={styles.labelText}>Add a profile picture.</Text>
      </View>

      <Image
        source={{ uri: image }}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />

      <TouchableOpacity style={styles.button} onPress={() => useCamera()}>
        <Text style={styles.buttonText}>Take Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => pickImage()}>
        <Text style={styles.buttonText}>Choose from Gallery</Text>
      </TouchableOpacity>

      <View style={styles.progressContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileStepTwo')}>
          <Icon type="font-awesome" name="chevron-left" color="#000" />
        </TouchableOpacity>
        <FilledCircle />
        <FilledCircle />
        <FilledCircle />
        <EmptyCircle />
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUpConfirmation')}
        >
          <Icon type="font-awesome" name="chevron-right" color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
