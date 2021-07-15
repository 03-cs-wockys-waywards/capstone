import React from 'react'
import { Text, Image, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack'
import UsersList from './UsersList'
import SingleUserProfile from '../SingleUserProfileScreen/SingleUserProfile'
import headerLogo from '../../../assets/images/header-logo.png'

const HomeStack = createStackNavigator()

// replace with our actual logo
const logo = () => <Image source={headerLogo} style={styles.logo} />

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
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="UsersList"
        component={UsersList}
        options={{
          headerLeft: () => logo(),
          headerTitle: '',
          headerStyle: {
            shadowColor: 'transparent',
            shadowRadius: 0,
            borderBottomWidth: 0,
            backgroundColor: '#fff',
          },
        }}
      />
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

const styles = StyleSheet.create({
  header: {
    shadowColor: 'transparent',
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  logo: {
    flex: 1,
    alignSelf: 'flex-start',
    resizeMode: 'center',
    marginLeft: -100,
  },
})
