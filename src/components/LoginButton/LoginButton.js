import React, { useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Button, Pressable } from 'react-native'

import { UserContext } from '../../context/UserContext'

import {
    GoogleSigninButton,
} from '@react-native-community/google-signin';


export default function LoginButton() {

    const { userState, signIn, signOut } = useContext(UserContext);
    const { isLoggedIn, userInfo } = userState;
    // console.log('Estado del usuario: ', isLoggedIn)
    // console.log('Info del usuario: ', userInfo)

    function buttonsValidation() {
        if (isLoggedIn) {
            return (
                <View>
                    {/* <Button onPress={signOut} title='Sign out' color='#332211' /> */}
                    <Pressable style={styles.logoutBtnContainer} onPress={signOut}>
                        <Text style={styles.logoutBtnText}>Cerrar sesion</Text>
                    </Pressable>
                </View>
            )
        } else {
            return (
                <View>
                    <GoogleSigninButton
                        style={styles.signInButton}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={signIn}
                    />
                    {/* <Pressable style={styles.logoutBtnContainer} onPress={signOut}>
                        <Text style={styles.logoutBtnText}>Cerrar sesion</Text>
                    </Pressable> */}
                </View>

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
        width: '100%',
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
    },
    logoutBtnContainer: {
        width: '100%',
        display: 'flex',
        alignSelf: 'center'
    },

    logoutBtnText: {
        color: '#000E2E',
        textTransform: 'uppercase',
        fontSize: 30,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        paddingBottom: 8,
        textAlign: 'center',
        borderBottomColor:'#000E2E',




    }
});