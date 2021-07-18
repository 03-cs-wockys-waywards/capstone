import { firebase } from "../firebaseSpecs/config";

const GET_CHAT_USERS = "GET_CHAT_USERS";

const getChatUsers = (users) => ({
  type: GET_CHAT_USERS,
  users,
});

export const fetchChatUsers = (id) => (dispatch) => {
  console.log('------------ in fetchChatUsers ------------')
  const messagesRef = firebase.firestore().collection("messages");

};

const initialState = {
  toUser: [],
  fromUser: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    // case SET_MESSAGES_TO_USER:
    //   return { ...state, toUser: action.messages };
    // case SET_MESSAGES_FROM_USER:
    //   return { ...state, fromUser: action.messages };
    default:
      return state;
  }
}
