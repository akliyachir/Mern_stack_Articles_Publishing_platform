import './UserSideBarMenu.css';
import { userMenuItemsList } from '../../listsAndReusedConsts/UserSideBarMenuItems';
import { NavLink } from 'react-router-dom';
import { FaRegWindowClose } from 'react-icons/fa';

export default function UserSideBarMenu({ isUserMenuOpen, closeUserSideMenu }) {
  return (
    <div
      className={
        isUserMenuOpen ? 'userSideBarMenuClosed' : 'userSideBarMenuOpen'
      }
    >
      <div className='UserSideBarMenuContent'>
        <div className='userCloseUserSideBarCross' onClick={closeUserSideMenu}>
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
  );
}
