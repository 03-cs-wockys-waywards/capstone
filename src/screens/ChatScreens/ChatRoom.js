import React, { useRef, useState } from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, TextInput, Text } from "react-native";
import { firebase } from "../../firebaseSpecs/config";
import "firebase/firestore";
import "firebase/auth";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ChatRoom({ match }) {
  // const { receiver } = route.params;
  const user = useSelector((state) => state.user);
  const [text, setText] = useState("");

  const messagesRef = firebase.firestore().collection("messages");
  // const query = messagesRef.orderBy("createdAt").limit(25);
  const query = messagesRef
    .where("to", "==", user.id)
    .where("from", "==", match.id);
  const _query = messagesRef
    .where("to", "==", match.id)
    .where("from", "==", user.id);

  // messages sent to logged in use
  const [messagesToUser] = useCollectionData(query);
  const [messagesFromUser] = useCollectionData(_query);
  // const messages = [ ...messagesToUser, messagesFromUser ]

  const [formValue, setFormValue] = useState("");

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

  // console.log("messagesToUser >>>>", messagesToUser);
  // console.log("messagesFromUser >>>>>", messagesFromUser);

  console.log(`messages to Rhetta from ${match.firstName} >>>>`, messagesToUser);
  console.log(`message to ${match.firstName} from Rhetta >>>>>`, messagesFromUser);

  return (
    <>
      <SafeAreaView>
        <TextInput
          onChangeText={setText}
          value={text}
          placeholder="Message"
        />
        <TouchableOpacity onPress={() => sendMessage()}>
          <Text>Send</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
    // <>
    //   <main>
    //     {messages &&
    //       messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

    //   </main>

    //   <form onSubmit={sendMessage}>
    //     <input
    //       value={formValue}
    //       onChange={(e) => setFormValue(e.target.value)}
    //       placeholder="say something nice"
    //     />

    //     <button type="submit" disabled={!formValue}>
    //       🕊️
    //     </button>
    //   </form>
    // </>
  );
}
