import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from '../../context/UserContext';

import SideBarMenuDrawer from '../../navigation/SideBarMenuDrawer';

import { navigationRef } from '../../navigation/CustomNavigation/RootNavigation';

export default function IndexApp() {
  // const { userState, configureGoogleSign } = useContext(UserContext);
  // const { GoogleSignconfigured, isLoggedIn, typeUser } = userState;

  const [loading, setLoading] = useState(true);
  const { userState, configureGoogleSign,setUser } = useContext(UserContext);
  const { isLoggedIn, userInfo, GoogleSignconfigured, typeUser } = userState;
  console.log('Usuario logeado: IndexApp ', isLoggedIn);

  console.log(
    'IndexApp GoogleSignin.configure Estado de iniciacion: ',
    GoogleSignconfigured,
  );

  useEffect(() => {
    if (loading) {
      configureGoogleSign();
      // setUser();
      setLoading(false);
    }
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {/* <SideBarMenuDrawer userType={'admin'} isLoggedIn={isLoggedIn} /> */}
      <SideBarMenuDrawer userType={typeUser} isLoggedIn={isLoggedIn} />
    </NavigationContainer>
  );
}
