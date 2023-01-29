import './HeaderContainer.css';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import SideBarMenu from '../2-SideBarMenu/SideBarMenu';
import { useState, useContext } from 'react';
import { UserContext } from '../../Contexts/UserContext';
import GlobalVoileCloseMenu from './GlobalVoileCloseMenu';

export default function HeaderContainer() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleToggleSideBar = () => {
		setIsMenuOpen((isMenuOpen) => !isMenuOpen);
	};
	const closeSideMenu = () => {
		if (isMenuOpen === true) {
			setIsMenuOpen((isMenuOpen) => false);
		}
	};
	// -- userContext
	const { userState } = useContext(UserContext);
	console.log('from header', userState);
	// -- return
	return (
		<div className='HeaderContainer'>
			<div className='HeaderContainerContent' onClick={closeSideMenu}>
				<span className='homeLogo'>
					<NavLink to='/'>
						<FaHome />
					</NavLink>
					<div className='toggleUserMenu'>{userState.email}</div>
				</span>
				<div className='hamburgerIcon' onClick={handleToggleSideBar}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<SideBarMenu isMenuOpen={isMenuOpen} closeSideMenu={closeSideMenu} />
			</div>
			<GlobalVoileCloseMenu
				closeSideMenu={closeSideMenu}
				isMenuOpen={isMenuOpen}
			/>
		</div>
	);
}
