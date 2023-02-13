import './RootLayout.css'
import { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderContainer from '../../Components/1-HeaderContainer/HeaderContainer'
import FooterHomePage from '../../Components/5-FooterHomePage/FooterHomePage'
import { UserContext } from '../../Contexts/UserContext'
import CreateArticleContextProvider from '../../contexts/CreateArticleContext'

export default function RootLayout() {
	const { userState, userDispatch } = useContext(UserContext)

	useEffect(() => {
		const userFromLocalStorageAsJson = globalThis.localStorage.getItem('user')
		if (userFromLocalStorageAsJson) {
			const userFromLocalStorage = JSON.parse(userFromLocalStorageAsJson)
			const { name, email, token } = userFromLocalStorage
			userDispatch({ type: 'SIGN_IN', payload: { name, email, token } })
		}
	}, [])
	return (
		<div className='RootLayout'>
			<div className='RootLayoutContent'>
				<nav>
					<HeaderContainer />
				</nav>
				<main className='mainAllOutputedArticles'>
					<Outlet />
				</main>
				<FooterHomePage />
			</div>
		</div>
	)
}
