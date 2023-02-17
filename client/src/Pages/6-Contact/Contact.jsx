import './Contact.css';

import { NavLink } from 'react-router-dom';
import { FaGithub, FaHome } from 'react-icons/fa';
export default function Contact() {
	return (
		<div className='ErrorPage'>
			<div className='contactMeRectangle'>
				<h1>Akli Yachir</h1>
				<p className='emailForContactMe'>akli.yachir@gmail.com</p>
				<div className='githubLink '>
					<a
						href='https://github.com/akliyachir/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaGithub />
					</a>
				</div>
				<div className='githubLink'>
					<NavLink to='/'>
						<FaHome />
					</NavLink>
				</div>
			</div>
		</div>
	);
}
