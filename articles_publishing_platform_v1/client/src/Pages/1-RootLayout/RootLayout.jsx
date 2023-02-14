import './RootLayout.css';
import { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderContainer from '../../Components/1-HeaderContainer/HeaderContainer';
import FooterHomePage from '../../Components/5-FooterHomePage/FooterHomePage';
import { UserContext } from '../../Contexts/UserContext';

export default function RootLayout() {
	const { userState, userDispatch } = useContext(UserContext);
	const [WebsiteTitleDesapearing, setWebsiteTitleDesapearing] = useState(false);
	useEffect(() => {
		const userFromLocalStorageAsJson = globalThis.localStorage.getItem('user');
		if (userFromLocalStorageAsJson) {
			const userFromLocalStorage = JSON.parse(userFromLocalStorageAsJson);
			const { name, email, token } = userFromLocalStorage;
			userDispatch({ type: 'SIGN_IN', payload: { name, email, token } });
		}
	}, []);
	return (
		<div className='RootLayout'>
			<div className='RootLayoutContent'>
				<nav>
					<HeaderContainer />
				</nav>
				<h1 className={false ? 'RootWebsiteTitleClosed' : 'RootWebsiteTitle'}>
					The best way to publish your Article
				</h1>
				<main className='mainAllOutputedArticles'>
					<Outlet />
				</main>
				<FooterHomePage />
			</div>
		</div>
	);
}
