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
import { getRandomLightColor } from "../../../helpers/getRandomLightColor";

export default function UpdateInterests({ updatedUser, setUpdatedUser }) {
  const { interests } = updatedUser;
  const [colors, setColors] = useState([]);
  
  useEffect(() => {
    const colors = new Array(interests.length);
    for (let i = 0; i < colors.length; i++) {
      colors[i] = getRandomLightColor();
    }
    setColors(colors);
  }, []);

  console.log(colors)

  return (
    <View>
      <Text style={styles.label}>Interests</Text>
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
