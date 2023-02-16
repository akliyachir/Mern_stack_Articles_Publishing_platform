import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
export default function Contact() {
	return (
		<div className='ErrorPage'>
			<div className='ErrorPageContent'>
				<h1>Akli Yachir</h1>
				<p>akli.yachir@gmail.com</p>
				<div className='NavLinkErrorToHome'>
					<NavLink to='/'>
						<FaHome />
					</NavLink>
				</div>
			</div>
		</div>
	);
}
