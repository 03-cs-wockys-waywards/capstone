import { firebase } from "../../firebaseSpecs/config";
import "firebase/firestore";
import "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import ChatFeedRow from "../../components/ChatFeedRow";
import ChatRoomScreen from "./ChatRoomScreen";
import styles from "./styles";

const dummyData = [
  {
    avatar:
      "https://images.pexels.com/photos/4001552/pexels-photo-4001552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    firstName: "Leslie",
    lastName: "Heather",
    latestMessage: "Nice to chat with you!",
  },
  {
    avatar:
      "https://images.pexels.com/photos/2286385/pexels-photo-2286385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    firstName: "Jenny",
    lastName: "Kim",
    latestMessage: "Do you have any plans this weekend?",
  },
  {
    avatar:
      "https://images.pexels.com/photos/6134742/pexels-photo-6134742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    firstName: "Abu",
    lastName: "Moe",
    latestMessage: "Hahaha that's funny",
  },
];

let match;

export default function ChatFeedScreen({ navigation }) {
  const user = useSelector((state) => state.user);

  const messagesRef = firebase.firestore().collection("messages");
  const query = messagesRef.where("to", "==", user.id);

  const [_messages] = useCollectionData(query);

  // useEffect(() => {}, []);

  const sortMessages = () => {
    const messageStore = {};
    if (_messages && _messages.length) {
      _messages.forEach((message) => {
        const { from } = message;
        messageStore[from] ? messageStore[from].push(message) : messageStore[from] = [message];
      });
    } 
    return messageStore;
  }

  // console.log(`messages to Rhetta >>>>`, _messages);
  console.log('messageStore >>>>', sortMessages());

  const handlePress = (match) => {
    navigation.navigate("ChatRoomScreen", {
      match,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Chat Feed</Text>
        </View> */}
        {_messages && _messages.map((message, index) => (
          <ChatFeedRow
            key={index}
            avatar={null}
            firstName={"placeholder"}
            lastName={"placehold"}
            latestMessage={message.text}
            handlePress={() => handlePress(match)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
