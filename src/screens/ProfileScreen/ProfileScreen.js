import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { firebase } from "../../firebaseSpecs/config";
import { editUserInfo } from "../../store/userReducer";
import { Pill } from "../../components/Pill";
import { getRandomLightColor } from "../../helpers/getRandomLightColor";
import { displaySemanticPronouns } from "../../helpers/displaySemanticPronouns";
import UserDetails from "./UserDetails";
import styles from "./styles";


export default function ProfileScreen({ navigation }) {
  const user = useSelector((state) => state.user);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profilePreviewContainer}>
          {user && <UserDetails user={user} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
