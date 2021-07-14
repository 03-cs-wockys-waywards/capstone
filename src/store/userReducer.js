import { firebase } from '../firebaseSpecs/config';

const EDIT_USER_INFO = 'EDIT_USER_INFO';
const ADD_LIKE = 'ADD_LIKE';
const REMOVE_LIKE = 'REMOVE_LIKE';
const CLEAR_DATA = 'CLEAR_DATA';

export const editUserInfo = (userInfo) => ({
  type: EDIT_USER_INFO,
  userInfo,
});

const addLike = (id) => ({
  type: ADD_LIKE,
  id,
});

const removeLike = (id) => ({
  type: REMOVE_LIKE,
  id,
});

export const clearData = () => ({
  type: CLEAR_DATA
});

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

export const _addLike = (likeId) => {
  return async (dispatch) => {
    const currentUserId = firebase.auth().currentUser.uid;
    const userRef = firebase.firestore().collection('users').doc(currentUserId);
    await userRef.update({
      likes: firebase.firestore.FieldValue.arrayUnion(likeId),
    });
    dispatch(addLike(likeId));
  };
};

export const _removeLike = (likeId) => {
  return async (dispatch) => {
    const currentUserId = firebase.auth().currentUser.uid;
    const userRef = firebase.firestore().collection('users').doc(currentUserId);
    await userRef.update({
      likes: firebase.firestore.FieldValue.arrayRemove(likeId),
    });
    dispatch(removeLike(likeId));
  };
};

const initialState = {
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
    case ADD_LIKE:
      return { ...state, likes: [...state.likes, action.id] };
    case REMOVE_LIKE:
      return { ...state, likes: state.likes.filter((uid) => uid !== action.id) };
    case CLEAR_DATA:
      return null;
    default:
      return state;
  }
}
