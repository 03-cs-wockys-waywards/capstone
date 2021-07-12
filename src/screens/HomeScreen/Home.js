import React from 'react'
import { Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack'

import { rightIcons } from '../../components/HeaderRightIcons'

import UsersList from './DiscoverList'
import MatchesList from './MatchesList'
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
  //console.log('HOME component runnning...')

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="UsersList"
        component={UsersList}
        options={{
          headerLeft: () => logo(),
          headerTitle: '',
          headerRight: () => rightIcons(navigation),
        }}
      />
      {/* <HomeStack.Screen name="MatchesList" component={MatchesList} /> */}
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

//initialRouteName="UsersList"
