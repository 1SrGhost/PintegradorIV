import React, { useState, useEffect, useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//Creens / views
import Home from '../views/Home/Home';
import ListItems from '../views/ListItems/ListItems';
import CrudItems from '../views/CrudItems/CrudItems';
const Stack = createStackNavigator()

//Animation
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

function AnomUserNavigator() {

  return (
// Remover la ruta de crud, esta puesta por cuestiones de rapidez
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false, cardStyleInterpolator: forFade }} />
      <Stack.Screen name='ListItems' component={ListItems} options={{ headerShown: false, cardStyleInterpolator: forFade }} />
    </Stack.Navigator>

  )
}

export default AnomUserNavigator