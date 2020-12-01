import React, { useState, useContext } from "react";
import { View } from 'react-native'

import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ThemeContext } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'


export default function CustomButtons(props) {
    const { theme } = useContext(ThemeContext);
    const navigation = useNavigation()

    const themeButtons = {
        btnClose: theme.colors.btnClose,
        btnMain: theme.colors.btnMain,
        btnAction: theme.colors.btnAction
    }

    const iconName = props.icon
    const routeName = props.route
    const actionFunc = props.func
    const buttonName = props.name
    const buttonType = props.type == 'icon' ? 'clear' : props.type == 'out' ? 'outline' : 'solid'
    const iconColor = props.iconColor == null ? 'white' : props.iconColor
    const dataProps = props.data
    const buttonTheme = () => {
        const theme = props.theme
        if (theme == 'main') return themeButtons.btnMain
        if (theme == 'close') return themeButtons.btnClose
        if (theme == 'sec') return themeButtons.btnAction
    }
    const btnActionHandle = () => {
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
        <Button
            title={buttonName}
            icon={
                <Icon
                    name={iconName}
                    color={iconColor}
                    size={15}
                />
            }
            buttonStyle={{ backgroundColor: buttonTheme() }}
            onPress={btnActionHandle}
            type={buttonType}
        />
    );
}
