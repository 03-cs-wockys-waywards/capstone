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
        text ? (
        <TouchableOpacity onPress={() => sendMessage()}>
          <Icon
            type="material-community"
            name="arrow-up-circle"
            size={28}
          />
        </TouchableOpacity>
        ) : (
          <></>
        )
      }
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.inputStyle}
      valueStyle={styles.text}
    />
  );
}

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    borderRadius: 50,
    backgroundColor: "#FAFBFC",
    marginVertical: 20,
    paddingHorizontal: 10,
    fontSize: 17,
  },
  inputStyle: {
  },
  text: {
    fontSize: 16,
    fontFamily: "Lato_400Regular",
  }
});
