import React, { useState, useEffect, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { UserContext } from '../../context/UserContext'

import MainStackNavigator from '../../navigation/MainStackNavigator'
import AdminUserNavigator from '../../navigation/AdminUserNavigator'
import AnomUserNavigator from '../../navigation/AnomUserNavigator'

import { navigationRef } from '../../navigation/CustomNavigation/RootNavigation';


export default function IndexApp() {

    const { userState, configureGoogleSign } = useContext(UserContext);
    const { GoogleSignconfigured, isLoggedIn } = userState;

    console.log('GoogleSignin.configure Estado de iniciacion: ', GoogleSignconfigured)

    useEffect(() => {
        configureGoogleSign();
    }, []);

    function showStack() {
        if (isLoggedIn) {
            return (
                <AdminUserNavigator></AdminUserNavigator>
            )
        } else {
            return (
                <AnomUserNavigator></AnomUserNavigator>
            )
        }
    }
    // Descomentar la function, MainStackNavigator es el test
    return (
        <NavigationContainer ref={navigationRef}>
            {/* {showStack()} */}
            <MainStackNavigator></MainStackNavigator>
        </NavigationContainer>
    );
}