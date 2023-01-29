export const loginErrorDefaultState = {
  isError: false,
  errorMessage: 'Create an account',
};

export const loginErrorReducer = (loginErrorState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'IS_ERROR':
      return {
        ...loginErrorState,
        isError: true,
        errorMessage: payload.message,
      };
    case 'NO_ERROR':
      return {
        ...loginErrorState,
        isError: false,
        errorMessage: 'Create an account',
      };
    case 'LOGIN_SUCCESS':
      return {
        ...loginErrorState,
        isError: true,
        errorMessage: 'LOGIN SUCCESS',
      };
    default:
      return loginErrorState;
  }
};
