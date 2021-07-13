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
import UserDetails from "./UserDetails";
import styles from "./styles";


export default function ProfileScreen({ navigation }) {
  const user = useSelector((state) => state.user);

  console.log('user in ProfileScreen >>>>>', user)

  // const renderPronouns = (pronouns) => {
  //   return pronouns
  //     .map((pronoun) => displaySemanticPronouns(pronoun))
  //     .join(", ");
  // };

  // const renderInterests = (interests) => {
  //   return interests.map((interest, index) => {
  //     const backgroundColor = getRandomLightColor();
  //     return (
  //       <Pill key={index} text={interest} backgroundColor={backgroundColor} />
  //     );
  //   });
  // };

  // const renderProfilePicture = () => {
  //   const { profilePicture } = user;
  //   if (profilePicture) {

  //     return (
  //       <ImageBackground
  //         // image source must be in {uri: linkToPhoto } format!
  //         source={{ uri: profilePicture }}
  //         style={styles.image}
  //         imageStyle={styles.imageStyle}
  //         resizeMode="cover"
  //       >
  //         <View style={styles.profileInfoContainer}>
  //           <Text style={styles.nameText}>
  //             {renderName(user.firstName, user.lastName)}
  //           </Text>
  //           <Text style={styles.pronounText}>
  //             {renderPronouns(user.pronouns)}
  //           </Text>
  //           <Text style={styles.subheadingText}>Interests</Text>
  //           <View style={styles.interestsContainer}>
  //             {renderInterests(user.interests)}
  //           </View>
  //         </View>
  //       </ImageBackground>
  //     );
  //   }
  // };

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
          {user && <UserDetails user={user} />}
          {/* {renderProfilePicture()} */}
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
