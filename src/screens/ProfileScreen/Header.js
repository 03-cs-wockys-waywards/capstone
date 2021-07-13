import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { firebase } from "../../firebaseSpecs/config";

export default function Header({ navigation, user }) {
  const { firstName, lastName } = user;

  const handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("log out successful");
      })
      .catch((error) => {
        console.error(error);
      });
    // TO DO: fix navigation
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogOut}>
        <Text>Log Out</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{`${firstName} ${lastName[0]}.`}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
        <Text>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  }
});
