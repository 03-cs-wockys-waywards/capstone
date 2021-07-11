import React from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack'

import UsersList from './UsersList'
import SingleUserProfile from '../SingleUserProfileScreen/SingleUserProfile'

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

const renderName = (route) => {
  return `${route.params.user.firstName} ${route.params.user.lastName[0]}.`
}

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
      <HomeStack.Screen
        name="Single User"
        component={SingleUserProfile}
        options={({ route }) => ({
          title: renderName(route),
        })}
      />
    </HomeStack.Navigator>
  )
}
