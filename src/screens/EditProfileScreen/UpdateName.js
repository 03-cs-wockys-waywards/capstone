import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default function UpdateName({ user, setUser }) {
  const { firstName, lastName } = user;

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setUser({ ...user, firstName: value })}
          value={firstName || ""}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setUser({ ...user, lastName: value })}
          value={lastName || ""}
        />
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
    marginTop: 10,
    marginBottom: 15,
    paddingTop: 3,
  },
  input: {
    fontSize: 16,
    fontWeight: "300",
    letterSpacing: 0.35,
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    width: "66%",
    height: 45,
    marginBottom: 6,
  },
});
