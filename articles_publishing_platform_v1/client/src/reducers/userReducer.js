// -- defaultState
export const userDefaultState = {
  email: '',
  token: '',
};

// -- reducer
export const userReducer = (userState, action) => {
  const { type, payload } = action;
  const { email, token } = payload;
  switch (type) {
    case 'SIGN_IN':
      return {
        ...userState,
        email: email,
        token: token,
      };
    default:
      return userState;
  }
};
