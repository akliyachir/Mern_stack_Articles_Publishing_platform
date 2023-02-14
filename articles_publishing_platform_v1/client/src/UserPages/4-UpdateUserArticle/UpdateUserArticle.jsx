import './UpdateUserArticle.css';
import '../1-CreateArticle/CreateArticle.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef, createContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import backendUrl from '../../listsAndReusedConsts/backendUrl';
import TiptapRichTextEditor from '../../TiptapRichTextEditor/TiptapRichTextEditor';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { MenuBar } from '../../TiptapRichTextEditor/TipTapRichFromSource';

let editor;
const defaultState = { articleContent: '' };
const reducer = (state, action) => {
	switch (action.type) {
		case 'TEXT_EDITOR_CONTENT':
			return { articleContent: action.payload };
		default:
			s;
			return { defaultState };
	}
};
export default function UpdateUserArticle() {
	const tryToUpdateTextEditorContent = useRef();
	console.log(tryToUpdateTextEditorContent.pro);
	// -- useReducer
	const [state, dispatch] = useReducer(reducer, defaultState);
	// -- article body separate state to make sure that render
	const [article_body_fetched_content, setArticle_body_fetched_content] =
		useState('');
	// -- the article id
	const { article_update_id } = useParams();
	// -- default loader
	const [isLoading, setisLoading] = useState(true);
	// -- a variable to force mouting the text editor
	// -- form data
	const [createArticleFormData, setCreateArticleFormData] = useState({
		article_title: '',
		article_image_url: '',
		article_image_height: 50,
		article_body: '',
		article_body_shorten_for_card: '',
		article_is_public: true,
	});
	const {
		article_title,
		article_image_url,
		article_image_height,
		article_body,
		article_body_shorten_for_card,
		article_id,
		article_is_public,
	} = createArticleFormData;

	// -- get full article
	useEffect(() => {
		const userLocalStorage = window.localStorage.getItem('user');
		const { token } = JSON.parse(userLocalStorage);
		const fetchTheArticle = async () => {
			setisLoading(true);
			try {
				const response = await fetch(
					`${backendUrl}user_article/${article_update_id}`,
					{
						headers: {
							authorization: JSON.stringify(`Bearer ${token}`),
						},
					}
				);
				const result = await response.json();

				//-- ok
				if (response.ok) {
					setCreateArticleFormData({
						...setCreateArticleFormData,
						...result.message,
					});
					tryToUpdateTextEditorContent.current = message.article_body;
					dispatch({
						type: 'TEXT_EDITOR_CONTENT',
						payload: result.message.article_body,
					});
					setisLoading(false);
				}

				//-- not ok
				if (!response.ok) {
					console.log(result.message);
				}
			} catch (error) {
				console.error(error.message);
			}
		};

		fetchTheArticle();
	}, []);

	// -- update article controller

	const [getContentFromTextEditor, setGetContentFromTextEditor] = useState({
		html: '',
		plainTextShorten: '',
	});
	const { html, plainTextShorten } = getContentFromTextEditor;
	const [articleLengthCheck, setarticleLengthCheck] = useState('');

	const handleInputOnChange = (e) => {
		setCreateArticleFormData({
			...createArticleFormData,
			[e.target.name]: e.target.value,
		});
	};

	//-- create server response area
	const [serverResponse, setServerResponse] = useState('');
	//-- at least 300 character response area
	const [atLeast300CharactersMessage, setatLeast300CharactersMessage] =
		useState('');
	// -- and redirect in case of success
	const navigate = useNavigate();

	//-- handle update the article

	const handleOnSubmitCreateNewArticle = async (e) => {
		e.preventDefault();

		if (articleLengthCheck.length < 300) {
			setServerResponse('Must be at least a 300 characters');
			setatLeast300CharactersMessage('Must be at least a 300 characters!');
			setTimeout(() => {
				setServerResponse('');
				setatLeast300CharactersMessage('');
			}, 3000);
			return;
		}
		if (articleLengthCheck.length > 8000) {
			setServerResponse('You exceeded 8000 characters!');
			setTimeout(() => {
				setServerResponse('');
			}, 3000);
			return;
		}

		const { token } = JSON.parse(globalThis.localStorage.getItem('user'));
		const response = await fetch(backendUrl + 'user_article', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				authorization: JSON.stringify(`Bearer ${token}`),
			},
			body: JSON.stringify({
				...article_title,
				article_image_url,
				article_image_height,
				article_body: html,
				article_body_shorten_for_card: plainTextShorten,
			}),
		});

		const result = await response.json();

		if (!response.ok) {
			setServerResponse(result.message);
			setatLeast300CharactersMessage(result.message);
			setTimeout(() => {
				setatLeast300CharactersMessage('');
				setServerResponse('');
			}, 3000);
			return;
		}

		if (response.ok) {
			setatLeast300CharactersMessage(result.message);
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
	// -- TEXT EDITOR START

	editor = useEditor({
		extensions: [StarterKit],
		content: state.articleContent,
		onUpdate: ({ editor }) => {
			const html = editor.getHTML();
			const plainText = editor.getText().replace(/['\n']/gi, ' ');
			const plainTextShorten = plainText.slice(0, 180);
			globalThis.localStorage.setItem(
				'textEditor',
				JSON.stringify({ html: html, plainTextShorten: plainTextShorten })
			);
			setCreateArticleFormData({
				...createArticleFormData,
				article_body: html,
				article_body_shorten_for_card: plainTextShorten,
			});
			console.log(article_body_shorten_for_card);
			console.log(plainTextShorten);
			setarticleLengthCheck(plainText);
		},
	});

	// -- TEXT EDITOR END

	return (
		<div className='CreateArticle'>
			<div className='CreateArticleContent'>
				<form
					className='formCreateArticle'
					onSubmit={handleOnSubmitCreateNewArticle}
				>
					<div className='createArticlePageName'>
						{serverResponse ? serverResponse : <h1>Update my article</h1>}
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
					<div className='InputFormTemplateContainer paddingBottomToSeparate'>
						<label htmlFor='article_image_url'>Image link</label>
						<input
							type='text'
							name='article_image_url'
							id='article_image_url'
							value={article_image_url}
							onChange={handleInputOnChange}
						/>
					</div>

					{
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
					}

					<div
						className={
							articleLengthCheck && articleLengthCheck.length > 8000
								? 'errorTextEditor'
								: 'NoErrorTextEditor'
						}
					>
						{/* editor start */}
						<div className='TiptapRichTextEditor'>
							<div className='TiptapRichTextEditorContent'>
								<div>
									<MenuBar editor={editor} ref={tryToUpdateTextEditorContent} />
									<EditorContent editor={editor} />
								</div>
								{/* editor end */}
								{articleLengthCheck.length > 8000 && (
									<div className='bodyTextEditorErrorMessage'>
										<p>Too much content</p>
										<p>Exceeding 8000 characters!</p>
									</div>
								)}
							</div>
						</div>
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

/* text editor */
