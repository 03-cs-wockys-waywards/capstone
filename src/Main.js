import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import AllUsersList from './screens/HomeScreen/Home'

const Tab = createMaterialBottomTabNavigator()

const EmptyScreen = () => {
  return null
}

export class Main extends Component {
  render() {
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
          name="Search"
          component={EmptyScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={AllUsersList}
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
}

export default Main
