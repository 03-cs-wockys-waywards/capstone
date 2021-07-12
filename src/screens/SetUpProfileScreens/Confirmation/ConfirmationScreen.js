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
import { editUserInfo } from '../../../store/userReducer';
import { Pill } from '../../../components/Pill';
import { firebase } from '../../../firebaseSpecs/config';
import { getRandomLightColor } from '../../../helpers/getRandomLightColor';
import { displaySemanticPronouns } from '../../../helpers/displaySemanticPronouns';
import styles from './styles';

export default function ConfirmationScreen({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [picURL, setPicURL] = useState('');

  const registerUser = () => {
    // Create user in users collection with uid
    const uid = user.userId;
    const usersRef = firebase.firestore().collection('users');

    usersRef
      .doc(uid)
      .set(user)
      .then(() => {
        // TODO: navigation.navigate("Home");
        // navigation.navigate('Login');
        // navigating to EditProfile for testing purposes
        //navigation.navigate('EditProfile')
        navigation.navigate('Main');
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

  const loadProfilePicture = () => {
    const profilePicRef = firebase
      .storage()
      .ref()
      .child(`profile/${firebase.auth().currentUser.uid}`);

    profilePicRef.getDownloadURL().then((url) => {
      setPicURL(url);
      // Save user profile photo in redux
      dispatch(editUserInfo({ profilePicture: url }));
    });
  };

  useEffect(() => {
    loadProfilePicture();
  }, []);

  const renderProfilePicture = () => {
    if (picURL) {
      return (
        <ImageBackground
          // image source must be in {uri: linkToPhoto } format!
          source={{ uri: picURL }}
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
          <Text style={styles.labelText}>
            This is how your profile appears to others.
          </Text>
        </View>
        <View style={styles.profilePreviewContainer}>
          {renderProfilePicture()}
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
