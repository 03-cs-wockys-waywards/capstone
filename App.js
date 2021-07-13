import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { firebase } from './src/firebaseSpecs/config';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  LandingScreen,
  LoginScreen,
  RegistrationScreen,
  ProfileStepOne,
  ProfileStepTwo,
  ProfileStepThree,
  Confirmation,
} from './src/screens';
import MainScreen from './src/Main';
import { decode, encode } from 'base-64';
import store from './src/store';
import { screenOptions, MyStatusBar } from './src/components/StatusBar';

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();

export class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loading: true,
    };
  }

  componentDidMount() {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            this.setState({
              loading: false,
              user: userData,
            });
          })
          .catch((error) => {
            this.setState({ loading: false });
          });
      } else {
        this.setState({ loading: false });
      }
    });
  }

  render() {
    const { loading, user } = this.state;

    if (loading) {
      return <></>;
    }

    // if the user is NOT logged in, render the below screens
    if (!user) {
      return (
        <NavigationContainer>
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
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="ProfileStepOne" component={ProfileStepOne} />
            <Stack.Screen name="ProfileStepTwo" component={ProfileStepTwo} />
            <Stack.Screen
              name="ProfileStepThree"
              component={ProfileStepThree}
            />
            <Stack.Screen name="Confirmation" component={Confirmation} />
          </Stack.Navigator>
          <MyStatusBar backgroundColor="white" barStyle="dark-content" />
        </NavigationContainer>
      );
    }

    // if the user is logged in, render the below screens
    return (
      <Provider store={store}>
        <NavigationContainer>
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
          <MyStatusBar backgroundColor="white" barStyle="dark-content" />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
