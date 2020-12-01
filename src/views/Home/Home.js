import React, { useState, useEffect, useContext } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

//State
import { UserContext } from '../../context/UserContext'
import { CategoriesContext } from '../../context/CategoriesContext'

//components UI
import LoginButton from '../../components/LoginButton/LoginButton'


export default function Home({ navigation }) {

    //state user
    const { userState } = useContext(UserContext);
    const { isLoggedIn, userInfo } = userState;
    console.log('Usuario logeado: ', isLoggedIn)

    //load categories
    const [loading, setLoading] = useState(true)
    const { categoriesState, getCategories, getDimensions } = useContext(CategoriesContext);
    const { categories, dimensions } = categoriesState;


    useEffect(() => {
        if (loading) {
            getCategories();
            getDimensions();
            setLoading(false);
        }
    }, [categories, dimensions]);



    let userMsgStatus;
    if (isLoggedIn) {
        userMsgStatus = <Text>Usuario logueado: {userInfo.user.name}</Text>;
    } else {
        userMsgStatus = <Text>Inicia sesion</Text>;
    }

    function displayButtonsUser() {
        if (isLoggedIn) {
            return (
                <View>
                    <Button
                        title="Go to Crud"
                        onPress={() => navigation.navigate('CrudItems')}
                    />
                    <Button
                        title="Go to List"
                        onPress={() => navigation.navigate('ListItems')}
                    />
                </View>
            )
        } else {
            return (
                <View>
                    <Button
                        title="Go to List"
                        onPress={() => navigation.navigate('ListItems')}
                    />
                    <Button
                        title="Go to Crud remove future"
                        onPress={() => navigation.navigate('CrudItems')}
                    />
                </View>
            )
        }
    }

    function testEngineHemes() {
        return (
            <View style={styles.engine}>
                {
                    global.HermesInternal == null ? null : (
                        <Text style={styles.footer}>Engine: Hermes</Text>
                    )
                }
            </View>
        )
    }

    return (
        <View>
            {userMsgStatus}
            <LoginButton />
            {displayButtonsUser()}
            {testEngineHemes()}
        </View>
    );
}

const styles = StyleSheet.create({
    engine: {
        position: 'absolute',
        right: 0,
    },
    footer: {
        color: '#000000',
        fontSize: 20,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});