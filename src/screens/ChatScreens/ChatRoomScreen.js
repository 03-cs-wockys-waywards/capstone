import React, { useState, useEffect } from "react";
import { firebase } from "../../firebaseSpecs/config";
import "firebase/firestore";
import "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useSelector, useDispatch } from "react-redux";
import { fetchMessages } from "../../store/messagesReducer";
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
  console.log('----------------  IN CHAT ROOM  ----------------')
  const { match } = route.params;
  const user = useSelector((state) => state.user);
  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const messagesRef = firebase.firestore().collection("messages");
  // const query = messagesRef
  //   .where("to", "==", user.id)
  //   .where("from", "==", match.id);
  // const _query = messagesRef
  //   .where("to", "==", match.id)
  //   .where("from", "==", user.id);
  
  useEffect(() => {
    dispatch(fetchMessages(user.id, match.id));
    console.log('in useEffect')
  }, []);

  // const [messagesToUser, loading, error] = useCollectionData(query);
  // console.log('messagesToUser >>>>>>>>>', messagesToUser)
  // console.log('messagesToUser error >>>>>>>>>', error)
  // console.log('messagesToUser loading >>>>>>>>>', loading)
  // console.log('---------------------')

  // const [messagesFromUser, _loading, _error] = useCollectionData(_query);
  // console.log('messagesFromUser >>>>>>>>>', messagesFromUser);
  // console.log('messagesFromUser error >>>>>>>>>', _error);
  // console.log('messagesFromUser loading >>>>>>>>>', _loading);
  // console.log('-------------------------')

  // const messages = [ ...messagesToUser, ...messagesFromUser ];
  // const isLoading = loading === false && _loading === false;
  console.log('messages >>>>>', messages)

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

  // console.log(`messages to Rhetta from ${match.firstName} >>>>`, messagesToUser);
  // console.log(`message to ${match.firstName} from Rhetta >>>>>`, messagesFromUser);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{`${match.firstName} ${match.lastName[0]}.`}</Text>
        </View>
        {/* {!loading && !_loading ? (
          messages.map((message, index) => {
            console.log('in messages.map')
            return (
              <ChatBubble key={index} message={message.text} user={message.from === user.id ? "currentUser" : "match"} />
            )
          })
        ) : (
          <></>
        )} */}

        {/* {messages.map((message, index) => {
          console.log('message in map >>>>>>', message)
          return (
            <ChatBubble key={index} message={message.text} user={message.from === user.id ? "currentUser" : "match"} />
          )
        })} */}
      </ScrollView>
      <TextInput onChangeText={setText} value={text} placeholder="Message" />
      <TouchableOpacity onPress={() => sendMessage()}>
        <Text>Send</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
