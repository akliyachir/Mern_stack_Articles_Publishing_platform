import './UserSideBarMenu.css';
import { userMenuItemsList } from '../../listsAndReusedConsts/UserSideBarMenuItems';
import { NavLink } from 'react-router-dom';
import { FaRegWindowClose } from 'react-icons/fa';

export default function UserSideBarMenu({ closeUserSideMenu, isUserMenuOpen }) {
  const closeUserSideMenu = () => {};
  return (
    <div className='UserSideBarMenu'>
      <div className='UserSideBarMenuContent'>UserSideBarMenu</div>
      {/* imported from sideBarMenu */}
      <div className={isUserMenuOpen ? 'SideBarMenuOpen' : 'SideBarMenuClosed'}>
        <div className='SideBarMenuContent'>
          <div className='closeSideBarCross' onClick={closeUserSideMenu}>
            <FaRegWindowClose />
          </div>
          <div className='menuItem'>
            {userMenuItemsList.map((item) => {
              const { menu_item_id, title, url } = item;
              return (
                <div key={menu_item_id}>
                  <span
                    className='NavLinkMenuItemStyling'
                    onClick={closeUserSideMenu}
                  >
                    <NavLink to={url}>{title}</NavLink>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* imported from sideBarMenu end */}
    </div>
  );
}
