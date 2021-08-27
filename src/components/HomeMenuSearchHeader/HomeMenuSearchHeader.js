import React, {useState, useContext} from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {ThemeContext} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

export default function HomeMenuSearchHeader(props) {
  const {theme} = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <View style={stylesHead.bg}>
      <View style={stylesHead.container}>
        <Icon name="search" color="#F5F5F6" size={20} />
        <Text style={stylesHead.text}>Buscar...</Text>
        <TouchableOpacity 
        style={{ textAlign:'right', right:0, position: 'absolute'}}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer('SideBarMenuDrawer'))}
        >
        <Icon  name="bars" color="#F5F5F6" size={30} />
        </TouchableOpacity>

      </View>
    </View>
  );
      }

      // onPress={() => navigation.dispatch(DrawerActions.openDrawer('SideBarMenuDrawer'))}

const stylesHead = StyleSheet.create({
  bg: {
    backgroundColor: '#000E2E',
    margin: 15,
    padding: 20,
    borderRadius: 5,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  text: {
    color: '#F5F5F6',
    fontSize: 25,
    marginHorizontal: 15,
  },
});
