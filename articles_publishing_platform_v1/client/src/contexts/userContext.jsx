import { createContext, useReducer } from 'react';
import { userReducer, userDefaultState } from '../reducers/userReducer';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
	// -- useReducer
	const [userState, userDispatch] = useReducer(userReducer, userDefaultState);
	// -- useEffect to get user infos from localStorage and dispatch them globaly

	// -- return component
	return (
		<UserContext.Provider value={{ userState, userDispatch }}>
			{children}
		</UserContext.Provider>
	);
}
