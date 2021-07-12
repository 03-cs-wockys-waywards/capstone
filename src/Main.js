import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { firebase } from './firebaseSpecs/config'
import { HomeScreen } from './screens'
import { editUserInfo, clearUserData, fetchUser } from './store/userReducer'

const Tab = createMaterialBottomTabNavigator()

const EmptyScreen = () => {
  return null
}

export default function MainScreen(props) {
  const user = props.route.params.user
  //console.log('Main props: ', props.route.params.user)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(editUserInfo(user))
  }, [])

  const updatedUser = useSelector((state) => state.user)
  // console.log('User in redux: ', updatedUser)

  //render() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#d7f81e"
      inactiveColor="#e4dbff"
      labeled={false}
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: '#106563' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
//}

// const mapDispatch = (dispatch) => ({
//   clearUserData: () => dispatch(clearUserData()),
//   setUser: (userInfo) => dispatch(editUserInfo(userInfo)),
// })

// export default connect(null, mapDispatch)(Main)
