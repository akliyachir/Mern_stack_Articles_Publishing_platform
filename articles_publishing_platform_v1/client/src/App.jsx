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
import CreateArticle from './UserPages/1-CreateArticle/CreateArticle';
import GetUserArticles from './UserPages/2-GetUserArticles/GetUserArticles';
import TestComponent from './TestComponent/TestComponent';

// -- user routes import
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
        path='user_articles/:id'
        element={<TestComponent />}
        errorElement={<ErrorPage />}
      />
      <Route
        path='/tomato'
        element={<TestComponent />}
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
