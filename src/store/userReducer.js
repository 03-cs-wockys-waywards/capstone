const EDIT_USER_INFO = "editUserInfo"

export const editUserInfo = (userInfo) => {
  console.log('userInfo in action creator =', userInfo) 
  return {type: EDIT_USER_INFO, userInfo }
};

const initialState = {
  userId: "",
  email: "",
  firstName: "",
  lastName: "",
  pronouns: [],
  interests: [],
  profilePicture: ""
}

export default function (state = initialState, action) {
  switch (action.type) {
    case EDIT_USER_INFO:
      console.log('userInfo in reducer =', action.userInfo)
      const newState = { ...state, ...action.userInfo }
      console.log("newState in reducer =", newState)
      return newState
    default:
      return state;
  }
}