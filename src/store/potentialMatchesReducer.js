import { firebase } from '../firebaseSpecs/config';

const SET_POTENTIAL_MATCHES = 'SET_POTENTIAL_MATCHES';
const SET_MATCHES = 'SET_MATCHES';

export const setPotentialMatches = (users) => ({
  type: SET_POTENTIAL_MATCHES,
  users,
});

// export const setMatches = (currentUser, users) => ({
//   type: SET_MATCHES,
//   currentUser,
//   users,
// });

export const fetchPotentialMatches = (id) => {
  return async (dispatch) => {
    const userRef = firebase.firestore().collection('users');
    await userRef
      .where('likes', 'array-contains', id)
      .get()
      .then((snapshot) => {
        if (snapshot) {
          let users = snapshot.docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data };
          });
          dispatch(setPotentialMatches(users));
        } else {
          console.log('users do not exist');
        }
      });
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case SET_POTENTIAL_MATCHES:
      return action.users;
    // case SET_MATCHES:
    //   const { currentUser, users } = action;
    //   return users.filter((user) => currentUser.likes.includes(user.id));
    default:
      return state;
  }
}
