import React, { useState, useEffect } from "react";
import { firebase } from "../../firebaseSpecs/config";
import "firebase/firestore";
import "firebase/auth";
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
import ChatInput from "../../components/ChatInput";
import { Icon } from "react-native-elements";
import styles from "./styles";

export default function ChatRoomScreen({ route }) {
  const { docId } = route.params;
  const currentUser = useSelector((state) => state.user);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [match, setMatch] = useState({});
  const docRef = firebase.firestore().collection("messages").doc(docId);
  const [text, setText] = useState("");

  const getMatch = (displayData) => {
    const [matchId] = Object.keys(displayData).filter(
      (id) => id !== currentUser.id
    );
    return displayData[matchId];
  };

  useEffect(() => {
    const unsubscribe = docRef.onSnapshot((doc) => {
      const { messages, displayData } = doc.data();
      const match = getMatch(displayData);
      setMessages(messages);
      setMatch(match);
      if (loading) {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  function sendMessage() {
    if (!text) return;
    const { id } = currentUser;
    const data = {
      from: id,
      text,
      createdAt: new Date(),
    };
    docRef.update({
      messages: firebase.firestore.FieldValue.arrayUnion(data),
      latestMessage: data,
    });
    setText("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {loading ? (
          <></>
        ) : (
          <View>
            <View style={styles.headerContainer}>
              <Text
                style={styles.headerText}
              >{`${match.firstName} ${match.lastName[0]}.`}</Text>
            </View>
            {messages &&
              messages.map((message, index) => {
                const { text, from } = message;
                return (
                  <ChatBubble
                    key={index}
                    message={text}
                    user={from === currentUser.id ? "currentUser" : "match"}
                  />
                );
              })}
          </View>
        )}
      </ScrollView>
      <View style={styles.chatInputContainer}>
        <ChatInput text={text} setText={setText} sendMessage={sendMessage} />
      </View>
    </SafeAreaView>
  );
}
