import React, { useState, useEffect, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//Creens / views
import Home from '../views/Home/Home';
import CrudItems from '../views/CrudItems/CrudItems';
import CrudCategorias from '../views/CrudCategorias/CrudCategorias';
import ListItems from '../views/ListItems/ListItems';

//modals
import AddCategoriaModal from '../components/modals/CrudCategorias/AddCategoriaModal'
import UpdateCategoriaModal from '../components/modals/CrudCategorias/UpdateCategoriaModal'
import AddImtemModal from '../components/modals/CrudItems/AddImtemModal'
import EditItemModal from '../components/modals/CrudItems/EditItemModal'

//msgTaskStatus
import TaskStatus from '../components/TaskStatus/TaskStatus'


const MainStack = createStackNavigator()
const RootStack  = createStackNavigator()

//Animation
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

function MainStackNavigator() {

  return (
 
      <MainStack.Navigator initialRouteName="Home" 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1d3557',
        },
        headerTintColor: '#fff',
      }}
      >
        <MainStack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <MainStack.Screen name='CrudItems' component={CrudItems}  />
        <MainStack.Screen name='ListItems' component={ListItems} />
        <MainStack.Screen name='CrudCategorias' component={CrudCategorias} options={{
          title: 'Categorias',
        }}/>
      </MainStack.Navigator>

  )
}


function RootStackNavigator() {

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
        <RootStack.Screen name='Main' component={MainStackNavigator} options={{ headerShown: false }} />
        <RootStack.Screen name='AddCategoriaModal' component={AddCategoriaModal}   />
        <RootStack.Screen name='UpdateCategoriaModal' component={UpdateCategoriaModal}   />
        <RootStack.Screen name='AddImtemModal' component={AddImtemModal}   />
        <RootStack.Screen name='EditItemModal' component={EditItemModal}   />
        <RootStack.Screen name='TaskStatus' component={TaskStatus}   />
      </RootStack.Navigator>

  )
}


export default RootStackNavigator