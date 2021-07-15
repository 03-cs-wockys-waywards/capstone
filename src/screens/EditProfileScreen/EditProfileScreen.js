import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux'
import UpdateImage from './UpdateImage/UpdateImage'
import UpdateName from './UpdateName'
import UpdatePronouns from './UpdatePronouns'
import UpdateInterests from './UpdateInterests/UpdateInterests'
import { editUserInfo } from '../../store/userReducer'

export default function EditProfile() {
  const _user = useSelector((state) => state.user)
  const [user, setUser] = useState(_user)

  const dispatch = useDispatch()

  useEffect(() => {
    //console.log('User BEFORE dispatch >>>>> ', user)
    dispatch(editUserInfo(user))
    //console.log('User AFTER dispatch >>>>> ', user)
  }, [user])

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
