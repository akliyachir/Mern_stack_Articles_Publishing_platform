import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom'
// -- pages import
import RootLayout from './Pages/1-RootLayout/RootLayout'
import ErrorPage from './Pages/2-ErrorPage/ErrorPage'
import SignUpContainer from './Pages/4-SignUp/SignUpContainer'
import SignInContainer from './Pages/3-SignIn/SignInContainer'
// -- contexts
import UserContextProvider from './Contexts/UserContext'
import CreateArticle from './UserPages/1-CreateArticle/CreateArticle'
import GetUserArticles from './UserPages/2-GetUserArticles/GetUserArticles'
import TestComponent from './TestComponent/TestComponent'
import GetUserFullArticleTemplate from './UserPages/3-GetUserFullArticleTemplate/GetUserFullArticleTemplate'
import ShowAllPublicArticles from './Pages/5-ShowAllPublicArticles/ShowAllPublicArticles'
import FullPublicArticle from './TemplatePages/2-FullPublicArticle/FullPublicArticle'
import UserDisconnect from './UserPages/0-UserDisconnect/UserDisconnect'
import UpdateUserArticle from './UserPages/4-UpdateUserArticle/UpdateUserArticle'

// -- user routes import
//-- create router
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
			<Route
				path='/'
				element={<ShowAllPublicArticles />}
				errorElement={<ErrorPage />}
			/>
			<Route
				path='/article/:public_article_id'
				element={<FullPublicArticle />}
				errorElement={<ErrorPage />}
			/>
			<Route
				path='/signin'
				element={<SignInContainer />}
				errorElement={<ErrorPage />}
			/>
			<Route
				path='/signup'
				element={<SignUpContainer />}
				errorElement={<ErrorPage />}
			/>
			<Route
				path='/disconnect'
				element={<UserDisconnect />}
				errorElement={<ErrorPage />}
			/>
			<Route
				path='/create_article'
				element={<CreateArticle />}
				errorElement={<ErrorPage />}
			/>
			<Route
				path='/user_articles'
				element={<GetUserArticles />}
				errorElement={<ErrorPage />}
			/>
			<Route
				path='/user_article_update/:article_update_id'
				element={<UpdateUserArticle />}
				errorElement={<ErrorPage />}
			/>
			<Route
				path='/user_article/:user_article_id'
				element={<GetUserFullArticleTemplate />}
				errorElement={<ErrorPage />}
			/>

			<Route
				path='/tomato'
				element={<TestComponent />}
				errorElement={<ErrorPage />}
			/>
		</Route>
	)
)

export default function App() {
	return (
		<UserContextProvider>
			<RouterProvider router={router} />
		</UserContextProvider>
	)
}
