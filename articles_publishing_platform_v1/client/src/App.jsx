import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
// -- pages import
import RootLayout from './Pages/1-RootLayout/RootLayout';
import ErrorPage from './Pages/2-ErrorPage/ErrorPage';
import SignUpContainer from './Pages/4-SignUp/SignUpContainer';
import SignInContainer from './Pages/3-SignIn/SignInContainer';
// -- contexts
import UserContextProvider from './Contexts/UserContext';

//-- create router
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
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
		</Route>
	)
);

export default function App() {
	return (
		<UserContextProvider>
			<RouterProvider router={router} />
		</UserContextProvider>
	);
}
