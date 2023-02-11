import { createContext, useReducer } from 'react';
import { userReducer, userDefaultState } from '../reducers/userReducer';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  // -- useReducer
  const [userState, userDispatch] = useReducer(userReducer, userDefaultState);
  // -- return component
  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
}

/* 


  const [createArticleFormData, setCreateArticleFormData] = useState({
    article_title: '',
    article_image_url: '',
    article_image_height: 50,
    article_body: '',
    article_body_shorten_for_card: '',
    article_id: crypto.randomUUID(),
    article_is_public: true,
  });
  const {
    article_title,
    article_image_url,
    article_body,
    article_body_shorten_for_card,
    article_image_height,
  } = createArticleFormData;


*/
