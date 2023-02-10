import backendUrl from '../../listsAndReusedConsts/backendUrl.js';
import { useNavigate } from 'react-router-dom';
import './SignInContainer.css';
import '../SignInUpCommunStyling.css';
import { useState, useContext, useReducer, useEffect } from 'react';
import { UserContext } from '../../Contexts/UserContext';
import {
  loginErrorDefaultState,
  loginErrorReducer,
} from '../../reducers/loginErrorReducer';

export default function SignInContainer() {
  //-- display login error messages
  const [loginErrorState, loginErrorDispatch] = useReducer(
    loginErrorReducer,
    loginErrorDefaultState
  );
  useEffect(() => {
    loginErrorDispatch({ type: 'NO_ERROR_SIGNIN' });
  }, []);

  const [formDataSign, setFormDataSign] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isErrorToDisplay, setIsErrorToDisplay] = useState(false);

  const { email, password } = formDataSign;

  const handleInputOnChange = (e) => {
    setFormDataSign({ ...formDataSign, [e.target.name]: e.target.value });
  };
  const displayLogginErrorMessages = () => {
    setIsErrorToDisplay(true);
    setTimeout(() => {
      loginErrorDispatch({ type: 'NO_ERROR_SIGNIN' });
      setIsErrorToDisplay(false);
    }, 3000);
  };
  // -- useNavigate initialisation
  const navigate = useNavigate();
  //-- user context
  const { userState, userDispatch } = useContext(UserContext);

  const handleOnSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(backendUrl + 'user/signin', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formDataSign),
      });
      const result = await response.json();
      if (!response.ok) {
        const { message } = result;
        loginErrorDispatch({ type: 'IS_ERROR', payload: { message } });

        displayLogginErrorMessages();
      }
      if (response.ok) {
        await userDispatch({ type: 'SIGN_IN', payload: result });
        window.localStorage.setItem('user', JSON.stringify(result));

        // -- reset the form after login

        setFormDataSign({ name: '', email: '', password: '' });

        // -- say welcome te the new user before redirect to home page
        loginErrorDispatch({ type: 'LOGIN_SUCCESS' });
        setIsErrorToDisplay(true);
        setTimeout(() => {
          loginErrorDispatch({ type: 'NO_ERROR_SIGNIN' });
          setIsErrorToDisplay(false);
          navigate('/');
        }, 3000);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  // -- return
  return (
    <div className='SignInContainer'>
      <div className='SignInContainerContent'>
        <div
          className={
            isErrorToDisplay ? 'isErrorFormStitleStyling' : 'formStitleStyling'
          }
        >
          {loginErrorState.errorMessage}
        </div>
        <form className='formSignStyling'>
          <div className='inputSignStyling'>
            <label htmlFor='email' className='labelSignStyling'>
              Email
            </label>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='email...'
              className='InputTextStyling'
              value={email}
              onChange={handleInputOnChange}
            />
          </div>
          <div className='inputSignStyling'>
            <label htmlFor='password' className='labelSignStyling'>
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='password...'
              className='InputTextStyling'
              value={password}
              onChange={handleInputOnChange}
            />
          </div>
          <div className='submitButtonContainer'>
            <button
              type='submit'
              className='submitSignStyling'
              onClick={handleOnSubmitForm}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
