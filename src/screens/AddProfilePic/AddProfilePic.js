import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { Camera } from 'expo-camera'
import * as ImagePicker from 'expo-image-picker'

import styles from './styles'

export default function AddProfilePic({ navigation }) {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
  const [hasCameraPermission, setHasCameraPermission] = useState(null)
  const [camera, setCamera] = useState(null)
  const [image, setImage] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)

  useEffect(() => {
    ;(async () => {
      const cameraStatus = await Camera.requestPermissionsAsync()
      setHasCameraPermission(cameraStatus.status === 'granted')

      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync()
      setHasGalleryPermission(galleryStatus.status === 'granted')
    })()
  }, [])

  const openCamera = async () => {
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

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null)
      setImage(data.uri)
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
      <View>
        <Text style={styles.headerText}>Step 3:</Text>
        <Text style={styles.labelText}>Pick a profile picture.</Text>
      </View>

      <Image
        source={{ uri: image }}
        style={{ width: 300, height: 300, backgroundColor: '#d3d3d3' }}
        PlaceholderContent={<ActivityIndicator />}
      />

      <TouchableOpacity style={styles.bigButton} onPress={() => openCamera()}>
        <Text style={styles.buttonText}>Take Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bigButton} onPress={() => pickImage()}>
        <Text style={styles.buttonText}>Choose from Gallery</Text>
      </TouchableOpacity>
    </View>
  )
}
