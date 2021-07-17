import React, { useEffect, useState } from 'react'
import { View, Image } from 'react-native'
import ImageModal from './ImageModal'
import { firebase } from '../../../firebaseSpecs/config'
import styles from '../styles'

export default function UpdateImage({ user, setUser }) {
  const { profilePicture } = user
  const [userPic, setUserPic] = useState(profilePicture)

  const getPicUrl = () => {
    const profilePicRef = firebase.storage().ref().child(`profile/${user.id}`)

    profilePicRef.getDownloadURL().then((url) => {
      // setUserPic(url)
      setUser({ ...user, profilePicture: url })
    })
  }

  useEffect(() => {
    if (profilePicture !== userPic) {
      getPicUrl()
    }
  }, [userPic])

  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: userPic }} style={styles.image} />
      <ImageModal userId={user.id} setUserPic={setUserPic} />
    </View>
  )
}
