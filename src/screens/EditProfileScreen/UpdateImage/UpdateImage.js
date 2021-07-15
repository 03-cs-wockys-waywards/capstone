import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { editUserInfo } from '../../../store/userReducer'
import { View, Image } from 'react-native'
import ImageModal from './ImageModal'
import { firebase } from '../../../firebaseSpecs/config'
import styles from '../styles'

export default function UpdateImage({ user, setUser }) {
  const { profilePicture } = user
  const [userPic, setUserPic] = useState(profilePicture)

  // const dispatch = useDispatch()

  // const loadProfilePicture = () => {
  //   const profilePicRef = firebase
  //     .storage()
  //     .ref()
  //     .child(`profile/${user.id}`)

  //   profilePicRef.getDownloadURL().then((url) => {
  //     setUserPic(url)
  //     // Save user profile photo in redux
  //     dispatch(editUserInfo({ profilePicture: url }))
  //   })
  // }

  // useEffect(() => {
  //   loadProfilePicture()
  // }, [])

  //console.log('Rhetta profile picture: ', user.profilePicture)
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: profilePicture }} style={styles.image} />
      <ImageModal user={user} setUser={setUser} setUserPic={setUserPic} />
    </View>
  )
}
