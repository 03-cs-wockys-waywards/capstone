import React from "react";
import {
  View,
  Text,
  TextInput,
} from "react-native";
import styles from "./styles";

export default function UpdateName({ updatedUser, setUpdatedUser }) {
  const { firstName, lastName } = updatedUser
  return (
    <View>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        onChange={(value) =>
          setUpdatedUser({ ...updatedUser, firstName: value })
        }
        value={firstName || ""}
      />
      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        onChange={(value) =>
          setUpdatedUser({ ...updatedUser, lastName: value })
        }
        value={lastName || ""}
      />
    </View>
  );
}
