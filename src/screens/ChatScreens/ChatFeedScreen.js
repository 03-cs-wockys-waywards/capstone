import { firebase } from "../../firebaseSpecs/config";
import "firebase/firestore";
import "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import React from "react";
import { useSelector } from "react-redux";
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import ChatFeedRow from "../../components/ChatFeedRow";

export default function ChatFeedScreen({ navigation }) {
  const currentUser = useSelector((state) => state.user);
  const messagesRef = firebase.firestore().collection("messages");
  const query = currentUser.id
    ? messagesRef.where(`users.${currentUser.id}`, "==", true)
    : null;
  const [chatRooms, loading] = useCollectionData(query, {
    idField: "id",
  });

  const getMatch = (displayData) => {
    const [matchId] = Object.keys(displayData).filter((id) => id !== currentUser.id);
    return displayData[matchId];
  }

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
            .sort((a, b) => b.latestMessage.createdAt - a.latestMessage.createdAt)
            .map((chatRoom) => {
              const { id, latestMessage, displayData } = chatRoom;
              const match = getMatch(displayData);
              const { firstName, lastName, avatar } = match;
              return (
                <TouchableOpacity key={id} onPress={() => handlePress(id)}>
                  <ChatFeedRow
                    avatar={avatar}
                    firstName={firstName}
                    lastName={lastName}
                    latestMessage={latestMessage.text}
                  />
                </TouchableOpacity>
              );
            })
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4ECD4'
  },
  scrollContainer: {
    paddingBottom: '15%',
  },
})