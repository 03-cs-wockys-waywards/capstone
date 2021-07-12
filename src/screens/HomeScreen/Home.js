import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack'
import { firebase } from '../../firebaseSpecs/config'
import { useDispatch } from 'react-redux'
import { editUserInfo } from '../../store/userReducer'

import { rightIcons } from '../../components/HeaderRightIcons'

import UsersList from './UsersList'
import SingleUserProfile from '../SingleUserProfileScreen/SingleUserProfile'

const HomeStack = createStackNavigator()

const EmptyScreen = () => {
  return null
}

const logo = () => <Text>Logo Placeholder</Text>

const renderName = (route) => {
  return `${route.params.user.firstName} ${route.params.user.lastName[0]}.`
}

const userChatIcon = (navigation) => (
  <Icon
    type="material-community"
    name="message-outline"
    size={25}
    onPress={() => navigation.navigate('Chat')}
  />
)

export default function Home({ navigation }) {
  // const [loading, setLoading] = useState(true)
  // const [user, setUser] = useState({});
  const dispatch = useDispatch()

  // useEffect(() => {
  //   const usersRef = firebase.firestore().collection('users')
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       usersRef
  //         .doc(user.uid)
  //         .get()
  //         .then((document) => {
  //           const userData = document.data()
  //           //console.log('userData in useEffect >>>>>>', userData)
  //           dispatch(editUserInfo(userData))
  //           //console.log('----------------')
  //           // setLoading(false)
  //           // setUser(userData)
  //           //console.log('user after setUser >>>>>>>>>', user);
  //         })
  //         .catch((error) => {
  //           // setLoading(false)
  //           console.error(error)
  //         })
  //       // console.log('user in useEffect', user);
  //     } else {
  //       // setLoading(false)
  //       return
  //     }
  //   })
  // }, [])

  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={UsersList}
        options={{
          headerLeft: () => logo(),
          headerTitle: '',
          headerRight: () => rightIcons(navigation),
        }}
      />
      <HomeStack.Screen name="ChatList" component={EmptyScreen} />
      <HomeStack.Screen name="ChatConversation" component={EmptyScreen} />
      <HomeStack.Screen name="Calendar" component={EmptyScreen} />
      <HomeStack.Screen
        name="Single User"
        component={SingleUserProfile}
        options={({ route }) => ({
          title: renderName(route),
          headerRight: () => userChatIcon(navigation),
        })}
      />
    </HomeStack.Navigator>
  )
}
