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

export default class ChatFeedScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      matches: [],
      chatRooms: []
    }
  }

  componentDidMount() {
    const messagesRef = firebase.firestore().collection("messages");
    const getChatRooms = currentUser.id
      ? messagesRef.where(`users.${currentUser.id}`, "==", true)
      : null;
    const [chatRooms] = useCollectionData(getChatRooms);
    this.setState({ ...this.state, chatRooms });
    // NEED: array of matchIds
    // HAVE: users: { user1Id: true, user2Id: true }
  }
  




  // QUERY FOR CHAT FEED

  // QUERY FOR CHAT ROOM
  const ChatRoomQuery = currentUser.id
    ? messagesRef.where(`users.${currentUser.id}`, "==", true).where("users.E1GPo5ZjsJWSvxwVjhpaEsXEHUj2", "==", true)
    : null;
  const [chatRoomThread] = useCollectionData(ChatRoomQuery);
  // console.log("CHAT ROOM >>>>>>", chatRoomThread);

  // console.log('CHAT ROOM THREAD >>>>>>', chatRoomThread)
  const matchesIds = chatRoomThread.map((chatRoom) => {
    const { users } = chatRoom;
    return Object.keys(users).filter((user) => {
      console.log("MATCH IN FILTER >>>>", user)
      console.log("CURRENT USER IN FILTER >>>>>", currentUser);
      return user.id !== currentUser.id
    
    });
  });


  
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* {messages &&
          messages.map((message, index) => {
            const match = matchesStore[message.senderId];
            return match ? (
              <ChatFeedRow
                key={index}
                avatar={null}
                firstName={match.firstName}
                lastName={match.lastName}
                latestMessage={message.text}
                handlePress={() => handlePress(match)}
              />
            ) : (
              <></>
            );
          })} */}
        {/* <Text>{threads[0].latestMessage.text}</Text> */}
        {/* {threads && threads.map((thread, index) => {
            const matchId = thread.users.filter((user) => user.id !== currentUser.id)[0];
            const match = discoverStore[matchId];
            console.log('matchId >>>>>>', matchId)
            console.log('match >>>>>', match)
            return (
              <Text key={index}>TEST</Text>
            );
        })} */}

        {/* {threads.map((thread, index) => {
            const matchId = thread.users.filter((user) => user.id !== currentUser.id)[0];
            const match = matchesStore[matchId];
            const { latestMessage } = thread;
            return match ? (
              <ChatFeedRow
                key={index}
                avatar={null}
                firstName={match.firstName}
                lastName={match.lastName}
                latestMessage={latestMessage.text}
                handlePress={() => handlePress(thread, match)}
              />
            ) : ( 
            <></>
             )
          })} */}
      </ScrollView>
    </SafeAreaView>
  );
}
