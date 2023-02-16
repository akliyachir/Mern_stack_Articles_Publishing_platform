import './ErrorPage.css';
import { NavLink, useRouteError } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className='ErrorPage'>
      <div className='ErrorPageContent'>
        <h1>Oops!</h1>
        <p>{error.statusText || error.message}</p>
        <div className='NavLinkErrorToHome'>
          <NavLink to='/'>
            <FaHome />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
