import React from "react";
import {
  View,
  Image,
} from "react-native";
import ImageModal from "./ImageModal";
import styles from "../styles";

export default function UpdateImage({ user, setUser }) {
  const { profilePicture } = user;
  return (
    <View>
      <Image source={{ uri: profilePicture }} style={styles.image} />
      <ImageModal user={user} setUser={setUser} />
    </View>
  );
}

