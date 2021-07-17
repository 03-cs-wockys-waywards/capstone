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
  const docRef = firebase.firestore().collection("messages").doc(docId);
  const [text, setText] = useState("");

  useEffect(() => {
    const unsubscribe = docRef.onSnapshot((doc) => {
      const { messages } = doc.data();
      setMessages(messages);
      if (loading) {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = () => {
    const { id } = currentUser;
    const data = {
      from: id,
      text,
      createdAt: new Date()
    }
    docRef.update({
      messages: firebase.firestore.FieldValue.arrayUnion(data),
      latestMessage: data
    });
    setText("");
  };

  console.log("docId in ChatRoom >>>>>", docId)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* <View style={styles.headerContainer}>
          <Text
            style={styles.headerText}
          >{`${match.firstName} ${match.lastName[0]}.`}</Text>
        </View> */}
        {loading ? (
          <></>
        ) : (
          messages && messages.map((message, index) => {
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
        <TextInput onChangeText={setText} value={text} placeholder="Message" />
        <TouchableOpacity onPress={() => sendMessage()}>
          <Text>Send</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
