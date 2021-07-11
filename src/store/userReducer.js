const EDIT_USER_INFO = 'editUserInfo'

export const editUserInfo = (userInfo) => {
  console.log('userInfo in editUserInfo >>>>', userInfo)
  return { type: EDIT_USER_INFO, userInfo }
}

const initialState = {
  userId: '',
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
      console.log('----- in reducer --------')
      const newState = { ...state, ...action.userInfo }
      console.log('new user state >>>>>', newState)
      console.log("-------------")
      return newState
    default:
      return state
  }
}
