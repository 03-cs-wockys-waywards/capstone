import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
// import {
//   GoogleSigninButton,
// } from '@react-native-google-signin/google-signin'

import styles from './styles'

export default function Landing({ navigation }) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState([])

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
  //     webClientId: '', // client ID of type WEB for your server (needed to verify user ID and offline access)
  //     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //   })
  // }, [])

  // const signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices()
  //     const userInfo = await GoogleSignin.signIn()
  //     setLoggedIn(true)
  //     setUserInfo({ userInfo })
  //   } catch (err) {
  //     if (err.code === statusCodes.SIGN_IN_CANCELLED) {
  //       alert('Cancel')
  //     } else if (err.code === statusCodes.IN_PROGRESS) {
  //       alert('Signin in progress')
  //     } else if (err.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       alert('Play services not available')
  //     } else {
  //       console.log(err)
  //     }
  //   }
  // }

  // const signOut = async () => {
  //   try {
  //     await GoogleSignin.revokeAccess()
  //     await GoogleSignin.signOut()
  //     setLoggedIn(false)
  //     setUserInfo([])
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Name</Text>
      {/* <GoogleSigninButton
        style={{ width: 200, height: 50 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
      /> */}

      <Text style={{ textAlign: 'center' }}>Google Login Placeholder</Text>

      <View style={styles.linksContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Registration')}
        >
          <Text>Email Signup</Text>
        </TouchableOpacity>
        <Text>|</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text>Email Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
