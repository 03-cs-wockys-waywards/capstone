import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, Image } from 'react-native'
import ImageModal from './ImageModal'
import { firebase } from '../../../firebaseSpecs/config'
import { editUserInfo } from '../../../store/userReducer'
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
      <ImageModal user={user} setUser={setUser} setUserPic={setUserPic} />
    </View>
  )
}
