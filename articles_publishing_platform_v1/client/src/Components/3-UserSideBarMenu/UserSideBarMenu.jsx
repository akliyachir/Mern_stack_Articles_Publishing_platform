import './UserSideBarMenu.css';
import { userMenuItemsList } from '../../listsAndReusedConsts/UserSideBarMenuItems';
import { NavLink } from 'react-router-dom';
import { FaRegWindowClose } from 'react-icons/fa';

export default function UserSideBarMenu() {
  const userCloseSideMenu = () => {};
  return (
    <div className='UserSideBarMenu'>
      <div className='UserSideBarMenuContent'>UserSideBarMenu</div>
      {/* imported from sideBarMenu */}
      <div className={true ? 'userSideBarMenuClosed' : 'userSideBarMenuOpen'}>
        <div className='userSideBarMenuContent'>
          <div className='closeUserSideBarCross' onClick={userCloseSideMenu}>
            <FaRegWindowClose />
          </div>
          <div className='menuItem'>
            {userMenuItemsList.map((item) => {
              const { menu_item_id, title, url } = item;
              return (
                <div key={menu_item_id}>
                  <span
                    className='NavLinkMenuItemStyling'
                    onClick={userCloseSideMenu}
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
