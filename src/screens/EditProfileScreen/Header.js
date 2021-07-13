import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { useDispatch } from "react-redux";
import { editUserInfo } from "../../store/userReducer";

export default function Header({ navigation, user }) {
  const dispatch = useDispatch();

  const handleNavigate = () => {
    // navigate to... where? Home, the previous page, or somewhere else? 
    return
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigate}>
        <Text>Cancel</Text>
      </TouchableOpacity>
      <Text>Edit Profile</Text>
      <TouchableOpacity onPress={() => {
        dispatch(editUserInfo(user));
        handleNavigate();
      }}>
        <Text>Done</Text>
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
    alignItems: "center",
  },
});
