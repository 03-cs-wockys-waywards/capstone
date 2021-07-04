import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export default function Gallery({ navigation }) {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
  const [image, setImage] = useState(null)

  useEffect(() => {
    ;(async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync()
      setHasGalleryPermission(galleryStatus.status === 'granted')
    })()
  }, [])

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

  if (hasGalleryPermission === false) {
    return <View />
  }

  if (hasGalleryPermission === false) {
    return <Text>No access to gallery</Text>
  }

  return (
    <View>
      <Text>Gallery</Text>
    </View>
  )
}
