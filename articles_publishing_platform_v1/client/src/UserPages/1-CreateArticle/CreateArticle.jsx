import './CreateArticle.css';
import InputFormTemplate from '../../UserComponents/1-InputFormTemplate/InputFormTemplate';
import { useState, useReducer, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import backendUrl from '../../listsAndReusedConsts/backendUrl';
import TiptapRichTextEditor from '../../TiptapRichTextEditor/TiptapRichTextEditor';

export default function CreateArticle() {
  // -- rich text editor body content

  const [RowArticleBodyContentTextEditor, setRowArticleBodyContentTextEditor] =
    useState('');

  // -- form data useState

  const [createArticleFormData, setCreateArticleFormData] = useState({
    article_title: '',
    article_image_url: '',
    article_image_height: 50,
    article_body: '',
    article_id: crypto.randomUUID(),
    article_is_public: true,
  });
  const {
    article_title,
    article_image_url,
    article_body,
    article_is_public,
    article_image_height,
  } = createArticleFormData;

  const handleInputOnChange = (e) => {
    setCreateArticleFormData({
      ...createArticleFormData,
      [e.target.name]: e.target.value,
    });
  };

  //-- create response area
  const [serverResponse, setServerResponse] = useState('');
  // -- and redirect in case of success
  const navigate = useNavigate();

  //-- handle submitNewArticleData
  const handleOnSubmitCreateNewArticle = async (e) => {
    e.preventDefault();

    console.log(RowArticleBodyContentTextEditor.plainText.length);

    return;

    setCreateArticleFormData({
      ...createArticleFormData,
      article_body: RowArticleBodyContentTextEditor,
    });

    // -- get token from localStorage
    const { token } = JSON.parse(globalThis.localStorage.getItem('user'));

    const response = await fetch(backendUrl + 'user_article', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        authorization: JSON.stringify(`Bearer ${token}`),
      },
      body: JSON.stringify(createArticleFormData),
    });

    const result = await response.json();

    if (!response.ok) {
      setServerResponse(result.message);
      setTimeout(() => {
        setServerResponse('');
      }, 3000);
    }

    if (response.ok) {
      setServerResponse(result.message);
      setTimeout(() => {
        setCreateArticleFormData({
          article_title: '',
          article_image_url: '',
          article_image_height: 50,
          article_body: '',
          article_id: crypto.randomUUID(),
        });
        navigate('/user_articles');
      }, 3000);
    }
  };

  //-- return jsx
  return (
    <div className='CreateArticle'>
      <div className='CreateArticleContent'>
        <form
          onSubmit={handleOnSubmitCreateNewArticle}
          className='formCreateArticle'
        >
          <div className='createArticlePageName'>
            {serverResponse ? serverResponse : <h1>Create an article</h1>}
          </div>
          <div className='InputFormTemplateContainer'>
            <label htmlFor='article_title'>Title</label>
            <input
              type='text'
              name='article_title'
              id='article_title'
              value={article_title}
              onChange={handleInputOnChange}
            />
          </div>
          <div className='InputFormTemplateContainer'>
            <label htmlFor='article_image_url'>Image link</label>
            <input
              type='text'
              name='article_image_url'
              id='article_image_url'
              value={article_image_url}
              onChange={handleInputOnChange}
            />
          </div>
          {!!article_image_url && (
            <div className='imagePreviewFromLinkCreateArticle'>
              <div
                className='previewImage'
                style={{
                  backgroundImage: `url(${article_image_url})`,
                  backgroundPositionY: `${article_image_height}%`,
                }}
              ></div>
              <input
                className='article_image_height'
                min='0'
                max='100'
                type='range'
                name='article_image_height'
                id='article_image_height'
                onChange={(e) => {
                  setCreateArticleFormData({
                    ...createArticleFormData,
                    article_image_height: e.target.value,
                  });
                }}
              />
            </div>
          )}
          <TiptapRichTextEditor
            setRowArticleBodyContentTextEditor={
              setRowArticleBodyContentTextEditor
            }
          />
          <button
            type='submit'
            className='buttonOnSubmitCreateNewArticle'
            onClick={handleOnSubmitCreateNewArticle}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
