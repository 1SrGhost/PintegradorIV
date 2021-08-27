import React, { createContext, useReducer } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native'

import {
	GoogleSignin,
	statusCodes
} from '@react-native-community/google-signin';
import { WEB_CLIENT_ID } from '../utils/GoogleSinginConfFirebase';


const refUser = firestore().collection('users');

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



const setUser = (dispatch) => async () => {
	// const userInfo = await GoogleSignin.signIn();

	// var query = refUser.where("id", "==", userInfo.user.id);
	// console.log('hhhh', userInfo.user.id)
	// console.log('hhhh', query)
	console.log('QUERY')
	// refUser.where("id", "==", userInfo.user.id).get().then((querySnapshot) => {
	// 	querySnapshot.forEach((doc) => {
	// 		// doc.data() is never undefined for query doc snapshots
	// 		console.log('DOCS', doc.id, " => ", doc.data());
	// 	});
	// })
	// 	.catch((error) => {
	// 		console.log("Error getting documents: ", error);
	// 	});


}



const signIn = (dispatch) => async () => {
	console.log('Hola')

	

	try {
		await GoogleSignin.hasPlayServices();
		const userInfo = await GoogleSignin.signIn();
		const isLoggedIn = true
		const typeUser = 'admin'





		
		dispatch({
			type: 'SIGNIN',
			payload: userInfo,
			payload1: isLoggedIn,
			payload2: typeUser
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
				isLoggedIn: action.payload1,
				typeUser: action.payload2
			};
		case 'SIGNOUT':
			return {
				...state,
				isLoggedIn: action.payload,
				userInfo: action.payload1,
				typeUser: 'user'

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
		signOut,
		setUser
	},
	{
		GoogleSignconfigured: false,
		userInfo: undefined,
		isLoggedIn: false,
		typeUser: 'user'
	}
);