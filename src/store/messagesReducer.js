import { firebase } from "../firebaseSpecs/config";

const SET_MESSAGES_TO_USER = "SET_MESSAGES_TO_USER";
const SET_MESSAGES_FROM_USER = "SET_MESSAGES_FROM_USER";

const setMessagesToUser = (messages) => ({
  type: SET_MESSAGES_TO_USER,
  messages,
});

const setMessagesFromUser = (messages) => ({
  type: SET_MESSAGES_FROM_USER,
  messages
});

// gets messages between current user and a given matched user
export const fetchMessagesToUser = (userId, matchId) => {
  // console.log("---------- IN THUNK ---------");
  return async (dispatch) => {
    const messagesRef = firebase.firestore().collection("messages");
    await messagesRef
      .where("to", "==", userId)
      .where("from", "==", matchId)
      .get()
      .then((snapshot) => {
        if (snapshot) {
          const messages = snapshot.docs.map((doc) => {
            const data = doc.data();
            const { id } = doc;
            return { id, ...data };
          });
          // console.log('messages in thunk >>>>>', messages);
          dispatch(setMessagesToUser(messages));
        } else {
          console.log("could not find messages");
        }
      });
  };
};

export const fetchMessagesFromUser = (userId, matchId) => {
  // console.log("---------- IN THUNK ---------");
  return async (dispatch) => {
    const messagesRef = firebase.firestore().collection("messages");
    await messagesRef
      .where("to", "==", matchId)
      .where("from", "==", userId)
      .get()
      .then((snapshot) => {
        if (snapshot) {
          const messages = snapshot.docs.map((doc) => {
            const data = doc.data();
            const { id } = doc;
            return { id, ...data };
          });
          // console.log('messages in thunk >>>>>', messages);
          dispatch(setMessagesFromUser(messages));
        } else {
          console.log("could not find messages");
        }
      });
  };
};

const initialState = {
  toUser: [],
  fromUser: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGES_TO_USER:
      return { ...state, toUser: action.messages };
    case SET_MESSAGES_FROM_USER:
      return { ...state, fromUser: action.messages };
    default:
      return state;
  }
}
