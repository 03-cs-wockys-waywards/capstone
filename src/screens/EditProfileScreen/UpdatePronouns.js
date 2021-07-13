import DropDownPicker from "react-native-dropdown-picker";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
// import styles from "./styles";

const map = {
  she: "She / Her",
  he: "He / Him",
  they: "They / Them",
  undisclosed: "I'd rather not say",
};

export default function UpdatePronouns({ user, setUser }) {
  const { pronouns } = user;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(pronouns);

  useEffect(() => {
    setUser({ ...user, pronouns: value });
  }, [value]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Pronouns</Text>
      <DropDownPicker
        style={styles.dropdown}
        placeholder="Pronouns"
        multiple={true}
        min={1}
        open={open}
        items={Object.keys(map).map((item) => {
          return {
            label: map[item],
            value: item,
            selected: value.includes(item) ? true : false,
          };
        })}
        value={value}
        onPress={() => setOpen(true)}
        setValue={(value) => setValue(value)}
        onClose={() => setOpen(false)}
      />
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
});
