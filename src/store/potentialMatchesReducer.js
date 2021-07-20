import { firebase } from '../firebaseSpecs/config'

const SET_POTENTIAL_MATCHES = 'SET_POTENTIAL_MATCHES'

export const setPotentialMatches = (users) => ({
  type: SET_POTENTIAL_MATCHES,
  users,
})

export const fetchPotentialMatches = () => {
  return async (dispatch) => {
    const currentUserId = firebase.auth().currentUser.uid
    const userRef = firebase.firestore().collection('users')
    await userRef
      .where('likes', 'array-contains', currentUserId)
      .get()
      .then((snapshot) => {
        if (snapshot) {
          let users = snapshot.docs.map((doc) => {
            const data = doc.data()
            const id = doc.id
            return { id, ...data }
          })
          dispatch(setPotentialMatches(users))
        } else {
          console.log('users do not exist')
        }
      })
  }
}

export default function (state = [], action) {
  switch (action.type) {
    case SET_POTENTIAL_MATCHES:
      return action.users
    default:
      return state
  }
}
