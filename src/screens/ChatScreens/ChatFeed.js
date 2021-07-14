import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  Text,
} from "react-native";
import { firebase } from "../../firebaseSpecs/config";
import "firebase/firestore";
import "firebase/auth";
import { useSelector } from "react-redux";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ChatFeed() {
  const user = useSelector((state) => state.user);

  const messagesRef = firebase.firestore().collection("messages");
  const query = messagesRef.where("to", "==", user.id);

  const [_messages] = useCollectionData(query);

  // useEffect(() => {}, []);

  // const sortMessages = () => {
  //   const messageStore = {};
  //   _messages.length && _messages.forEach((message) => {
  //     const { from } = message;
  //     messageStore[from] ? message[from].push(message) : messageStore[from] = [message];
  //   });
  //   return messageStore;
  // }

  console.log(`messages to Rhetta >>>>`, _messages);
  // console.log('messageStore >>>>', sortMessages());

  return (
    <>
      <SafeAreaView>
        {_messages &&
          _messages.map((message, index) => (
            <Text key={index}>{message.text}</Text>
          ))}
      </SafeAreaView>
    </>
  );
}
