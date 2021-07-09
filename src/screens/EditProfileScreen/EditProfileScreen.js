import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { editUserInfo } from "../../store/userReducer";
import UpdateImage from "./UpdateImage";
import UpdateName from "./UpdateName";
import UpdatePronouns from "./UpdatePronouns";

export default function EditProfile({ navigation }) {
  const user = useSelector((state) => state.user);
  const [updatedUser, setUpdatedUser] = useState(user);
  const { profilePicture } = updatedUser;
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Image source={{ uri: profilePicture }} style={styles.image} />
        <UpdateImage
          updatedUser={updatedUser}
          setUpdatedUser={setUpdatedUser}
        />
        <UpdateName updatedUser={updatedUser} setUpdatedUser={setUpdatedUser} />
        <UpdatePronouns
          updatedUser={updatedUser}
          setUpdatedUser={setUpdatedUser}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
