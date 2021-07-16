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
      labelStyle={{ fontSize: 12 }}
      barStyle={{
        backgroundColor: '#fff',
        alignItems: 'center',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              type="material-community"
              name="home"
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              type="material-community"
              name="magnify"
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              type="material-community"
              name="forum-outline"
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              type="material-community"
              name="account"
              color={color}
              size={28}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
