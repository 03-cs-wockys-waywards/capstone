import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, TextInput, Text } from "react-native";
import { firebase } from "../../firebaseSpecs/config";
import "firebase/firestore";
import "firebase/auth";
import { useSelector } from "react-redux";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ChatRoom({ match }) {
  // const { receiver } = route.params;
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
    <>
      <SafeAreaView>
        <TextInput
          onChangeText={setText}
          value={text}
          placeholder="Message"
        />
        <TouchableOpacity onPress={() => sendMessage()}>
          <Text>Send</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}
