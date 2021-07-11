import React from "react";
import {
  View,
  Text,
  TextInput,
} from "react-native";
import styles from "./styles";

export default function UpdateName({ user, setUser }) {
  const { firstName, lastName } = user;

  return (
    <View>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        onChange={(value) =>
          setUser({ ...user, firstName: value })
        }
        value={firstName || ""}
      />
      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        onChange={(value) =>
          setUser({ ...user, lastName: value })
        }
        value={lastName || ""}
      />
    </View>
  );
}
