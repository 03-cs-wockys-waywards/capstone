import React from "react";
import {
  View,
  Image,
} from "react-native";
import ImageModal from "./ImageModal";
import styles from "../styles";

export default function UpdateImage({ updatedUser, setUpdatedUser }) {
  const { profilePicture } = updatedUser
  return (
    <View>
      <Image source={{ uri: profilePicture }} style={styles.image} />
      <ImageModal updatedUser={updatedUser} setUpdatedUser={setUpdatedUser} />
    </View>
  );
}

