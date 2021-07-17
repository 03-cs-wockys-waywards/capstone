import React, { useState, useEffect } from "react";
import { firebase } from "../../firebaseSpecs/config";
import "firebase/firestore";
import "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMessagesToUser,
  fetchMessagesFromUser,
} from "../../store/messagesReducer";
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

export default function ChatRoomScreen({ route }) {
  console.log("----------------  IN CHAT ROOM  ----------------");
  const { docId } = route.params;
  // const { match } = route.params;
  const currentUser = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [text, setText] = useState('');

  useEffect(() => {
    const messagesRef = firebase.firestore().collection("messages");
    const unsubscribe = messagesRef.doc(docId).onSnapshot((doc) => {
      const { messages } = doc.data();
      setMessages(messages);
      if (loading) {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  console.log("Messages outside of useEffect >>>>>", messages);

  // const sendMessage = async () => {
  //   const { id, profilePicture } = user;

  //   await messagesRef.add({
  //     text,
  //     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //     profilePicture,
  //     from: id,
  //     to: match.id,
  //   });

  //   setText('');
  // };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <></>
      ) : (
        messages.map((message, index) => {
          const { text, from } = message;
          return (
            <ChatBubble
              key={index}
              message={text}
              user={from === currentUser.id ? "currentUser" : "match"}
            />
          );
        })
      )}
      {/* <ScrollView style={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text
            style={styles.headerText}
          >{`${match.firstName} ${match.lastName[0]}.`}</Text>
        </View>
        {messages &&
          messages.map((message, index) => (
            <ChatBubble
              key={index}
              message={message.text}
              user={message.from === user.id ? 'currentUser' : 'match'}
            />
          ))
      </ScrollView>
      <TextInput onChangeText={setText} value={text} placeholder="Message" />
      <TouchableOpacity onPress={() => sendMessage()}>
        <Text>Send</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}
