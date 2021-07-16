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
import defaultProfilePicture from '../../../images/default-profile-picture.jpg';
import styles from './styles';

export default function ConfirmationScreen({ navigation, route }) {
  const { password, defaultPhotoBool } = route.params;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [picURL, setPicURL] = useState('');

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
            alert(error);
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
      const backgroundColor = getRandomLightColor();
      return (
        <Pill key={index} text={interest} backgroundColor={backgroundColor} />
      );
    });
  };

  const loadProfilePicture = () => {
    if (!defaultPhotoBool) {
      const profilePicRef = firebase
        .storage()
        .ref()
        .child(`profile/${user.email}`);

      profilePicRef.getDownloadURL().then((url) => {
        setPicURL(url);
        // Save user profile photo in redux
        dispatch(editUserInfo({ profilePicture: url }));
      });
    }
  };

  useEffect(() => {
    loadProfilePicture();
  }, []);

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
    } else if (picURL) {
      return (
        <ImageBackground
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
