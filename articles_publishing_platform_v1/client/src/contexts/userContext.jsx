import { createContext, useReducer } from 'react';

export const UserContext = createContext();

const userReducer = (userState, action) => {
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

const userDefaultState = {
  email: '',
  token: '',
};

export default function UserContextProvider({ children }) {
  // -- useReducer
  const [userState, userDispatch] = useReducer(userReducer, userDefaultState);
  // -- return
  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
}
