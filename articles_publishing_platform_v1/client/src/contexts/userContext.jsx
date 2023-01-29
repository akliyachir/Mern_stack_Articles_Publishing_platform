import { createContext } from 'react';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  return <UserContext.Provider value={'user'}>{children}</UserContext.Provider>;
}
