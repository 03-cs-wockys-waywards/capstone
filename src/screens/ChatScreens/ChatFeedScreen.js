import { firebase } from "../../firebaseSpecs/config";
import "firebase/firestore";
import "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import React from "react";
import { useSelector } from "react-redux";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import ChatFeedRow from "../../components/ChatFeedRow";
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
                <ChatFeedRow
                  key={id}
                  avatar={avatar}
                  firstName={firstName}
                  lastName={lastName}
                  latestMessage={latestMessage.text}
                  handlePress={() => handlePress(id)}
                />
              );
            })
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
