import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  GrBold,
  GrItalic,
  GrTextAlignFull,
  GrOrderedList,
  GrUnorderedList,
  GrRedo,
  GrUndo,
} from 'react-icons/gr';

import './CreateArticle.css';
import {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from 'react';
import { useNavigate } from 'react-router-dom';
import backendUrl from '../../listsAndReusedConsts/backendUrl';
import TiptapRichTextEditor from '../../TiptapRichTextEditor/TiptapRichTextEditor';
// -- create a context, my last resort :'(
export const PreviewsValues = createContext({});

export default function CreateArticle() {
  const [getContentFromTheTextEditor, setgetContentFromTheTextEditor] =
    useState({ html: '', plainTextShorten: '' });
  const { html, plainTextShorten } = getContentFromTheTextEditor;

  const [articleLengthCheck, setarticleLengthCheck] = useState('');

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

  const handleInputOnChange = (e) => {
    setCreateArticleFormData({
      ...createArticleFormData,
      [e.target.name]: e.target.value,
    });
  };

  //-- create response area
  const [serverResponse, setServerResponse] = useState('');
  //-- at least 300 character response area
  const [atLeast300CharactersMessage, setatLeast300CharactersMessage] =
    useState('');
  // -- and redirect in case of success
  const navigate = useNavigate();

  //-- handle submitNewArticleData
  const handleOnSubmitCreateNewArticle = async (e) => {
    e.preventDefault();
    const hola = async (e) => {
      e.preventDefault();

      setCreateArticleFormData({
        ...createArticleFormData,
        article_body: html,
        article_body_shorten_for_card: plainTextShorten,
      });

      if (articleLengthCheck.length < 300) {
        setServerResponse('Must be at least a 300 characters');
        setatLeast300CharactersMessage('Must be at least a 300 characters!');
        setTimeout(() => {
          setServerResponse('');
          setatLeast300CharactersMessage('');
        }, 3000);

        setTimeout(() => {
          setatLeast300CharactersMessage('');
        }, 5000);

        return;
      }

      if (articleLengthCheck.length > 8000) {
        setServerResponse('You exceeded 8000 characters!');
        setTimeout(() => {
          setServerResponse('');
        }, 3000);
        return;
      }

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
        setatLeast300CharactersMessage(result.message);
        setTimeout(() => {
          setatLeast300CharactersMessage('');
          setServerResponse('');
        }, 10000);
        return;
      }

      if (response.ok) {
        setServerResponse(result.message);
        setatLeast300CharactersMessage(result.message);
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

    hola();
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
          <div className='TiptapRichTextEditor'>
            <div className='TiptapRichTextEditorContent'>
              <TipTapEditor
                setCreateArticleFormData={setCreateArticleFormData}
                setarticleLengthCheck={setarticleLengthCheck}
              />
              {articleLengthCheck.length > 8000 && (
                <div className='bodyTextEditorErrorMessage'>
                  <p>Too much content</p>
                  <p>Exceeding 8000 characters!</p>
                </div>
              )}
            </div>
          </div>
          <div
            className={
              articleLengthCheck && articleLengthCheck.length > 8000
                ? 'errorTextEditor'
                : 'NoErrorTextEditor'
            }
          >
            {!!atLeast300CharactersMessage && (
              <div className='ThreeHundredCharactersMEssageArea'>
                {atLeast300CharactersMessage}
              </div>
            )}
          </div>
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
//--

import { RiH1, RiH2, RiTextWrap } from 'react-icons/ri';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className='TextEditorMenu'>
      <div className='TextEditorMenuContent'>
        <div className='sectionFirst'>
          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive('paragraph') ? 'is-active' : ''}
          >
            <div className='TipTapIconsStyling'>
              <GrTextAlignFull />
            </div>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active' : ''}
          >
            <div className='TipTapIconsStyling'>
              <GrBold />
            </div>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}
          >
            <div className='TipTapIconsStyling'>
              <GrItalic />
            </div>
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
            }
          >
            <div className='TipTapIconsStyling'>
              <RiH1 />
            </div>
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
            }
          >
            <div className='TipTapIconsStyling'>
              <RiH2 />
            </div>
          </button>
        </div>
        <div className='sectionSecond'>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'is-active' : ''}
          >
            <div className='TipTapIconsStyling'>
              <GrUnorderedList />
            </div>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'is-active' : ''}
          >
            <div className='TipTapIconsStyling'>
              <GrOrderedList />
            </div>
          </button>

          <button onClick={() => editor.chain().focus().setHardBreak().run()}>
            <div className='TipTapIconsStyling'>
              <RiTextWrap />
            </div>
          </button>
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
          >
            <div className='TipTapIconsStyling'>
              <GrUndo />
            </div>
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
          >
            <div className='TipTapIconsStyling'>
              <GrRedo />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const TipTapEditor = ({ setarticleLengthCheck, setCreateArticleFormData }) => {
  const {
    article_title,
    article_image_url,
    article_body,
    article_body_shorten_for_card,
    article_image_height,
    createArticleFormData,
  } = useContext(PreviewsValues);

  editor = useEditor({
    extensions: [StarterKit],
    content: '',
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      const plainText = editor.getText().replace(/['\n']/gi, ' ');
      const plainTextShorten = plainText.slice(0, 180);

      setCreateArticleFormData({
        article_title,
        article_image_url,
        article_image_height,
        createArticleFormData,
        article_body: html,
        article_body_shorten_for_card: plainTextShorten,
        ...createArticleFormData,
      });
      console.log(createArticleFormData);
      setarticleLengthCheck(plainText);
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
