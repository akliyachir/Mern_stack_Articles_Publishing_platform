import { createContext, useReducer } from 'react'

const CreateArticleReducer = (CreateArticleState, action) => {
  switch (action.type) {
  }
}
const CreateArticleDefaultValue = {
  article_title: '',
  article_image_url: '',
  article_image_height: 50,
  article_body: '',
  article_body_shorten_for_card: '',
  article_id: crypto.randomUUID(),
  article_is_public: true,
}

export const CreateArticleContext = createContext(null)

export default function CreateArticleContextProvider({ children }) {
  const [CreateArticleState, CreateArticleDispatch] = useReducer(
    CreateArticleReducer,
    CreateArticleDefaultValue
  )
  return (
    <CreateArticleContextProvider.Provider value={'on verra'}>
      {children}
    </CreateArticleContextProvider.Provider>
  )
}
/* 

  article_title: '',
  article_image_url: '',
  article_image_height: 50,
  article_body: '',
  article_body_shorten_for_card: '',
  article_id: crypto.randomUUID(),
  article_is_public: true,

const {
  article_title,
  article_image_url,
  article_body,
  article_body_shorten_for_card,
  article_image_height,
} = createArticleFormData;
 */
