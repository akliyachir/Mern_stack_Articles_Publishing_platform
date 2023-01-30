import InputFormTemplate from '../../UserComponents/1-InputFormTemplate/InputFormTemplate';
import './CreateArticle.css';
import { useState } from 'react';
import TextAreaFormTemplate from '../../UserComponents/2-TextAreaFormTemplate/TextAreaFormTemplate';

export default function CreateArticle() {
  // -- form data useState
  const [createArticleFormData, setCreateArticleFormData] = useState({
    article_title: '',
    article_image_url: '',
  });
  const { article_title, article_image_url } = createArticleFormData;
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
          <TextAreaFormTemplate />
        </form>
      </div>
    </div>
  );
}
