import React from "react";
import { Input, Icon } from "react-native-elements";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ChatInput({ text, setText, sendMessage }) {
  return (
    <Input
      onChangeText={setText}
      value={text}
      placeholder="Message"
      multiline={true}
      rightIcon={
        <TouchableOpacity onPress={() => sendMessage()}>
          <Icon
            type="material-community"
            name="arrow-up-circle"
            size={28}
          />
        </TouchableOpacity>
      }
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#E5F4D4",
    borderBottomColor: "#E5F4D4",
    borderTopColor: "#E5F4D4",
  },
  inputContainer: {
    borderRadius: 50,
    backgroundColor: "#FAFBFC",
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
