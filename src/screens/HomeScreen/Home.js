import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'
import { firebase } from '../../firebaseSpecs/config'

import UsersList from './UsersList'

const HomeStack = createStackNavigator()

const EmptyScreen = () => {
  return null
}

const logo = () => <Text>Logo Placeholder</Text>

const rightIcons = (navigation) => (
  <View style={{ flexDirection: 'row' }}>
    <Icon
      type="material-community"
      name="message-outline"
      size={25}
      onPress={() => navigation.navigate('Chat')}
    />
    <Icon
      type="material-community"
      name="calendar-check-outline"
      size={25}
      onPress={() => navigation.navigate('Calendar')}
    />
  </View>
)

export default function Home({ navigation }) {
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
      <HomeStack.Screen name="Chat" component={EmptyScreen} />
      <HomeStack.Screen name="Calendar" component={EmptyScreen} />
    </HomeStack.Navigator>
  )
}
