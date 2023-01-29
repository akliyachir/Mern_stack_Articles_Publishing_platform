export const loginErrorDefaultState = {
  isError: false,
  errorMessage: 'Create an account',
};

export const loginErrorReducer = (loginErrorState, action) => {
  const { type, payload } = action;
  const { message } = payload;
  switch (type) {
    case 'IS_ERROR':
      return {
        ...loginErrorState,
        isError: true,
        errorMessage: message,
      };
    case 'NO_ERROR':
      return {
        ...loginErrorState,
        isError: false,
        errorMessage: 'Create an account',
      };
    default:
      return loginErrorState;
  }
};
