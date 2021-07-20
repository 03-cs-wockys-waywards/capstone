import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Icon } from 'react-native-elements'
import {
  HomeScreen,
  ProfileNavigator,
  ChatNavigator,
  SearchNavigator,
} from './screens'
import { editUserInfo } from './store/userReducer'

const Tab = createMaterialBottomTabNavigator()

export default function MainScreen(props) {
  const user = props.route.params.user
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(editUserInfo(user))
  }, [])

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#E8073F"
      inactiveColor="#1261B1"
      labeled={false}
      barStyle={{
        backgroundColor: '#fff',
        alignItems: 'center',
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline'
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbox' : 'chatbox-outline'
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline'
          }
          return <Icon type="ionicon" name={iconName} size={size} color={color} />
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchNavigator} />
      <Tab.Screen name="Chat" component={ChatNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  )
}
