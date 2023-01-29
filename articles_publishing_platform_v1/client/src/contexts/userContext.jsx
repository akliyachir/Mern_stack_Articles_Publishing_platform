import { createContext, useReducer } from 'react';
import { userReducer, userDefaultState } from '../reducers/userReducer';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
	// -- useReducer
	const [userState, userDispatch] = useReducer(userReducer, userDefaultState);
	// -- return
	useEffect(() => {
		const userFromLocalStorageAsJson = globalThis.localStorage.getItem('user');
		if (userFromLocalStorageAsJson) {
			const userFromLocalStorage = JSON.parse(userFromLocalStorageAsJson);
			userDispatch({ type: 'SIGN_IN', payload: userFromLocalStorage });
			console.log(userFromLocalStorage);
			return;
		}
		if (!userFromLocalStorageAsJson) {
			console.log('not a user');
			return;
		}
	}, []);

	return (
		<UserContext.Provider value={{ userState, userDispatch }}>
			{children}
		</UserContext.Provider>
	);
}
