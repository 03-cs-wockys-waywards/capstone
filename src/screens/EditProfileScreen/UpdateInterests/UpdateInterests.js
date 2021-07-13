import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
// import styles from "../styles";
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
    <View style={{ zIndex : -5 }}>
      <View style={styles.container}>
        <Text style={styles.label}>Interests</Text>
        <InterestsModal user={user} setUser={setUser} />
      </View>
      <View style={[styles.container, styles.interestsContainer]}>
        {interests.map((interest, idx) => {
          return (
            <Pill key={idx} text={interest} backgroundColor={colors[idx]} />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 16,
    letterSpacing: 0.125,
    fontWeight: "500",
    lineHeight: 19,
    marginTop: 15,
    marginBottom: 15,
    paddingTop: 3,
  },
  interestsContainer: {
    marginTop: 10,
    flexWrap: "wrap",
    justifyContent: "flex-start",
  }
});
