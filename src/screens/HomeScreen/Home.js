import React, { useEffect, useState } from 'react'
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  Button,
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'
import { firebase } from '../../firebaseSpecs/config'

import UsersList from './UsersList'

const HomeStack = createStackNavigator()

const EmptyScreen = () => {
  return null
}

export default function Home() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={UsersList}
        options={{
          headerLeft: () => <Text>Logo Placeholder</Text>,
          headerTitle: '',
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons name="message-outline" size={25} />
              <MaterialCommunityIcons name="calendar-check-outline" size={25} />
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  )
}
