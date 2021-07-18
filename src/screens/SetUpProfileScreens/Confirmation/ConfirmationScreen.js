import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Pill } from '../../../components/Pill';
import { firebase } from '../../../firebaseSpecs/config';

import { getLightColorsArray } from '../../../helpers/getColorsArray';
import { lightColors } from '../../../helpers/colors';
import { displaySemanticPronouns } from '../../../helpers/displaySemanticPronouns';
import defaultProfilePicture from '../../../../assets/images/default-profile-picture.jpg';
import { handleErrors } from '../../../helpers';
import styles from './styles';

const colors = getLightColorsArray(lightColors, 5);

export default function ConfirmationScreen({ navigation, route }) {
  const { password, defaultPhotoBool } = route.params;
  const user = useSelector((state) => state.user);
  const profilePicture = user.profilePicture;

  const registerUser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          ...user,
        };
        const usersRef = firebase.firestore().collection('users');
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate('Home', { user: data });
          })
          .catch((error) => {
            // catch errors before the users actually register
            handleErrors(error.code);
          });
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
      return (
        <Pill key={index} text={interest} backgroundColor={colors[index]} />
      );
    });
  };

  const renderProfilePicture = () => {
    // if the user selected to use a default photo
    if (defaultPhotoBool) {
      return (
        <ImageBackground
          // image source must be in {uri: linkToPhoto } format!
          source={defaultProfilePicture}
          style={styles.image}
          imageStyle={styles.imageStyle}
          resizeMode="cover"
        >
          <View style={styles.profileInfoContainer}>
            <Text style={styles.nameText}>
              {renderName(user.firstName, user.lastName)}
            </Text>
            <Text style={styles.pronounText}>
              {renderPronouns(user.pronouns)}
            </Text>
            <Text style={styles.subheadingText}>Interests</Text>
            <View style={styles.interestsContainer}>
              {renderInterests(user.interests)}
            </View>
          </View>
        </ImageBackground>
      );
    } else if (profilePicture) {
      return (
        <ImageBackground
          source={{ uri: profilePicture }}
          style={styles.image}
          imageStyle={styles.imageStyle}
          resizeMode="cover"
        >
          <View style={styles.profileInfoContainer}>
            <Text style={styles.nameText}>
              {renderName(user.firstName, user.lastName)}
            </Text>
            <Text style={styles.pronounText}>
              {renderPronouns(user.pronouns)}
            </Text>
            <Text style={styles.subheadingText}>Interests</Text>
            <View style={styles.interestsContainer}>
              {renderInterests(user.interests)}
            </View>
          </View>
        </ImageBackground>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Profile Confirmation</Text>
          <Text style={styles.subtitle}>
            This is how your profile will appear to others.
          </Text>
        </View>
        <View style={styles.profilePreviewContainer}>
          {renderProfilePicture()}
        </View>
        <TouchableOpacity style={styles.button} onPress={registerUser}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
