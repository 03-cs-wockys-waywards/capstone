import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Pill } from "../../components/Pill";
import { displaySemanticPronouns, getRandomLightColor } from "../../helpers";
import styles from "./styles";

export default function UserDetails({ user }) {
  const { firstName, lastName, profilePicture, pronouns, interests } = user;

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

  return (
    <ImageBackground
      // image source must be in {uri: linkToPhoto } format!
      source={{ uri: profilePicture }}
      style={styles.image}
      imageStyle={styles.imageStyle}
      resizeMode="cover"
    >
      <View style={styles.profileInfoContainer}>
        <Text style={styles.nameText}>
          {`${firstName} ${lastName[0]}.`}
        </Text>
        <Text style={styles.pronounText}>{renderPronouns(pronouns)}</Text>
        <Text style={styles.subheadingText}>Interests</Text>
        <View style={styles.interestsContainer}>
          {renderInterests(interests)}
        </View>
      </View>
    </ImageBackground>
  );
}
