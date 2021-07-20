import React from "react";
import { Input, Icon } from "react-native-elements";
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Text, Platform, TouchableWithoutFeedback, Button, Keyboard } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ChatInput({ text, setText, sendMessage }) {
  return (
    <Input
      onChangeText={setText}
      value={text}
      placeholder="Message..."
      rightIcon={
        text ? (
        <TouchableOpacity onPress={() => sendMessage()}>
          <Icon
            type="material-community"
            name="arrow-up-circle"
            size={28}
            color={"#2788EA"}
          />
        </TouchableOpacity>
        ) : (
          <></>
        )
      }
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
      valueStyle={styles.text}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
});
