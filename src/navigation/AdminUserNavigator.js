import React, { useState, useEffect, useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//Creens / views
import Home from '../views/Home/Home';
import CrudItems from '../views/CrudItems/CrudItems';
import ListItems from '../views/ListItems/ListItems';

const Stack = createStackNavigator()

//Animation
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

function AdminUserNavigator() {
  return (

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false, cardStyleInterpolator: forFade }} />
        <Stack.Screen name='CrudItems' component={CrudItems} options={{ headerShown: false, cardStyleInterpolator: forFade }} />
        <Stack.Screen name='ListItems' component={ListItems} options={{ headerShown: false, cardStyleInterpolator: forFade }} /> 
      </Stack.Navigator>
  
  )
}

export default AdminUserNavigator