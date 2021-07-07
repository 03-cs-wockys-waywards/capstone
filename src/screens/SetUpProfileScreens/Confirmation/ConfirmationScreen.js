import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  ActivityIndicator,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Pill } from '../../../components/Pill';
import { firebase } from '../../../firebaseSpecs/config';
import { getRandomLightColor } from '../../../helpers/getRandomLightColor';
import { displaySemanticPronouns } from '../../../helpers/displaySemanticPronouns';
import styles from './styles';

export default function ConfirmationScreen({ navigation }) {
  const user = useSelector((state) => state.user);

  const registerUser = () => {
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

  const renderName = (firstName, lastName) => {
    return `${firstName} ${lastName[0]}.`;
  };

  const renderPronouns = (pronouns) => {
    return pronouns
      .map((pronoun) => displaySemanticPronouns(pronoun))
      .join(', ');
  };

  const renderInterests = (interests) => {
    return interests.map((interest, index) => {
      const backgroundColor = getRandomLightColor();
      return (
        <Pill key={index} text={interest} backgroundColor={backgroundColor} />
      );
    });
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Profile Confirmation</Text>
          <Text style={styles.labelText}>
            This is how your profile appears to others!
          </Text>
        </View>
        <View>
          <Image source={user.image} style={styles.image} />
        </View>
        <View>
          <Text>{renderName(user.firstName, user.lastName)}</Text>
          <Text>{renderPronouns(user.pronouns)}</Text>
        </View>
        <View>{renderInterests(user.interests)}</View>
        <View style={styles.confirmButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={registerUser}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
