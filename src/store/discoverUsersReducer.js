import { firebase } from '../firebaseSpecs/config'

const SET_DISCOVER_USERS = 'SET_ALL_USERS'

export const setDiscoverUsers = (users) => ({
  type: SET_DISCOVER_USERS,
  users,
})

export const fetchUsersWithInterests = () => {
  return (dispatch) => {
    const usersRef = firebase.firestore().collection('users')
    const currentUserId = firebase.auth().currentUser.uid

    firebase
      .firestore()
      .collection('users')
      .doc(currentUserId)
      .get()
      .then(async (snapshot) => {
        const user = snapshot.data()
        const interests = user.interests
        await usersRef
          .where('interests', 'array-contains-any', interests)
          .get()
          .then((snapshot) => {
            let users = snapshot.docs.map((doc) => {
              const data = doc.data()
              const id = doc.id
              return { id, ...data }
            })
            // filter our the current user from discover list
            const discoverUsers = users.filter(
              (person) => person.id !== currentUserId
            )
            dispatch(setDiscoverUsers(discoverUsers))
          })
      })
  }
}

export default function (state = [], action) {
  switch (action.type) {
    case SET_DISCOVER_USERS:
      return action.users
    default:
      return state
  }
}
