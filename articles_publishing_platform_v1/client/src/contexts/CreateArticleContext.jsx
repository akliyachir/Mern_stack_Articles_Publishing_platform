import { createContext, useReducer } from 'react';

export const CreateArticleContext = createContext(null);

export default function CreateArticleContextProvider({ children }) {
  return (
    <CreateArticleContextProvider.Provider value={'on verra'}>
      {children}
    </CreateArticleContextProvider.Provider>
  );
}
