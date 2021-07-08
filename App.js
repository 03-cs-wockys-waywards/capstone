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
import { StatusBar } from 'expo-status-bar'
import { firebase } from './src/firebaseSpecs/config'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {
  LoginScreen,
  RegistrationScreen,
  ProfileStepOne,
  ProfileStepTwo,
  ProfileStepThree,
  Confirmation,
} from './src/screens'
import MainScreen from './src/Main'
import { decode, encode } from 'base-64'
import { Provider } from 'react-redux'
import store from './src/store'

if (!global.btoa) {
  global.btoa = encode
}
if (!global.atob) {
  global.atob = decode
}

const Stack = createStackNavigator()

const screenOptions = {
  cardStyle: { backgroundColor: 'white' },
}
const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
)

const STATUSBAR_HEIGHT = StatusBar.currentHeight
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
  },
})

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
        <Stack.Navigator headerMode="none" screenOptions={screenOptions}>
          {user ? (
            <Stack.Screen name="Main" component={MainScreen} />
          ) : (
            <>
              {/* <Stack.Screen
              name="Landing"
              component={LandingScreen}
              options={{ headerShown: false }}
            /> */}
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen
                name="Registration"
                component={RegistrationScreen}
              />
              <Stack.Screen name="ProfileStepOne" component={ProfileStepOne} />
              <Stack.Screen name="ProfileStepTwo" component={ProfileStepTwo} />
              <Stack.Screen
                name="ProfileStepThree"
                component={ProfileStepThree}
              />
              <Stack.Screen name="Confirmation" component={Confirmation} />
              <Stack.Screen name="Main" component={MainScreen} />
            </>
          )}
        </Stack.Navigator>
        <MyStatusBar />
      </NavigationContainer>
    </Provider>
  )
}
