import { Outlet } from 'react-router-dom';
import HeaderContainer from '../../Components/1-HeaderContainer/HeaderContainer';
import './RootLayout.css';

export default function RootLayout() {
  return (
    <div className='RootLayout'>
      <div className='RootLayoutContent'>
        <nav>
          <HeaderContainer />
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
