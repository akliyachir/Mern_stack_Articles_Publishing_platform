import { createContext, useReducer } from 'react';
import { userReducer, userDefaultState } from '../reducers/userReducer';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
	// -- useReducer
	const [userState, userDispatch] = useReducer(userReducer, userDefaultState);
	// -- return component
	return (
		<UserContext.Provider value={{ userState, userDispatch }}>
			{children}
		</UserContext.Provider>
	);
}
