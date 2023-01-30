import './HeaderContainer.css';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import SideBarMenu from '../2-SideBarMenu/SideBarMenu';
import UserSideBarMenu from '../3-UserSideBarMenu/UserSideBarMenu';
import { useState, useContext } from 'react';
import { UserContext } from '../../Contexts/UserContext';
import GlobalVoileCloseMenu from './GlobalVoileCloseMenu';

export default function HeaderContainer() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleSideBar = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };
  const closeSideMenu = () => {
    if (isMenuOpen === true) {
      setIsMenuOpen(false);
      closeUserSideMenu();
    }
  };
  // -- user the same
  const handleUserToggleSideBar = () => {
    setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen);
  };
  const closeUserSideMenu = () => {
    setIsUserMenuOpen((isUserMenuOpen) => false);
  };
  // -- userContext
  const { userState } = useContext(UserContext);

  // -- toggleUserMenu

  // -- return
  return (
    <div className='HeaderContainer'>
      <div className='HeaderContainerContent' onClick={closeSideMenu}>
        <span className='homeLogo'>
          <NavLink to='/'>
            <FaHome />
          </NavLink>
          {!!userState.email && (
            <div className='toggleUserMenu' onClick={handleUserToggleSideBar}>
              {userState.email}
            </div>
          )}
        </span>
        <div className='hamburgerIcon' onClick={handleToggleSideBar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <SideBarMenu isMenuOpen={isMenuOpen} closeSideMenu={closeSideMenu} />
        <UserSideBarMenu
          isUserMenuOpen={isUserMenuOpen}
          closeUserSideMenu={closeUserSideMenu}
        />
      </div>
      <GlobalVoileCloseMenu
        closeSideMenu={closeSideMenu}
        isMenuOpen={isMenuOpen}
      />
    </div>
  );
}
