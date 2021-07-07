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
import styles from './styles';

export default function ConfirmationScreen({ navigation }) {
  const user = useSelector((state) => state.user);

  const displaySemanticPronouns = (pronoun) => {
    if (pronoun === 'she') {
      return 'She / Her';
    } else if (pronoun === 'he') {
      return 'He / Him';
    } else if (pronoun === 'they') {
      return 'They / Them';
    } else if (pronoun === 'undisclosed') {
      return "I'd rather not say";
    }
  };

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
          <Text>{`${user.firstName} ${user.lastName[0]}.`}</Text>
          <Text>
            {user.pronouns
              .map((pronoun) => displaySemanticPronouns(pronoun))
              .join(', ')}
          </Text>
        </View>
        <View>
          {user.interests.map((interest, index) => {
            const backgroundColor = getRandomLightColor();
            return (
              <Pill
                key={index}
                text={interest}
                backgroundColor={backgroundColor}
              />
            );
          })}
        </View>
        <View style={styles.confirmButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={registerUser}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
