import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, SafeAreaView, Text } from 'react-native'
import { firebase } from '../../firebaseSpecs/config'

export default function Confirmation({ navigation }) {
  const user = useSelector((state) => state.user)

  const RegisterUser = () => {
    console.log('RegisterUser function running...')
    const uid = user.userId
    console.log('UID in RegisterUser: ', uid)
    const usersRef = firebase.firestore().collection('users')

    usersRef
      .doc(uid)
      .set(user)
      .then(() => {
        navigation.navigate('Login')
      })
      .catch((error) => {
        alert(error)
      })

    console.log('RegisterUser done...')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Hello</Text>
      <Button title="Register" onPress={() => RegisterUser()} />
    </SafeAreaView>
  )
}

// Create user in users collection with uid
// const usersRef = firebase.firestore().collection('users')
// usersRef
//   .doc(uid)
//   .set(data)
//   .then(() => {
//     navigation.navigate('ProfileStepOne', { user: data })
//   })
//   .catch((error) => {
//     alert(error)
//   })
