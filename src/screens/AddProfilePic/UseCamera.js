import React, { useState, useEffect } from 'react'
import { Text, View, Button, Image, TouchableOpacity } from 'react-native'
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

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null)
      setImage(data.uri)
    }
  }

  if (hasCameraPermission === null) {
    return <View />
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.container}>
      <Text>Camera</Text>
      <View style={styles.cameraContainer}>
        <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={'1:1'}
        />
      </View>

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
        <Text style={styles.buttonText}>Flip Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => takePicture()}>
        <Text style={styles.buttonText}>Take Picture</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Save', { image })}
      >
        <Text style={styles.buttonText}>Save Picture</Text>
      </TouchableOpacity>

      {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
    </View>
  )
}
