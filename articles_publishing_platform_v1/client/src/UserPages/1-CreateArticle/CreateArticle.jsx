import './CreateArticle.css';
import InputFormTemplate from '../../UserComponents/1-InputFormTemplate/InputFormTemplate';
import { useState, useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextAreaFormTemplate from '../../UserComponents/2-TextAreaFormTemplate/TextAreaFormTemplate';
import backendUrl from '../../listsAndReusedConsts/backendUrl';

export default function CreateArticle() {
  // -- useReducer
  const reducer = (state, action) => {
    switch (action.type) {
      case 'checked':
        return {
          isItChecked: true,
        };
      case 'NotChecked':
        return {
          isItChecked: false,
        };
      default:
        return state;
    }
  };
  const defaultState = { isItChecked: true };
  const [state, dispatch] = useReducer(reducer, defaultState);

  // -- checkbox

  const handleCheckBoxOnCheck = (e) => {
    setispubliprivetChecked(e.currentTarget.checked);
  };
  useEffect(() => {
    setispubliprivetChecked();
  }, [handleCheckBoxOnCheck]);

  const [ispubliprivetChecked, setispubliprivetChecked] = useState(true);

  // -- range cursor

  // -- form data useState

  const [createArticleFormData, setCreateArticleFormData] = useState({
    article_title: '',
    article_image_url: '',
    article_body: '',
    article_id: crypto.randomUUID(),
    article_is_public: ispubliprivetChecked,
  });
  const { article_title, article_image_url, article_body, article_is_public } =
    createArticleFormData;
  //-- auto handle Input On Change
  const handleInputOnChange = (e) => {
    setCreateArticleFormData({
      ...createArticleFormData,
      [e.target.name]: e.target.value,
    });
    console.log(createArticleFormData);
  };

  //-- create response area
  const [serverResponse, setServerResponse] = useState('');
  // -- and redirect in case of success
  const navigate = useNavigate();

  //-- handle submitNewArticleData
  const handleOnSubmitCreateNewArticle = async (e) => {
    e.preventDefault();
    setCreateArticleFormData({
      ...createArticleFormData,
      article_is_public: ispubliprivetChecked,
    });
    console.log(createArticleFormData);
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
      console.log('not ok');
      setServerResponse(result.message);
      setTimeout(() => {
        setServerResponse('');
      }, 3000);
    }

    if (response.ok) {
      console.log('ok');
      setServerResponse(result.message);
      setTimeout(() => {
        setCreateArticleFormData({
          article_title: '',
          article_image_url: '',
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

          <div className='checkboxAndDispay'>
            <div className='checkBoxBoxContainer'>
              <input
                key={crypto.randomUUID()}
                type='checkbox'
                name='checkBoxState'
                id='checkBoxState'
                checked={ispubliprivetChecked}
                onChange={(e) => {
                  handleCheckBoxOnCheck(e);
                }}
              />
            </div>
            <div
              className={`isPublicCheckboxContainer ${
                ispubliprivetChecked ? 'isPublicBgColor' : 'isPrivetBgColor'
              }`}
            >
              {ispubliprivetChecked ? 'Public' : 'Privet'}
            </div>
          </div>
          <div className='buttonOnSubmitCreateNewArticleContainer'>
            <button
              type='submit'
              className='buttonOnSubmitCreateNewArticle'
              onClick={handleOnSubmitCreateNewArticle}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
