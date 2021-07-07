import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, SafeAreaView, Text } from 'react-native';
import { firebase } from '../../../firebaseSpecs/config';

export default function ConfirmationScreen({ navigation }) {
  const user = useSelector((state) => state.user);

  const RegisterUser = () => {
    // Create user in users collection with uid
    const uid = user.userId;
    const usersRef = firebase.firestore().collection('users');

    usersRef
      .doc(uid)
      .set(user)
      .then(() => {
        navigation.navigate('Login');
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Hello</Text>
      <Button title="Register" onPress={RegisterUser} />
    </SafeAreaView>
  );
}
