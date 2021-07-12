import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { firebase } from "../../firebaseSpecs/config";
import { editUserInfo } from "../../store/userReducer";
import { Pill } from "../../components/Pill";
import { getRandomLightColor } from "../../helpers/getRandomLightColor";
import { displaySemanticPronouns } from "../../helpers/displaySemanticPronouns";
import Header from "./Header";
import styles from "./styles";

const user = {
  email: "ncasteneda@gmail.com",
  firstName: "Natalie",
  lastName: "Casteneda",
  pronouns: ["she"],
  interests: [
    "gardening",
    "computer programming",
    "foreign language learning",
    "listening to music",
    "cooking",
  ],
  profilePicture:
    "https://images.pexels.com/photos/4001552/pexels-photo-4001552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  likes: [],
};

export default function ProfileScreen({ navigation }) {
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);
  // const [picURL, setPicURL] = useState("");
  const [picURL, setPicURL] = useState(user.profilePicture);

  const renderName = (firstName, lastName) => {
    return `${firstName} ${lastName[0]}.`;
  };

  const renderPronouns = (pronouns) => {
    return pronouns
      .map((pronoun) => displaySemanticPronouns(pronoun))
      .join(", ");
  };

  const renderInterests = (interests) => {
    return interests.map((interest, index) => {
      const backgroundColor = getRandomLightColor();
      return (
        <Pill key={index} text={interest} backgroundColor={backgroundColor} />
      );
    });
  };

  // const loadProfilePicture = () => {
  //   const profilePicRef = firebase
  //     .storage()
  //     .ref()
  //     .child(`profile/${firebase.auth().currentUser.uid}`);

  //   profilePicRef.getDownloadURL().then((url) => {
  //     setPicURL(url);
  //     // Save user profile photo in redux
  //     dispatch(editUserInfo({ profilePicture: url }));
  //   });
  // };

  // useEffect(() => {
  //   loadProfilePicture();
  // }, []);

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
      <Header navigation={navigation} user={user} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Profile Confirmation</Text>
          <Text style={styles.labelText}>
            This is how your profile appears to others.
          </Text>
        </View> */}
        <View style={styles.profilePreviewContainer}>
          {renderProfilePicture()}
        </View>
        {/* <View style={styles.confirmButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={registerUser}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
