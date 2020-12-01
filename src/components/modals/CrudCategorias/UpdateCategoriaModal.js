import React, { useState, useContext, useEffect } from "react";
import {
    Modal,
    StyleSheet,
    View
} from "react-native";
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ThemeContext } from 'react-native-elements';
import { CategoriesContext } from '../../../context/CategoriesContext'

export default function UpdateCategoriaModal({ route, navigation }) {

    const [dataCategory, setDataCategory] = useState({ id: '', name: '' });
    const { theme } = useContext(ThemeContext);
    const { name, id, type } = route.params;

    const { updateCategory,updateDimension } = useContext(CategoriesContext);

    useEffect(() => {
        setDataCategory({name: name})
    }, []);

    function update() {
        const newName = dataCategory.name
        if(type == 'cat') updateCategory({ newName, id })
        if(type == 'dim') updateDimension({ newName, id })
        
        navigation.goBack()
    }

    return (

        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={true}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText} h3>Modificar categoria</Text>
                        <Input
                            label="Nombre actual"
                            placeholder={name}
                            disabled={true}
                            leftIcon={{ type: 'font-awesome', name: 'list-alt' }} />
                        <Input
                            label="Nombre nuevo"
                            placeholder="Nombre"
                            value={dataCategory.name}
                            leftIcon={{ type: 'font-awesome', name: 'list-alt' }}
                            onChangeText={value => setDataCategory({ name: value })} />
                        <View style={styles.contentButtons}>
                            <Button buttonStyle={{ backgroundColor: theme.colors.btnClose }}
                                onPress={() => navigation.goBack()} title="Cerrar" />
                            <Button buttonStyle={{ backgroundColor: theme.colors.btnAction }} onPress={() => update()} title="Guardar" />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}



const styles = StyleSheet.create({
    contentButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",

    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});