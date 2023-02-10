// -- defaultState
export const userDefaultState = {
  email: '',
  token: '',
};

// -- reducer
export const userReducer = (userState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...userState,
        email: action.payload.name,
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
