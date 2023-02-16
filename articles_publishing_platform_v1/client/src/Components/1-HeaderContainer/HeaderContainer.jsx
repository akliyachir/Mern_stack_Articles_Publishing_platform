import './HeaderContainer.css';
import { MdLibraryBooks } from 'react-icons/md';
import { FaUserAstronaut } from 'react-icons/fa';

import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import SideBarMenu from '../2-SideBarMenu/SideBarMenu';
import UserSideBarMenu from '../3-UserSideBarMenu/UserSideBarMenu';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../Contexts/UserContext';
import GlobalVoileCloseMenu from './GlobalVoileCloseMenu';

export default function HeaderContainer() {
	// -- set window size state
	const [windowSize, setWindowSize] = useState(globalThis.innerWidth);
	// -- st window size at page load
	useEffect(() => {
		setWindowSize(globalThis.innerWidth);
	}, []);
	// -- st window size at page resize
	globalThis.addEventListener('resize', () => {
		setWindowSize(globalThis.innerWidth);
	});

	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleToggleSideBar = () => {
		setIsMenuOpen((isMenuOpen) => !isMenuOpen);
		if (isUserMenuOpen === true) {
			setIsUserMenuOpen(false);
		}
	};
	// -- user the same
	const handleUserToggleSideBar = () => {
		setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen);
		if (isMenuOpen === true) {
			setIsMenuOpen((isMenuOpen) => !isMenuOpen);
		}
	};

	const closeSideMenu = () => {
		if (isMenuOpen === true) {
			setIsMenuOpen(false);
		}
	};

	const closeUserSideMenu = () => {
		if (isUserMenuOpen === true) {
			setIsUserMenuOpen(false);
		}
	};
	// -- userContext
	const { userState } = useContext(UserContext);

	// -- return
	return (
		<div className='HeaderContainer'>
			<div className='HeaderContainerContent'>
				<span
					className='homeLogo'
					onClick={() => {
						closeSideMenu();
						closeUserSideMenu();
					}}
				>
					<NavLink to='/'>
						<FaHome />
					</NavLink>
				</span>

				{!!userState.email && (
					<div
						onClick={handleUserToggleSideBar}
						className='userToggleMenuLogoAndName'
					>
						<div className='toggleUserMenu'>
							<FaUserAstronaut />
						</div>
						<div>{userState.name.split(' ')[0]}</div>
					</div>
				)}

				<div
					className={!isMenuOpen ? 'hamburgerIcon' : 'hamburgerIconmMenuOpen'}
					onClick={handleToggleSideBar}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>

				<SideBarMenu isMenuOpen={isMenuOpen} closeSideMenu={closeSideMenu} />
				{!!userState.email && (
					<UserSideBarMenu
						isUserMenuOpen={isUserMenuOpen}
						closeUserSideMenu={closeUserSideMenu}
					/>
				)}
			</div>
			<GlobalVoileCloseMenu
				closeSideMenu={closeSideMenu}
				isMenuOpen={isMenuOpen}
				closeUserSideMenu={closeUserSideMenu}
				isUserMenuOpen={isUserMenuOpen}
			/>
		</div>
	);
}
