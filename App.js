import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Platform, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { firebase } from './src/firebaseSpecs/config';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens';
import ProfileStepOne from './src/screens/SetUpProfileScreens/ProfileStepOne';
import { decode, encode } from 'base-64';
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();
const screenOptions = {
  cardStyle: { backgroundColor: 'white' },
};
const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

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
});

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setLoading(false);
            setUser(userData);
          })
          .catch((error) => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" screenOptions={screenOptions}>
        {user ? (
          // <Stack.Screen name="Home">
          //   {(props) => <HomeScreen {...props} extraData={user} />}
          // </Stack.Screen>
          <Stack.Screen name="ProfileStepOne" component={ProfileStepOne} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
      </Stack.Navigator>
      <MyStatusBar backgroundColor="white" barStyle="dark-content" />
    </NavigationContainer>
  );
}
