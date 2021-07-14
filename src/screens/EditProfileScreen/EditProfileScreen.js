import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux'
import UpdateImage from './UpdateImage/UpdateImage'
import UpdateName from './UpdateName'
import UpdatePronouns from './UpdatePronouns'
import UpdateInterests from './UpdateInterests/UpdateInterests'

export default function EditProfile() {
  const _user = useSelector((state) => state.user)
  const [user, setUser] = useState(_user)

  return (
    <SafeAreaView styles={styles.container}>
      <ScrollView>
        <UpdateImage user={user} setUser={setUser} />
        <UpdateName user={user} setUser={setUser} />
        <UpdatePronouns user={user} setUser={setUser} />
        <UpdateInterests user={user} setUser={setUser} />
      </ScrollView>
    </SafeAreaView>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
//   scrollview: {
//     margin: '10%',
//   },
// })
