import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { useSelector, useDispatch } from 'react-redux';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { firebase } from '../../firebaseSpecs/config';
import ChatFeedRow from '../../components/ChatFeedRow';

const dummyData = [
  {
    firstName: 'Leslie',
  },
  {
    firstName: 'Jenny',
  },
  {
    firstName: 'Abu',
  },
];

const db = firebase.firestore();
const messagesRef = db.collection('messages');

export default function ChatFeedScreen() {
  const currentUser = useSelector((state) => state.user);
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log('currentUser in ChatFeedScreen', currentUser);
    const unsubscribe = messagesRef.onSnapshot((querySnapshot) => {
      const messagesFirestore = querySnapshot
        .docChanges()
        .filter(({ type }) => type === 'added')
        .map(({ doc }) => {
          const message = doc.data();
          return { ...message, createdAt: message.createdAt.toDate() };
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      appendMessages(messagesFirestore);
    });
    return () => unsubscribe();
  }, []);

  const appendMessages = useCallback(
    (messages) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
    },
    [messages]
  );

  useEffect(() => {
    console.log('user in ChatFeedScreen', user);
    // for GiftedChat
    setUser({
      _id: currentUser.id,
      name: currentUser.firstName,
      avatar: currentUser.profilePicture,
    });
  }, [currentUser]);

  async function handleSend(messages) {
    const writes = messages.map((m) => messagesRef.add(m));
    await Promise.all(writes);
  }

  return (
    <SafeAreaView>
      <View>
        {/* {dummyData.map((dummy, index) => (
          <ChatFeedRow key={index} firstName={dummy.firstName} />
        ))} */}
        <Text>Chat Feed</Text>
        <GiftedChat messages={messages} user={user} onSend={handleSend} />
      </View>
    </SafeAreaView>
  );
}
