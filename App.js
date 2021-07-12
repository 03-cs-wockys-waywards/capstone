import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { View, SafeAreaView, Platform, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
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
import { decode, encode } from 'base-64'
import store from './src/store'

if (!global.btoa) {
  global.btoa = encode
}
if (!global.atob) {
  global.atob = decode
}

const Stack = createStackNavigator()

// const screenOptions = {
//   cardStyle: { backgroundColor: 'white' },
// }
// const MyStatusBar = ({ backgroundColor, ...props }) => (
//   <View style={[styles.statusBar, { backgroundColor }]}>
//     <SafeAreaView>
//       <StatusBar translucent backgroundColor={backgroundColor} {...props} />
//     </SafeAreaView>
//   </View>
// )

// const STATUSBAR_HEIGHT = StatusBar.currentHeight
// const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   statusBar: {
//     height: STATUSBAR_HEIGHT,
//   },
//   appBar: {
//     height: APPBAR_HEIGHT,
//   },
//   content: {
//     flex: 1,
//   },
// })

// export default function App() {
export class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
      loading: true,
    }
  }
  // const [loading, setLoading] = useState(true)
  // const [user, setUser] = useState({});

  //const [loading, setLoading] = useState(false)
  //const [user, setUser] = useState({})
  //const [isLoggedIn, setLoggedIn] = useState(false)

  // useEffect(() => {
  //   //const usersRef = firebase.firestore().collection('users')
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (!user) {
  //       setLoading(true)
  //       setLoggedIn(false)
  //     } else {
  //       setLoading(true)
  //       setLoggedIn(true)
  //     }
  //   })
  // }, [])

  componentDidMount() {
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
            })
          })
          .catch((error) => {
            this.setState({ loading: false })
          })
      } else {
        this.setState({ loading: false })
      }
    })
  }

  render() {
    const { loading, user } = this.state
    console.log('>>>>>user state in app component render: ', user)

    if (loading) {
      return <></>
    }

    if (!user) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing" headerMode="none">
            <Stack.Screen
              name="Landing"
              component={LandingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="ProfileStepOne" component={ProfileStepOne} />
            <Stack.Screen name="ProfileStepTwo" component={ProfileStepTwo} />
            <Stack.Screen
              name="ProfileStepThree"
              component={ProfileStepThree}
            />
            <Stack.Screen name="Confirmation" component={Confirmation} />
            <Stack.Screen name="Main" component={MainScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }

    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main" headerMode="none">
            <Stack.Screen
              name="Main"
              component={MainScreen}
              initialParams={{ user: user }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App
