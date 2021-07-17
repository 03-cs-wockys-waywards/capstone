import React, { useState, useEffect } from 'react';
import { firebase } from '../../firebaseSpecs/config';
import 'firebase/firestore';
import 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchMessagesToUser,
  fetchMessagesFromUser,
} from '../../store/messagesReducer';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ChatBubble from '../../components/ChatBubble';
import styles from './styles';

export default function ChatRoomScreen({ route }) {
  console.log("----------------  IN CHAT ROOM  ----------------");
  const { docId } = route.params;
  console.log("documentId in ChatRoom >>>>>", docId);

  // const { match } = route.params;
  // const user = useSelector((state) => state.user);
  // const { toUser, fromUser } = useSelector((state) => state.messages);
  // // const messages = [...toUser, ...fromUser];
  // const dispatch = useDispatch();
  // const [messages, setMessages] = useState([]);
  // const [text, setText] = useState('');

  // const messagesRef = firebase.firestore().collection('messages');

  // useEffect(() => {
  //   const unsubscribe = async () => {
  //     await dispatch(fetchMessagesToUser(user.id, match.id));
  //     await dispatch(fetchMessagesFromUser(user.id, match.id));
  //     setMessages([ ...toUser, ...fromUser ]);
  //   }
  //   return () => unsubscribe();
  // }, [messages]);

  // console.log("messages >>>>>", messages);

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
          ))}
      </ScrollView>
      <TextInput onChangeText={setText} value={text} placeholder="Message" />
      <TouchableOpacity onPress={() => sendMessage()}>
        <Text>Send</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}
