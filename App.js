/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState, useContext } from 'react';
import SplashScreen from 'react-native-splash-screen'
import {
  StatusBar
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

//State user login
import { UserProvider } from './src/context/UserContext'

import { CategoriesProvider } from './src/context/CategoriesContext'

//Navigator Index conditional User
import IndexApp from './src/views/IndexApp/IndexApp'

//themeConf - State
import { ThemeProvider } from 'react-native-elements';
import { ThemeConf } from './src/utils/ThemeConf'


export default function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <ThemeProvider theme={ThemeConf}>
        <UserProvider>
          <CategoriesProvider>
            <StatusBar barStyle="dark-content" />
            <IndexApp />
          </CategoriesProvider>
        </UserProvider>
      </ThemeProvider>
    </>
  );
};



