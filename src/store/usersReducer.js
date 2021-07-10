const SET_ALL_USERS = 'SET_ALL_USERS'

export const setAllUsers = (users) => ({
  type: SET_ALL_USERS,
  users,
})

export default function (state = [], action) {
  switch (action.type) {
    case SET_ALL_USERS:
      return action.users
    default:
      return state
  }
}
