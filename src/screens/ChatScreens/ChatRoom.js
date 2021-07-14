import React, { useRef, useState } from "react";
import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import { firebase } from "../../firebaseSpecs/config";
import "firebase/firestore";
import "firebase/auth";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function ChatRoom({ match }) {
  // const { receiver } = route.params;
  const user = useSelector((state) => state.user);
  const messagesRef = firebase.firestore().collection("messages");
  // const query = messagesRef.orderBy("createdAt").limit(25);
  const query = messagesRef.where("to", "==", user.id).where("from", "==", match.id);
  const _query = messagesRef.where("to", "==", match.id).where("from", "==", user.id);



  // messages sent to logged in use
  const [messagesToUser] = useCollectionData(query);
  const [messagesFromUser] = useCollectionData(_query);
  // const messages = [ ...messagesToUser, messagesFromUser ]

  const [formValue, setFormValue] = useState("");

  const sendMessage = async () => {
    const { id, profilePicture } = user;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      profilePicture,
      from: id,
      // to: receiver.id,
    });

    setFormValue("");
  };

  // console.log("messagesToUser >>>>", messagesToUser);
  // console.log("messagesFromUser >>>>>", messagesFromUser);

  console.log("messages to Rhetta from Abu >>>>", messagesToUser);
  console.log("message to Abu from Rhetta >>>>>", messagesFromUser);

  return (
    <></>
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
