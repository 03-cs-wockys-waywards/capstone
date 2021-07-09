import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
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

