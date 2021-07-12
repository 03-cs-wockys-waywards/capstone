import { firebase } from '../firebaseSpecs/config'

const EDIT_USER_INFO = 'EDIT_USER_INFO'
const ADD_LIKE = 'ADD_LIKE'
const REMOVE_LIKE = 'REMOVE_LIKE'

export const editUserInfo = (userInfo) => ({
  type: EDIT_USER_INFO,
  userInfo,
})

const addLike = (id) => ({
  type: ADD_LIKE,
  id,
})

const removeLike = (id) => ({
  type: REMOVE_LIKE,
  id,
})

export const fetchUser = () => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          dispatch(editUserInfo(snapshot.data()))
        } else {
          console.log('user does not exist')
        }
      })
  }
}

/*
const admin = require('firebase-admin');
// ...
const washingtonRef = db.collection('cities').doc('DC');

// Atomically add a new region to the "regions" array field.
const unionRes = await washingtonRef.update({
  regions: admin.firestore.FieldValue.arrayUnion('greater_virginia')
});
// Atomically remove a region from the "regions" array field.
const removeRes = await washingtonRef.update({
  regions: admin.firestore.FieldValue.arrayRemove('east_coast')
});
*/

export const _addLike = (likeId) => {
  return async (dispatch) => {
    const currentUserId = firebase.auth().currentUser.uid
    // console.log('LikeId: ', likeId)
    // console.log('currentUserId: ', currentUserId)
    const userRef = firebase.firestore().collection('users').doc(currentUserId)
    await userRef.update({
      likes: firebase.firestore.FieldValue.arrayUnion(likeId),
    })
    dispatch(addLike(likeId))
  }
}

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  pronouns: [],
  interests: [],
  profilePicture: '',
  likes: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case EDIT_USER_INFO:
      return { ...state, ...action.userInfo }
    // const newState = { ...state, ...action.userInfo };
    // console.log('newState from the reducer', newState);
    // return newState;
    case ADD_LIKE:
      console.log({ ...state, likes: [...state.likes, action.id] })
      return { ...state, likes: [...state.likes, action.id] }
    default:
      return state
  }
}
