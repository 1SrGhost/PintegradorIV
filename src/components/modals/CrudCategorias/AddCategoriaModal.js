import React, { useState, useContext } from "react";
import {
  Modal,
  StyleSheet,
  View,
  Pressable
} from "react-native";
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ThemeContext } from 'react-native-elements';
import { CategoriesContext } from '../../../context/CategoriesContext'





export default function AddCategoriaModal({ navigation }) {

  const [textInput, setTextInput] = useState('');
  const [dissabledBtn, setDissabledBtn] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { addCategory, addDimension } = useContext(CategoriesContext);


  function addItem() {
    //true = dim
    //false = cat
    if (dissabledBtn == false) addCategory(textInput)
    if (dissabledBtn == true) addDimension(textInput)
    setTextInput('')
    navigation.goBack()
  }

  const tittleBtn = () => {
    if (dissabledBtn == false) return 'Categoria'
    if (dissabledBtn == true) return 'Dimension'
  }

  return (

    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText} h3>Agregar categoria / dimension</Text>

            <View style={styles.contentButtonsType}>
              <Button buttonStyle={{ backgroundColor: theme.colors.btnAction }} onPress={() => setDissabledBtn(!dissabledBtn)} title={tittleBtn()} />
            </View>


            <Input
              placeholder="Nombre"
              leftIcon={{ type: 'font-awesome', name: 'list-alt' }}
              onChangeText={value => setTextInput(value)}
            />


            <View style={styles.contentButtons}>
              <Button buttonStyle={{ backgroundColor: theme.colors.btnClose }}
                onPress={() => navigation.goBack()} title="Cerrar" />

              <Button buttonStyle={{ backgroundColor: theme.colors.btnAction }} onPress={addItem} title="Agregar" />
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
  contentButtonsType: {
    flexDirection: 'row',
    justifyContent: 'center',
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