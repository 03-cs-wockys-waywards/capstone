import { firebase } from "../../firebaseSpecs/config";
import "firebase/firestore";
import "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPotentialMatches,
  setMatches,
} from "../../store/potentialMatchesReducer";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import ChatFeedRow from "../../components/ChatFeedRow";
import ChatRoomScreen from "./ChatRoomScreen";
import styles from "./styles";

// THIS ISN'T WORKING & I CANT FIGURE OUT WHY
// useEffect(() => {
//   console.log('in useEffect')
//   const messagesRef = firebase.firestore().collection("messages");
//   messagesRef
//     .where(`users.${currentUser.id}`, "==", true)
//     .get()
//     .then((snapshot) => {
//       if (snapshot) {
//         const chatRooms = snapshot.map((doc) => {
//           const data = doc.data();
//           return { ...data, id: doc.id }
//         });
//         setChatRooms(chatRooms)
//       } else {
//         console.log('no chat rooms found for this user');
//       }
//     })
// }, []);

export default function ChatFeedScreen({ navigation }) {
  const currentUser = useSelector((state) => state.user);
  const messagesRef = firebase.firestore().collection("messages");
  const query = currentUser.id
    ? messagesRef.where(`users.${currentUser.id}`, "==", true)
    : null;
  const [chatRooms, loading, error] = useCollectionData(query, {
    idField: "id",
  });

  const handlePress = (id) => {
    navigation.navigate("ChatRoom", { docId: id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {loading ? (
          <></>
        ) : (
          chatRooms &&
          chatRooms
            .filter((chatRoom) => chatRoom.messages)
            .map((chatRoom) => {
              const { id, latestMessage } = chatRoom;
              return (
                <ChatFeedRow
                  key={id}
                  avatar={null}
                  firstName={"Placeholder"}
                  lastName={"X"}
                  latestMessage={
                    latestMessage ? latestMessage.text : "Start chatting!"
                  }
                  handlePress={() => handlePress(id)}
                />
              );
            })
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
