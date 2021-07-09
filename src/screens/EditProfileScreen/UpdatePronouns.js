import DropDownPicker from "react-native-dropdown-picker";
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const map = {
  she: "She / Her",
  he: "He / Him",
  they: "They / Them",
  undisclosed: "I'd rather not say",
};

export default function UpdatePronouns({
  updatedUser,
  setUpdatedUser,
}) {
  const { pronouns } = updatedUser
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(pronouns);

  const handleClose = () => {
    setOpen(false);
    console.log("-------------------");
    console.log("user before update", updatedUser.pronouns);
    setUpdatedUser({ ...updatedUser, pronouns: value });
    console.log("user after update", updatedUser.pronouns);
  };

  return (
    <View>
      <Text style={styles.label}>Pronouns</Text>
      <DropDownPicker
        multiple={true}
        min={1}
        open={open}
        items={[
          { label: "She / Her", value: "she" },
          { label: "He / Him", value: "he" },
          { label: "They / Them", value: "they" },
          { label: "I'd rather not say", value: "undisclosed" },
        ]}
        value={value}
        onPress={() => setOpen(true)}
        setValue={(value) => setValue(value)}
        onClose={handleClose}
      />
    </View>
  );
}
