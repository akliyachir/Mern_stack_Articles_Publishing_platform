import './SignUpContainer.css';
import '../SignInUpCommunStyling.css';
import { useState, useContext } from 'react';
import { UserContext } from '../../Contexts/UserContext';

export default function SignUpContainer() {
  const [formDataSign, setFormDataSign] = useState({ email: '', password: '' });
  const { email, password } = formDataSign;
  const handleInputOnChange = (e) => {
    setFormDataSign({ ...formDataSign, [e.target.name]: e.target.value });
  };

  //-- context
  const user = useContext(UserContext);
  const { userState, userDispatch } = user;

  const handleOnSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4001/user/signup', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formDataSign),
      });
      const result = await response.json();
      if (!response.ok) {
        console.log('this is not ok ->', result.message);
      }
      if (response.ok) {
        await userDispatch({ type: 'SIGN_IN', payload: result });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className='SignUpContainer'>
      <div className='SignUpContainerContent'>
        <div className='formStitleStyling'>Create an account</div>
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
