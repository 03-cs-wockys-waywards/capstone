import React, { useState, useEffect } from "react";
import {
  View,
  Text,
} from "react-native";
import styles from "../styles";
import { Pill } from "../../../components/Pill";
import { getColorsArray } from "../../../helpers/getColorsArray";
import InterestsModal from "./InterestsModal";

export default function UpdateInterests({ user, setUser }) {
  const { interests } = user;
  const [colors, setColors] = useState([]);
  
  useEffect(() => {
    const colors = getColorsArray(5);
    setColors(colors);
  }, []);

  return (
    <View>
      <Text style={styles.label}>Interests</Text>
      <InterestsModal user={user} setUser={setUser} />
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
