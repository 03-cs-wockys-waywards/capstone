import { firebase } from "../firebaseSpecs/config";
import { useCollectionData } from "react-firebase-hooks/firestore";

const SET_MESSAGES = "SET_MESSAGES";

const setMessages = (messages) => ({
  type: SET_MESSAGES,
  messages,
});

export const fetchMessages = (userId, matchId) => {
  console.log("---------- IN THUNK ---------");
  return async (dispatch) => {
    const messagesRef = firebase.firestore().collection("messages");
    await messagesRef
      .where("to", "==", userId)
      .where("from", "==", matchId)
      .get()
      .then((snapshot) => {
        if (snapshot) {
          let messages = snapshot.docs.map((doc) => {
            const data = doc.data();
            const { id } = doc;
            return { id, ...data };
          });
          console.log('messages in thunk >>>>>', messages);
          dispatch(setMessages(messages));
        } else {
          console.log("could not find messages");
        }
      });
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case SET_MESSAGES:
      return action.messages;
    default:
      return state;
  }
}
