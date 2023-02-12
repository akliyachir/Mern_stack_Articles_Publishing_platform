import './CreateArticle.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import backendUrl from '../../listsAndReusedConsts/backendUrl'
import TiptapRichTextEditor from '../../TiptapRichTextEditor/TiptapRichTextEditor'
// -- create a context, my last resort :'(

export default function CreateArticle() {
	const [getContentFromTheTextEditor, setgetContentFromTheTextEditor] = useState(
		{ html: '', plainTextShorten: '' }
	)

	const [articleLengthCheck, setarticleLengthCheck] = useState('')

	const [createArticleFormData, setCreateArticleFormData] = useState({
		article_title: '',
		article_image_url: '',
		article_image_height: 50,
		article_body: '',
		article_body_shorten_for_card: '',
		article_id: crypto.randomUUID(),
		article_is_public: true,
	})
	const {
		article_title,
		article_image_url,
		article_image_height,
		article_body,
		article_body_shorten_for_card,
		article_id,
		article_is_public,
	} = createArticleFormData

	const handleInputOnChange = (e) => {
		setCreateArticleFormData({
			...createArticleFormData,
			[e.target.name]: e.target.value,
		})
	}

	//-- create server response area
	const [serverResponse, setServerResponse] = useState('')
	//-- at least 300 character response area
	const [atLeast300CharactersMessage, setatLeast300CharactersMessage] =
		useState('')
	// -- and redirect in case of success
	const navigate = useNavigate()

	//-- handle submitNewArticleData
	const handleOnSubmitCreateNewArticle = async () => {
		setCreateArticleFormData({
			article_title,
			article_image_url,
			article_image_height,
			article_body: getContentFromTheTextEditor.html,
			article_body_shorten_for_card: getContentFromTheTextEditor.plainTextShorten,
			article_id,
			article_is_public,
			...createArticleFormData,
		})
		if (articleLengthCheck.length < 300) {
			setServerResponse('Must be at least a 300 characters')
			setatLeast300CharactersMessage('Must be at least a 300 characters!')
			setTimeout(() => {
				setServerResponse('')
				setatLeast300CharactersMessage('')
			}, 3000)
			return
		} else if (articleLengthCheck.length > 8000) {
			setServerResponse('You exceeded 8000 characters!')
			setTimeout(() => {
				setServerResponse('')
			}, 3000)
			return
		} else {
			// -- get token from localStorage

			const { token } = JSON.parse(globalThis.localStorage.getItem('user'))
			console.log(createArticleFormData)
			const response = await fetch(backendUrl + 'user_article', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
					authorization: JSON.stringify(`Bearer ${token}`),
				},
				body: JSON.stringify(createArticleFormData),
			})

			const result = await response.json()

			if (!response.ok) {
				setServerResponse(result.message)
				setatLeast300CharactersMessage(result.message)
				setTimeout(() => {
					setatLeast300CharactersMessage('')
					setServerResponse('')
				}, 3000)
				return
			}

			if (response.ok) {
				setatLeast300CharactersMessage(result.message)
				setServerResponse(result.message)
				setTimeout(() => {
					setCreateArticleFormData({
						article_title: '',
						article_image_url: '',
						article_image_height: 50,
						article_body: '',
						article_id: crypto.randomUUID(),
					})
					navigate('/user_articles')
				}, 3000)
			}
		}
	}

	// -- synchronise text editir with reste for form data

	//-- return jsx
	return (
		<div className='CreateArticle'>
			<div className='CreateArticleContent'>
				<form className='formCreateArticle'>
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
									})
								}}
							/>
						</div>
					)}
					<div
						className={
							articleLengthCheck && articleLengthCheck.length > 8000
								? 'errorTextEditor'
								: 'NoErrorTextEditor'
						}
					>
						<TiptapRichTextEditor
							getContentFromTheTextEditor={getContentFromTheTextEditor}
							setgetContentFromTheTextEditor={setgetContentFromTheTextEditor}
							setarticleLengthCheck={setarticleLengthCheck}
							articleLengthCheck={articleLengthCheck}
						/>
						{!!atLeast300CharactersMessage && (
							<div className='ThreeHundredCharactersMEssageArea'>
								{atLeast300CharactersMessage}
							</div>
						)}
					</div>
					<button
						type='submit'
						className='buttonOnSubmitCreateNewArticle'
						onClick={(e) => {
							e.preventDefault()

							const createSomething = () => {
								setCreateArticleFormData({
									...createArticleFormData,
									article_body: getContentFromTheTextEditor.html,
									article_body_shorten_for_card:
										getContentFromTheTextEditor.plainTextShorten,
									article_id,
								})
							}
							createSomething()
							setTimeout(() => {
								createSomething()
								console.log(createArticleFormData)
							}, 0)

							/* 			 setTimeout(() => {
								// handleOnSubmitCreateNewArticle()
							}, 0)  */
						}}
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}
