import { firebase } from '../firebaseSpecs/config'

const SET_ALL_USERS = 'SET_ALL_USERS'

export const setAllUsers = (users) => ({
  type: SET_ALL_USERS,
  users,
})

export const fetchUsersWithInterests = (interests) => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection('users')
      .where('interests', 'array-contains-any', interests)
      .get()
      .then((snapshot) => {
        let users = snapshot.docs.map((doc) => {
          const data = doc.data()
          const id = doc.id
          return { id, ...data }
        })
        dispatch(setAllUsers(users))
      })
  }
}

export default function (state = [], action) {
  switch (action.type) {
    case SET_ALL_USERS:
      return action.users
    default:
      return state
  }
}
