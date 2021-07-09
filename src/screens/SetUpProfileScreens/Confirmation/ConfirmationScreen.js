import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Image,
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
  const { image, loading, url } = route.params;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const registerUser = () => {
    // Create user in users collection with uid
    const uid = user.userId;
    const usersRef = firebase.firestore().collection('users');

    usersRef
      .doc(uid)
      .set(user)
      .then(() => {
        navigation.navigate('Home');
        // Route to Login for testing purpose
        // navigation.navigate('Login');
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

  // const renderProfilePicture = () => {
  //   console.log('imageName in confimration screen', imageName);
  //   let imageRef = firebase.storage().ref('/' + imageName);
  //   imageRef.getDownloadURL().then((url) => {
  //     dispatch(editUserInfo({ profilePicture: url }));
  //     // setImage(url);
  //     console.log('user profile picture', user.profilePicture);
  //   });
  //   console.log('loading props', loading);
  // };

  // const renderProfilePicture = () => {
  //   const storageRef = firebase.storage().ref();
  //   const profilePicRef = storageRef.child(
  //     `profile/${firebase.auth().currentUser.uid}`
  //   );
  //   // console.log('profilePicRef', profilePicRef);
  //   profilePicRef.getDownloadURL().then((url) => {
  //     console.log('url', url);
  //     console.log('loading props', loading);
  //     setUrl(url);
  //   });
  //   console.log('image', image);
  // };

  // useEffect(() => {
  //   if (!loading) {
  //     renderProfilePicture();
  //   }
  // }, [loading]);

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
          {/* must be in {uri: linkToPhoto } format! */}
          {/* <Image source={user.profilePicture} /> */}
          {/* <Image source={{ uri: url }} style={{ width: 300, height: 600 }} /> */}
          <ImageBackground
            // source={user.image}
            source={{ uri: url }}
            // defaultSource={defaultProfilePicture}
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
