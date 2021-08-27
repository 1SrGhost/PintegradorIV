import React, { useState, useEffect, useContext } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native';
import { DrawerActions, StackActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'
import Rutas from './configUserRoutes';
import LoadingScreens from '../components/LoadingScreens/LoadingScreens';
import { ThemeContext } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginButton from '../components/LoginButton/LoginButton';


function SideBarMenuDrawer(props) {

  //Carga las vistas del rol
  const ViewsStack = createStackNavigator();
  //carga los modales que usaran en el rol
  const RootStack = createStackNavigator();
  //stack principal, menu lataral que envuelve toda la app
  const Drawer = createDrawerNavigator();


  const { theme } = useContext(ThemeContext);
  const [userRoutes, setUserRoutes] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(props.isLoggedIn)
    if (props.isLoggedIn) {
      if (props.userType === 'user') setUserRoutes(Rutas.User)
      if (props.userType === 'admin') setUserRoutes(Rutas.Admin)
    } else {
      setUserRoutes(Rutas.Anom)
    }
  }, [props.isLoggedIn]);



  function viewUser() {
    console.log('hola')
  }



  function CustomDrawerContent(props) {
    const RenderLinks = () => {
      return (
        Object.entries({
          ...(userRoutes.sidebar),
        }).map(([name, route, index]) => (
          <DrawerItem
            labelStyle={styles.drawerLinkText}
            key={route}
            label={name}
            onPress={() => props.navigation.navigate(route)}
          />
        ))
      );
    }

    return (
      <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
        <View style={styles.drawerContainer}>
          <View style={styles.drawerTop}>
            <Text style={styles.drawerTopText}>Menu</Text>
            <Icon style={styles.drawerTopIconClose} name="close" color="#F5F5F6" size={30}
              onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
            />
          </View>
          <RenderLinks />
          {/* <DrawerItem
            labelStyle={styles.drawerLinkText}
            label="Close drawer"
            onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
          />
          <DrawerItem
            labelStyle={styles.drawerLinkText}
            label="Logged"
            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
          /> */}
        </View>

         <View style={{ margin: 10 }}>
            <Text style={styles.nameCorp}>
              Metalicas
            </Text>
            <Text style={styles.nameCorp}>
              Monsalve
            </Text>
          </View> 
          
        <View style={styles.containerBottomItems}>
          <View style={{ margin: 10 }}>
            <LoginButton />
          </View>

          <View>
            <Text style={styles.nameDev}>
              Desarrollado por:
            </Text>
            <Text style={styles.nameDev}>
              Diego Monsalve
            </Text>
          </View>
        </View>
      </DrawerContentScrollView>
    )
  }

  const RoutesViews = () => {
    return (
      <ViewsStack.Navigator initialRouteName="Home">
        {Object.entries({
          ...(userRoutes.views),
        }).map(([name, component, index]) => (
          <ViewsStack.Screen key={name} name={name} component={component} options={name == 'Home' ? { headerShown: false } : { headerShown: true }} />
        ))}
      </ViewsStack.Navigator>
    )
  }

  const RoutesModals = () => {
    return (
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp',
              }),
            },
          }),
        }}
        mode="modal"
      >
        <RootStack.Screen name='Main' component={RoutesViews} options={{ headerShown: false }} />
        {Object.entries({
          ...(userRoutes.modals),
        }).map(([name, component, index]) => (
          <RootStack.Screen key={name} name={name} component={component} />
        ))}
      </RootStack.Navigator>
    )
  }

  return (
    userRoutes
      ?
      <Drawer.Navigator
        drawerPosition='right'
        drawerContent={(props) => <CustomDrawerContent {...props} linksSidebar={userRoutes.sidebar}
        />}>
        <Drawer.Screen name="Inicio" component={RoutesModals} />
      </Drawer.Navigator>
      :
      <LoadingScreens />
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    marginTop: -4,
    height: '50%',
  },
  drawerTop: {
    backgroundColor: '#000E2E',
    padding: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  drawerTopText: {
    color: '#F5F5F6',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'left',
    textTransform: 'uppercase',
    marginLeft: '-15%'
  },
  drawerTopIconClose: {
    marginRight: '-25%'
  },

  drawerLinkText: {
    color: '#000E2E',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 20,
    textAlign: 'center',
  },
  containerBottomItems: {
    justifyContent: 'flex-end',
    margin: 5,
  },
  nameCorp: {
    color: '#000E2E',
    fontSize: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  nameDev: {
    color: '#000E2E',
    fontSize: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }

});

export default SideBarMenuDrawer;
