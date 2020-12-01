import React, { createContext, useReducer } from 'react';
import { Alert } from 'react-native'

import {
	GoogleSignin,
	statusCodes
} from '@react-native-community/google-signin';
import { WEB_CLIENT_ID } from '../utils/GoogleSinginConfFirebase';

// actions
const configureGoogleSign = (dispatch) => async () => {
	const response = {
		data: {
			GoogleSignconfigured: true
		},
	};
	GoogleSignin.configure({
		webClientId: WEB_CLIENT_ID,
		offlineAccess: false
	});
	dispatch({
		type: 'configureGoogleSign',
		payload: response.data.GoogleSignconfigured,
	});
}

const signIn = (dispatch) => async () => {
	try {
		await GoogleSignin.hasPlayServices();
		const userInfo = await GoogleSignin.signIn();
		const isLoggedIn = true
		dispatch({
			type: 'SIGNIN',
			payload: userInfo,
			payload1: isLoggedIn
		});
	} catch (error) {
		if (error.code === statusCodes.SIGN_IN_CANCELLED) {
			// when user cancels sign in process,
			Alert.alert('Process Cancelled');
		} else if (error.code === statusCodes.IN_PROGRESS) {
			// when in progress already
			Alert.alert('Process in progress');
		} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
			// when play services not available
			Alert.alert('Play services are not available');
		} else {
			// some other error
			Alert.alert('Something else went wrong... ', error.toString());
			// setError(error);
		}
	}
}

const signOut = (dispatch) => async () => {
	try {
		await GoogleSignin.revokeAccess();
		await GoogleSignin.signOut();
		const isLoggedIn = false
		const userInfo = undefined
		dispatch({
			type: 'SIGNOUT',
			payload: isLoggedIn,
			payload1: userInfo,
		});
	} catch (error) {
		Alert.alert('Something else went wrong... ', error.toString());
	}
}

// reducers to handle Dispatched Actions
const userReducer = (state, action) => {
	switch (action.type) {
		case 'configureGoogleSign':
			return {
				...state,
				GoogleSignconfigured: action.payload,
			};
		case 'SIGNIN':
			return {
				...state,
				userInfo: action.payload,
				isLoggedIn: action.payload1
			};
		case 'SIGNOUT':
			return {
				...state,
				isLoggedIn: action.payload,
				userInfo: action.payload1,
			};
		default:
			return state;
	}
};

// Map Actions, State and Reducer for Consumer Components
const CreateUserContext = (reducer, actions, initialState) => {
	const UserContext = createContext();
	const UserProvider = ({ children }) => {
		const [userState, dispatch] = useReducer(reducer, initialState);
		const boundActions = {};
		for (let key in actions) {
			boundActions[key] = actions[key](dispatch);
		}
		return (
			<UserContext.Provider value={{ userState, ...boundActions }}>
				{children}
			</UserContext.Provider>
		);
	};
	return { UserContext, UserProvider };
};

export const { UserProvider, UserContext } = CreateUserContext(
	userReducer,
	{
		configureGoogleSign,
		signIn,
		signOut
	},
	{
		GoogleSignconfigured: false,
		userInfo: undefined,
		isLoggedIn: false
	}
);