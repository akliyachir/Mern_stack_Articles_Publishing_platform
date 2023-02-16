// -- defaultState
export const userDefaultState = {
  name: '',
  email: '',
  token: '',
};

// -- reducer
export const userReducer = (userState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...userState,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
      };
    case 'DISCONNECT':
      return {
        ...userState,
        name: '',
        email: '',
        token: '',
      };
    default:
      return userState;
  }
};
