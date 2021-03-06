import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { firebase } from './src/firebaseSpecs/config'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  LandingScreen,
  LoginScreen,
  RegistrationScreen,
  ProfileStepOne,
  ProfileStepTwo,
  ProfileStepThree,
  Confirmation,
} from './src/screens'
import MainScreen from './src/Main'
import { screenOptions, MyStatusBar } from './src/components/StatusBar'
import { decode, encode } from 'base-64'
import store from './src/store'

import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import {
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from '@expo-google-fonts/lato'

if (!global.btoa) {
  global.btoa = encode
}
if (!global.atob) {
  global.atob = decode
}

const customFonts = {
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
}

const Stack = createStackNavigator()

export class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      loading: true,
      isLoggedIn: false,
      fontsLoaded: false,
    }

    this.loadFontsAsync = this.loadFontsAsync.bind(this)
  }

  async loadFontsAsync() {
    await Font.loadAsync(customFonts).then(() =>
      this.setState({ fontsLoaded: true })
    )
  }

  componentDidMount() {
    this.loadFontsAsync()

    const usersRef = firebase.firestore().collection('users')
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            this.setState({
              loading: false,
              user: userData,
              isLoggedIn: true,
            })
          })
          .catch((error) => {
            this.setState({ loading: false })
          })
      } else {
        this.setState({ loading: false, isLoggedIn: false })
      }
    })
  }

  render() {
    const { loading, user, isLoggedIn, fontsLoaded } = this.state

    if (loading) {
      return <AppLoading />
    } else {
      return fontsLoaded ? (
        <Provider store={store}>
          <NavigationContainer>
            {isLoggedIn ? (
              <Stack.Navigator
                initialRouteName="Main"
                headerMode="none"
                screenOptions={screenOptions}
              >
                <Stack.Screen
                  name="Main"
                  component={MainScreen}
                  initialParams={{ user: user }}
                />
              </Stack.Navigator>
            ) : (
              <Stack.Navigator
                initialRouteName="Landing"
                headerMode="none"
                screenOptions={screenOptions}
              >
                <Stack.Screen
                  name="Landing"
                  component={LandingScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen
                  name="Registration"
                  component={RegistrationScreen}
                />
                <Stack.Screen
                  name="ProfileStepOne"
                  component={ProfileStepOne}
                />
                <Stack.Screen
                  name="ProfileStepTwo"
                  component={ProfileStepTwo}
                />
                <Stack.Screen
                  name="ProfileStepThree"
                  component={ProfileStepThree}
                />
                <Stack.Screen name="Confirmation" component={Confirmation} />
              </Stack.Navigator>
            )}
            <MyStatusBar backgroundColor="white" barStyle="dark-content" />
          </NavigationContainer>
        </Provider>
      ) : (
        <AppLoading/>
      )
    }
  }
}

export default App
