import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'
import {
  View,
  SafeAreaView,
  Platform,
  StyleSheet,
  Text,
  Button,
} from 'react-native'
import { firebase } from './src/firebaseSpecs/config'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  LoginScreen,
  HomeScreen,
  RegistrationScreen,
  ProfileStepOne,
  ProfileStepTwo,
  ProfileStepThree,
  Confirmation,
} from './src/screens'
import Main from './src/Main'
import { decode, encode } from 'base-64'
import { Provider } from 'react-redux'
import store from './src/store'
import AllUsersList from './src/screens/HomeScreen/AllUsersList'

if (!global.btoa) {
  global.btoa = encode
}
if (!global.atob) {
  global.atob = decode
}

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()

const EmptyScreen = () => {
  return null
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users')
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          })
      } else {
        setLoading(false)
      }
    })
  }, [])

  if (loading) {
    return <></>
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        {user ? (
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
                  <MaterialCommunityIcons
                    name="magnify"
                    color={color}
                    size={28}
                  />
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
                  <MaterialCommunityIcons
                    name="account"
                    color={color}
                    size={28}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator headerMode="none" initialRouteName="Landing">
            {/* <Stack.Screen
              name="Landing"
              component={LandingScreen}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="ProfileStepOne" component={ProfileStepOne} />
            <Stack.Screen name="ProfileStepTwo" component={ProfileStepTwo} />
            <Stack.Screen
              name="ProfileStepThree"
              component={ProfileStepThree}
            />
            <Stack.Screen name="Confirmation" component={Confirmation} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </Provider>
  )
}
