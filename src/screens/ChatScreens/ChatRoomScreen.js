import React, { useState } from "react";
import { firebase } from "../../firebaseSpecs/config";
import "firebase/firestore";
import "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ChatBubble from "../../components/ChatBubble";
import styles from "./styles";

const dummyData = [
  {
    avatar:
      "https://images.pexels.com/photos/4001552/pexels-photo-4001552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    firstName: "Leslie",
    lastName: "Heather",
    user: "currentUser",
    message: "Nice to chat with you!",
  },
  {
    avatar:
      "https://images.pexels.com/photos/2286385/pexels-photo-2286385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    firstName: "Jenny",
    lastName: "Kim",
    user: "match",
    message: "Do you have any plans this weekend?",
  },
];

export default function ChatFeedScreen({ route }) {
  const { match } = route.params;
  const user = useSelector((state) => state.user);
  const [text, setText] = useState("");

  const messagesRef = firebase.firestore().collection("messages");
  const query = messagesRef
    .where("to", "==", user.id)
    .where("from", "==", match.id);
  const _query = messagesRef
    .where("to", "==", match.id)
    .where("from", "==", user.id);

  const [messagesToUser] = useCollectionData(query);
  const [messagesFromUser] = useCollectionData(_query);
  // const messages = [ ...messagesToUser, messagesFromUser ]

  const sendMessage = async () => {
    const { id, profilePicture } = user;

    await messagesRef.add({
      text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      profilePicture,
      from: id,
      to: match.id,
    });

    setText("");
  };

  console.log(`messages to Rhetta from ${match.firstName} >>>>`, messagesToUser);
  console.log(`message to ${match.firstName} from Rhetta >>>>>`, messagesFromUser);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Chat with Match XXX</Text>
        </View>
        {dummyData.map((dummy, index) => (
          <ChatBubble key={index} message={dummy.message} user={dummy.user} />
        ))}
      </ScrollView>
      <TextInput onChangeText={setText} value={text} placeholder="Message" />
      <TouchableOpacity onPress={() => sendMessage()}>
        <Text>Send</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
