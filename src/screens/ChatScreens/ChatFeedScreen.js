import { firebase } from '../../firebaseSpecs/config';
import 'firebase/firestore';
import 'firebase/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchPotentialMatches,
  setMatches,
} from '../../store/potentialMatchesReducer';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import ChatFeedRow from '../../components/ChatFeedRow';
import ChatRoomScreen from './ChatRoomScreen';
import styles from './styles';

export default function ChatFeedScreen({ navigation }) {
  const currentUser = useSelector((state) => state.user);
  const potentialMatches = useSelector((state) => state.potentialMatches);
  const matches = potentialMatches.filter((user) =>
    currentUser.likes.includes(user.id)
  );
  const dispatch = useDispatch();

  const messagesRef = firebase.firestore().collection('messages');
  const query = messagesRef.where('to', '==', currentUser.id);
  const [_messages] = useCollectionData(query);

  useEffect(() => {
    dispatch(fetchPotentialMatches(currentUser.id));
  }, []);

  /*
  - used for grouping messages by sender.
  - returns an object that stores sender ids as keys and an array of messages from that sender as values:
  {
    senderId1: [ { message1 }, { message2 }, ... ],
    senderId2: [ { message1 }, { message2 }, ... ],
  }
  */
  const getMessageStore = () => {
    const messageStore = {};
    if (_messages && _messages.length) {
      _messages.forEach((message) => {
        const { from } = message;
        messageStore[from]
          ? messageStore[from].push(message)
          : (messageStore[from] = [message]);
      });
    }
    return messageStore;
  };

  /*
  - used for retrieving user objects by their ids.
  - returns an object that stores ids as keys and user objects as values:
  {
    userId1: { user object },
    userId2: { user object },
  }
  */
  const getMatchesStore = () => {
    const matchesStore = {};
    if (matches && matches.length) {
      matches.forEach((match) => {
        const { id } = match;
        matchesStore[id] = match;
      });
    }
    return matchesStore;
  };

  const messageStore = getMessageStore();
  const matchesStore = getMatchesStore();

  /*
  - used for retrieving array of messages to map over in render method.
  - returns an array of objects storing unique sender ids as keys and message text as values:
  [
    { senderId: str, text: str },
    { senderId: str, text: str },
  ]
  */
  const getMessages = () => {
    const senderIds = Object.keys(messageStore);
    const messages = senderIds.map((id) => {
      const { text } = messageStore[id][0];
      return {
        senderId: id,
        text,
      };
    });
    return messages;
  };

  const handlePress = (match) => {
    navigation.navigate('ChatRoom', {
      match,
    });
  };

  const messages = getMessages();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Chat Feed</Text>
        </View> */}
        {messages &&
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
          })}
      </ScrollView>
    </SafeAreaView>
  );
}
