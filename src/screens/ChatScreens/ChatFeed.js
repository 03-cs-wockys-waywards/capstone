import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, TextInput, Text } from "react-native";
import { firebase } from "../../firebaseSpecs/config";
import "firebase/firestore";
import "firebase/auth";
import { useSelector } from "react-redux";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ChatFeed() {
  const user = useSelector((state) => state.user);

  const messagesRef = firebase.firestore().collection("messages");
  const query = messagesRef
    .where("to", "==", user.id)
    // .where("from", "in", user.likes);

  const [messages] = useCollectionData(query);

  console.log(`messages to Rhetta >>>>`, messages);

  return (
    <>
      <SafeAreaView>
        {messages && messages.map((message, index) => <Text key={index}>{message.text}</Text>)}
      </SafeAreaView>
    </>
  );
}
