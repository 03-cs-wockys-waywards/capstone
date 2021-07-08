const EDIT_USER_INFO = 'editUserInfo'

export const editUserInfo = (userInfo) => {
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
      return { ...state, ...action.userInfo }
    default:
      return state
  }
}
