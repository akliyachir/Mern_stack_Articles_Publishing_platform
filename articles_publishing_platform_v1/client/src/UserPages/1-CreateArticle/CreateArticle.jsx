import './CreateArticle.css';
import { useState } from 'react';

export default function CreateArticle() {
  // -- form data useState
  const [createArticleFormData, setCreateArticleFormData] = useState({
    article_title: '',
  });
  const { article_title } = createArticleFormData;
  //-- handle submitNewArticleData
  const submitNewArticleData = () => {};
  //-- auto handle Input On Change
  const handleInputOnChange = (e) => {
    setCreateArticleFormData({
      ...createArticleFormData,
      [e.target.name]: e.target.value,
    });
  };
  //-- return jsx
  return (
    <div className='CreateArticle'>
      <div className='CreateArticleContent'>
        <form onSubmit={submitNewArticleData}>
          <div className='articleInputContainer'>
            <label htmlFor='article_title'>Title</label>
            <input
              type='text'
              name='article_title'
              id='article_title'
              value={article_title}
              onChange={handleInputOnChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
