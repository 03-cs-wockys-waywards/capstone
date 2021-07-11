import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SafeAreaView, FlatList } from 'react-native'
import { fetchUsersWithInterests } from '../../store/usersReducer'
import styles from './styles'
import UserRow from './UserRow'

export default function UsersList({ navigation }) {
  const interests = useSelector((state) => state.user.interests)
  const users = useSelector((state) => state.users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsersWithInterests(interests))
  }, [])

  //console.log('Current user interests on state: ', userInterests)
  //console.log('USERS in UsersList: ', users.length)

  const renderItem = ({ item }) => (
    <UserRow item={item} navigation={navigation} />
  )

  return (
    <SafeAreaView style={styles.listContainer}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  )
}
