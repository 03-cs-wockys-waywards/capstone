import { firebase } from '../firebaseSpecs/config'

const SET_DISCOVER_USERS = 'SET_ALL_USERS'
const SET_POTENTIAL_MATCHES = 'SET_POTENTIAL_MATCHES'

export const setDiscoverUsers = (users) => ({
  type: SET_DISCOVER_USERS,
  users,
})

export const setPotentialMatches = (users) => ({
  type: SET_POTENTIAL_MATCHES,
  users,
})

export const fetchUsersWithInterests = (interests) => {
  return async (dispatch) => {
    const usersRef = firebase.firestore().collection('users')
    await usersRef
      .where('interests', 'array-contains-any', interests)
      .get()
      .then((snapshot) => {
        let users = snapshot.docs.map((doc) => {
          const data = doc.data()
          const id = doc.id
          return { id, ...data }
        })
        dispatch(setDiscoverUsers(users))
      })
  }
}

export const fetchPotentialMatches = (id) => {
  return async (dispatch) => {
    const userRef = firebase.firestore().collection('users')
    await userRef
      .where('likes', 'array-contains', id)
      .get()
      .then((snapshot) => {
        if (snapshot) {
          let users = snapshot.docs.map((doc) => {
            const data = doc.data()
            const id = doc.id
            return { id, ...data }
          })
          dispatch(setPotentialMatches(users))
          console.log('>>>>>> Users pulled from firestore: ', users)
        } else {
          console.log('users do not exist')
        }
      })
  }
}

export default function (state = [], action) {
  switch (action.type) {
    case SET_DISCOVER_USERS:
      return action.users
    case SET_POTENTIAL_MATCHES:
      return action.users
    default:
      return state
  }
}
