import React, { useState, useContext, useEffect } from "react";
import {
  Modal,
  StyleSheet,
  View,
  TextInput,
  ScrollView
} from "react-native";
import { Button, Input, Text, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeContext } from 'react-native-elements';
import { CategoriesContext } from '../../../context/CategoriesContext'
import CustomSelect from '../../CustomSelect/CustomSelect'


export default function AddImtemModal({ navigation }) {
  const [textInput, setTextInput] = useState('');
  const { theme } = useContext(ThemeContext);

  const { categoriesState } = useContext(CategoriesContext);
  const { categories, dimensions } = categoriesState;

  //cat Selected
  const [catSelectedOpt, setCatSelectedOpt] = useState({})
  //dim Selected
  const [DimSelectedOpt, setDimSelectedOpt] = useState({})
  const [clearDimOpt, setClearDimOpt] = useState(true)

  //Tuberia
  const [tuberiaSettings, setTuberiaSettings] = useState({
    long: '6',
    measure: 'Mts'
  })



  useEffect(() => {
    console.log('selected ', catSelectedOpt)
    console.log('selected Dim ', DimSelectedOpt)
  }, [catSelectedOpt, DimSelectedOpt])


  //selected cat from child
  function setCatFromChild(data) {
    setCatSelectedOpt(data)
  }
  //selected dim from child
  function setDimFromChild(data) {
    setDimSelectedOpt(data)
    setClearDimOpt(true)
  }
  function clearOptDim() {
    setClearDimOpt(false)
  }

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

            {/* SELECT Categories */}
            <Text style={{ fontSize: 20 }}>Categoria</Text>
            <CustomSelect data={categories} parentFunction={setCatFromChild} />

            <Input
              placeholder="Nombre"
              leftIcon={{ type: 'font-awesome', name: 'list-alt' }}
              onChangeText={value => setTextInput(value)}
            />
            <Input
              placeholder="Precio"
              leftIcon={{ type: 'font-awesome', name: 'list-alt' }}
              onChangeText={value => setTextInput(value)}
              keyboardType={'numeric'}
            />

            {/* SELECT Dim */}
            <Text style={{ fontSize: 20 }}>Dimension</Text>
            <CustomSelect data={dimensions} parentFunction={setDimFromChild} onSelectOpt={DimSelectedOpt} />
            <Button buttonStyle={{ backgroundColor: theme.colors.btnAction }}
              onPress={() => clearOptDim()} title='  X  ' />




            <Text style={{ fontSize: 20 }}>Medidas</Text>
            <ListItem>
              <ListItem.Content>
                <Input
                  placeholder="Longitud (MTS/CMS)"
                  value={tuberiaSettings.long}
                  leftIcon={{ type: 'font-awesome', name: 'list-alt' }}
                  onChangeText={value => setTuberiaSettings({ ...tuberiaSettings, long: value })}
                  keyboardType={'number-pad'}
                  maxLength={3}
                  textAlign={'center'}
                />
              </ListItem.Content>
            </ListItem>
            <View style={styles.contentButtonsItems}>
              <Button buttonStyle={{ backgroundColor: theme.colors.btnAction }}
                onPress={() => {
                  if (tuberiaSettings.measure == 'Mts') { setTuberiaSettings({ ...tuberiaSettings, measure: 'Cms' }) }
                  else { setTuberiaSettings({ ...tuberiaSettings, measure: 'Mts' }) }
                }} title={tuberiaSettings.measure} />
              <Button buttonStyle={{ backgroundColor: theme.colors.btnAction }}
                onPress={() => {
                  if (tuberiaSettings.measure == 'Mts') { setTuberiaSettings({ ...tuberiaSettings, measure: 'Cms' }) }
                  else { setTuberiaSettings({ ...tuberiaSettings, measure: 'Mts' }) }
                }} title='  X  ' />
            </View>

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
  contentButtonsItems: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -30,
    marginBottom: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    padding: 30
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});