import { firebase } from '../firebaseSpecs/config';

const SET_DISCOVER_USERS = 'SET_ALL_USERS';

export const setDiscoverUsers = (users) => ({
  type: SET_DISCOVER_USERS,
  users,
});

export const fetchUsersWithInterests = (interests) => {
  return async (dispatch) => {
    const usersRef = firebase.firestore().collection('users');
    await usersRef
      .where('interests', 'array-contains-any', interests)
      .get()
      .then((snapshot) => {
        let users = snapshot.docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data };
        });
        dispatch(setDiscoverUsers(users));
      });
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case SET_DISCOVER_USERS:
      return action.users;
    default:
      return state;
  }
}
