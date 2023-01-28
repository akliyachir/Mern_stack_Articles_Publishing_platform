import './SideBarMenu.css';
import { NavLink } from 'react-router-dom';
import { menuItemsList } from './SideBarMenuItems';
import { FaRegWindowClose } from 'react-icons/fa';

export default function SideBarMenu({ isMenuOpen, closeSideMenu }) {
  return (
    <div className={isMenuOpen ? 'SideBarMenuOpen' : 'SideBarMenuClosed'}>
      <div className='SideBarMenuContent'>
        <div className='closeSideBarCross' onClick={closeSideMenu}>
          <FaRegWindowClose />
        </div>
        <div className='menuItem'>
          {menuItemsList.map((item) => {
            const { menu_item_id, title, url } = item;
            return (
              <div key={menu_item_id}>
                <span
                  className='NavLinkMenuItemStyling'
                  onClick={closeSideMenu}
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
