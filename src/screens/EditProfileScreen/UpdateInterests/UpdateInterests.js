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
import styles from "../styles";
import { Pill } from "../../../components/Pill";
import { getColorsArray } from "../../../helpers/getColorsArray";
import InterestsModal from "./InterestsModal";

export default function UpdateInterests({ updatedUser, setUpdatedUser }) {
  const { interests } = updatedUser;
  const [colors, setColors] = useState([]);
  
  useEffect(() => {
    const colors = getColorsArray(interests.length);
    setColors(colors);
  }, []);

  return (
    <View>
      <Text style={styles.label}>Interests</Text>
      <InterestsModal updatedUser={updatedUser} setUpdatedUser={setUpdatedUser} />
      <View style={styles.interestsContainer}>
        {interests.map((interest, idx) => {
          return (
            <Pill
              key={idx}
              text={interest}
              backgroundColor={colors[idx]}
            />
          );
        })}
      </View>
    </View>
  );
}
