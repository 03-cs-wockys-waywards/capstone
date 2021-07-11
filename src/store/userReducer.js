import { firebase } from '../firebaseSpecs/config';

const CLEAR_DATA = 'CLEAR_DATA';
const EDIT_USER_INFO = 'EDIT_USER_INFO';

export const editUserInfo = (userInfo) => ({
  type: EDIT_USER_INFO,
  userInfo,
});

export const clearUserData = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_DATA });
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          dispatch(editUserInfo(snapshot.data()));
        } else {
          console.log('user does not exist');
        }
      });
  };
};

const initialState = {
  userId: '',
  email: '',
  firstName: '',
  lastName: '',
  pronouns: [],
  interests: [],
  profilePicture: '',
  likes: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case EDIT_USER_INFO:
      return { ...state, ...action.userInfo };
    // const newState = { ...state, ...action.userInfo };
    // console.log('newState from the reducer', newState);
    // return newState;
    case CLEAR_DATA:
      return initialState;
    default:
      return state;
  }
}
