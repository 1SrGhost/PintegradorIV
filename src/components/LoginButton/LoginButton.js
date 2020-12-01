import React, { useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import { UserContext } from '../../context/UserContext'

import {
    GoogleSigninButton,
} from '@react-native-community/google-signin';


export default function LoginButton() {

    const { userState, signIn, signOut } = useContext(UserContext);
    const { isLoggedIn, userInfo } = userState;
    console.log('Estado del usuario: ', isLoggedIn)
    console.log('Info del usuario: ', userInfo)

    function buttonsValidation() {
        if (isLoggedIn) {
            return (
                <Button onPress={signOut} title='Sign out' color='#332211' />
            )
        } else {
            return (
                <GoogleSigninButton
                    style={styles.signInButton}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={signIn}
                />
            )
        }
    }

    return (
        <View>
            {buttonsValidation()}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signInButton: {
        width: 200,
        height: 50
    },
    status: {
        marginVertical: 20
    },
    loggedinMessage: {
        fontSize: 20,
        color: 'tomato'
    },
    userInfoContainer: {
        marginVertical: 20
    },
    profileImageContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    profileImage: {
        width: 100,
        height: 100
    },
    displayTitle: {
        fontSize: 22,
        color: '#010101'
    }
});