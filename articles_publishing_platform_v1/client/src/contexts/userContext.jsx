import { createContext, useReducer } from 'react';
import { userReducer, userDefaultState } from '../reducers/userReducer';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
	// -- useReducer
	const [userState, userDispatch] = useReducer(userReducer, userDefaultState);
	// -- useEffect to get user infos from localStorage and dispatch them globaly
	useEffect(() => {
		const userFromLocalStorageAsJson = globalThis.localStorage.getItem('user');
		console.log('rak chayef', userFromLocalStorageAsJson);
		if (userFromLocalStorageAsJson) {
			const userFromLocalStorage = JSON.parse(userFromLocalStorageAsJson);
			userDispatch({ type: 'SIGN_IN', payload: userFromLocalStorage });
			console.log(
				'from useEffect of user context using local storage data',
				userFromLocalStorage
			);

			return;
		}
		if (!userFromLocalStorageAsJson) {
			console.log('not a user');
			return;
		}
	}, []);

	// -- return component
	return (
		<UserContext.Provider value={{ userState, userDispatch }}>
			{children}
		</UserContext.Provider>
	);
}
