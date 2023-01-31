import InputFormTemplate from '../../UserComponents/1-InputFormTemplate/InputFormTemplate';
import './CreateArticle.css';
import { useState } from 'react';
import TextAreaFormTemplate from '../../UserComponents/2-TextAreaFormTemplate/TextAreaFormTemplate';

export default function CreateArticle() {
  // -- form data useState
  const [createArticleFormData, setCreateArticleFormData] = useState({
    article_title: '',
    article_image_url: '',
    article_body: '',
  });
  const { article_title, article_image_url, article_body } =
    createArticleFormData;
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
        <form onSubmit={submitNewArticleData} className='formCreateArticle'>
          <h1 className='createArticlePageName'>Create an article</h1>
          <InputFormTemplate
            label='Title'
            type='text'
            name='article_title'
            value={article_title}
            handleInputOnChange={handleInputOnChange}
          />
          <InputFormTemplate
            label='Image link'
            type='text'
            name='article_image_url'
            value={article_image_url}
            handleInputOnChange={handleInputOnChange}
          />
          <TextAreaFormTemplate
            label='body'
            type='textarea'
            name='article_body'
            value={article_body}
            handleInputOnChange={handleInputOnChange}
          />
        </form>
      </div>
    </div>
  );
}
