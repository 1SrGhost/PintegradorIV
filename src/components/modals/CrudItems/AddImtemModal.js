import React, { useState, useContext } from "react";
import {
  Modal,
  StyleSheet,
  View,
  TextInput,
  ScrollView
} from "react-native";
import { Button, Input, Text, ListItem, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import { ThemeContext } from 'react-native-elements';


export default function AddImtemModal({ navigation }) {
  const [textInput, setTextInput] = useState('');
  const { theme } = useContext(ThemeContext);

  const [selectOption, setSelectOption] = useState('Selecciona una opcion')

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (

    <View style={styles.centeredView}>
      <Modal presentationStyle={'fullScreen'} animationType={'slide'}>
        <View style={styles.centeredView}>

          <ScrollView>

            <View style={styles.contentButtons}>
              <Button buttonStyle={{ backgroundColor: theme.colors.btnClose }}
                onPress={() => navigation.goBack()} title="Cerrar" />
              <Button buttonStyle={{ backgroundColor: theme.colors.btnMain }} onPress={() => console.log('add cat')} title="Agregar" />
            </View>

            <Text style={styles.modalText} h3>Agregar Producto</Text>

            <Input
              placeholder="Nombre"
              leftIcon={{ type: 'font-awesome', name: 'list-alt' }}
              onChangeText={value => setTextInput(value)}
            />

            <Input
              placeholder="Precio"
              leftIcon={{ type: 'font-awesome', name: 'list-alt' }}
              onChangeText={value => setTextInput(value)}
            />

            <Text style={{ fontSize: 20 }}>Categoria</Text>

            <ListItem>
              <ListItem.Content style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Icon
                  reverse
                  name='list-alt'
                  color='#000000'
                  size={30}
                  containerStyle={{
                    margin: 20
                  }}
                />
                <Picker
                  selectedValue={selectOption}
                  style={{ width: 200 }}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectOption(itemValue)
                  }>
                  <Picker.Item label={selectOption} value="Hola" />
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker>
              </ListItem.Content>
            </ListItem>

            <Text style={{ fontSize: 20 }}>Medidas</Text>

            <ListItem>
              <ListItem.Content>
                <Input
                  placeholder="Longitud (MTS/CMS)"
                  leftIcon={{ type: 'font-awesome', name: 'list-alt' }}
                  onChangeText={value => setTextInput(value)}
                  keyboardType={'number-pad'}
                  maxLength={3}
                  textAlign={'center'}
                />
              </ListItem.Content>
              <Button buttonStyle={{ backgroundColor: theme.colors.btnAction }}
                onPress={() => navigation.goBack()} title="Mts" />
            </ListItem>

            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TextInput placeholder="Longitud (MTS/CMS)"
                    keyboardType={'number-pad'}
                    maxLength={3}
                    style={{
                      color: '#333',
                      fontSize: 16,
                      lineHeight: 23,
                      borderBottomColor: '#333',
                      borderBottomWidth: 1,
                      fontFamily: 'System',
                    }} />
                </View>
                <View>
                  <Text h3 style={{ margin: 10 }}>X</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TextInput placeholder="Longitud (MTS/CMS)"
                    keyboardType={'number-pad'}
                    maxLength={3}
                    style={{
                      color: '#333',
                      fontSize: 16,
                      lineHeight: 23,
                      borderBottomColor: '#333',
                      borderBottomWidth: 1,
                      fontFamily: 'System',
                    }} />
                </View>
              </View>
              <Button
                containerStyle={{ margin: 20 }}
                buttonStyle={{ backgroundColor: theme.colors.btnAction }}
                onPress={() => navigation.goBack()} title="Mts" />
            </View>

          </ScrollView>

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
    padding: 30
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    // borderRadius: 20,
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
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});