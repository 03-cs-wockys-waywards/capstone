import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ImagePickerIOS,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { Camera } from 'expo-camera'
import styles from './styles'

export default function UseCamera({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null)
  const [camera, setCamera] = useState(null)
  const [image, setImage] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)

  useEffect(() => {
    ;(async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync()
      setHasCameraPermission(cameraStatus.status === 'granted')
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

  const savePicture = () => {
    // function saves taken picture to redux store to be sent to firebase?
  }

  if (hasCameraPermission === null) {
    return <View />
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={(ref) => setCamera(ref)}
        style={styles.fixedRatio}
        type={type}
        ratio={'1:1'}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              )
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => takePicture()}>
            <Text style={styles.text}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity
        style={styles.bigButton}
        onPress={() => navigation.navigate('ProfilePic', { image })}
      >
        <Text style={styles.buttonText}>Select Picture</Text>
      </TouchableOpacity>
    </View>
  )
}
