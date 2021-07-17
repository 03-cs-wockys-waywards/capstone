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

// // QUERY FOR CHAT ROOM
// const ChatRoomQuery = currentUser.id
//   ? messagesRef.where(`users.${currentUser.id}`, "==", true).where("users.E1GPo5ZjsJWSvxwVjhpaEsXEHUj2", "==", true)
//   : null;
// const [chatRoomThread] = useCollectionData(ChatRoomQuery);

// const matchesIds = chatRoomThread.map((chatRoom) => {
//   const { users } = chatRoom;
//   return Object.keys(users).filter((user) => {
//     return user.id !== currentUser.id
//   });
// });

export default function ChatFeedScreen({ navigation }) {
  const currentUser = useSelector((state) => state.user);
  const messagesRef = firebase.firestore().collection("messages");
  const query = currentUser.id ? messagesRef.where(`users.${currentUser.id}`, "==", true) : null;
  const [chatRooms, loading, error] = useCollectionData(query, {
    idField: "id"
  });

  const handlePress = (id) => {
    console.log("ChatRoom documentID in handlePress >>>>", id)
  }

  // console.log(chatRooms)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
      {loading ? (
        <></>
      ) : (
        chatRooms.map((chatRoom) => {
          const { id, latestMessage } = chatRoom;
          return (
            <ChatFeedRow
              key={id}
              avatar={null}
              firstName={"Placeholder"}
              lastName={"X"}
              latestMessage={latestMessage.text}
              handlePress={() => handlePress(id)}
            />
          )
        })
      )}
      </ScrollView>
    </SafeAreaView>
  );
}
