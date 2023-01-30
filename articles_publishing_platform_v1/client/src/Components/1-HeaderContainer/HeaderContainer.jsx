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
    setIsUserMenuOpen((isUserMenuOpen) => false);
  };
  const closeSideMenu = () => {
    if (isMenuOpen === true) {
      setIsMenuOpen(false);
    }
  };
  // -- user the same
  const handleUserToggleSideBar = () => {
    if (isUserMenuOpen === true) {
      setIsUserMenuOpen(false);
    }
    if (isUserMenuOpen === false) {
      setIsUserMenuOpen(true);
      setIsMenuOpen(false);
    }
  };
  const closeUserSideMenu = () => {
    if (isUserMenuOpen === true) {
      setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen);
    }
  };
  // -- userContext
  const { userState } = useContext(UserContext);

  // -- toggleUserMenu

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
