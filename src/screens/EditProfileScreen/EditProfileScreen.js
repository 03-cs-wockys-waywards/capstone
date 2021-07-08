import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { editUserInfo } from "../../store/userReducer";
import Dropdown from "./Dropdown";


export default function EditProfile({ navigation }) {
  const user = useSelector((state) => state.user);
  const [updatedUser, setUpdatedUser] = useState(user);
  const { firstName, lastName, pronouns, interests, profilePicture } =
    updatedUser;
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder={firstName}
          onChange={(value) =>
            setUpdatedUser({ ...updatedUser, firstName: value })
          }
          value={firstName}
        />
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder={lastName}
          onChange={(value) =>
            setUpdatedUser({ ...updatedUser, lastName: value })
          }
          value={lastName}
        />
        <Text style={styles.label}>Pronouns</Text>
        <Dropdown
          updatedUser={updatedUser}
          setUpdatedUser={setUpdatedUser}
          pronouns={pronouns}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
