import { createContext } from 'react';

const UserContext = createContext();

const user = {
  email: 'firstuser@gmail.com',
  password: '123456789',
};

export default function UserContextProvider({ children }) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
