import './SignInContainer.css';
import '../SignInUpCommunStyling.css';
import { useState } from 'react';

export default function SignInContainer() {
	const [formDataSign, setFormDataSign] = useState({
		email: '',
		password: '',
	});
	const { email, password } = formDataSign;
	const handleInputOnChange = (e) => {
		setFormDataSign({ ...formDataSign, [e.target.name]: e.target.value });
		console.log(formDataSign);
	};

	const handleOnSubmitForm = (e) => {
		e.preventDefault();
	};
	return (
		<div className='SignInContainer'>
			<div className='SignInContainerContent'>
				<div className='formStitleStyling'>Sign in</div>
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
							Enter
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
