import React from 'react'
// import { View, StyleSheet } from 'react-native'
// import { Icon } from 'react-native-elements'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Bottom = createMaterialBottomTabNavigator()

export default function BottomNavbar() {
  return (
    <Bottom.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      inactiveColor="#ffffff"
      labeled={false}
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Bottom.Screen
        name="Search"
        component={}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />)
        }}
      />
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          labeled: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-circle-outline" color={color} size={35} />)
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />)
        }}
      />
    </Bottom.Navigator>
  )
}
