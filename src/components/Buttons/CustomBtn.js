import React, { useState, useContext } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

// import {Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ThemeContext } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function CustomBtn(props) {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  //thema global
  const actualTheme = 'light';
  //colores de la configuraicon global
  // const colors = theme.colors;
  var colors;
  if (actualTheme == 'light') {
    colors = theme.colorsLightTheme;
  }

  //componente requirido
  const btnType = 'HomeBtnCard';

  //data recibida en las props
  const iconName = props.icon;
  const routeName = props.route;
  const actionFunc = props.func;
  const btnTitle = props.title;
  const buttonType =
    props.type == 'icon' ? 'clear' : props.type == 'out' ? 'outline' : 'solid';
  const iconColor = props.iconColor == null ? 'white' : props.iconColor;
  const dataProps = props.data;
  const themeButton = props.theme;
  const nameBtn = props.nameBtn;

  //hoja de estilos del componente
  const StylesBtnHome = StyleSheet.create({
    btnContainer: {
      backgroundColor: colors.mainBtnBgColor,
      margin: 2,
      marginHorizontal: 10,
      padding: 20,
      borderRadius: 5,
    },
    btnText: {
      color: colors.mainTextColor,
      fontSize: 20,
      textTransform: 'uppercase',
    },
  });


  const btnNavigate = () => {
    if (dataProps) return navigation.navigate(routeName, dataProps)
    else if (routeName) return navigation.navigate(routeName)
    else {
      return actionFunc()
    }
    // if (routeName) return navigation.navigate(routeName)
    // else {
    //     return actionFunc()
    // }
  }

  return (
    <TouchableOpacity
      style={StylesBtnHome.btnContainer}
      onPress={btnNavigate}
    >
      <Text style={StylesBtnHome.btnText}>{btnTitle}</Text>
    </TouchableOpacity>
  );
}
