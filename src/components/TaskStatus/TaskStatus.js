import React, { useState, useContext, useEffect } from "react";
import {
  Modal,
  StyleSheet,
  View,
  Image,
  Text
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TaskStatus({ route, navigation }) {

  const [modalVisible, setModalVisible] = useState(true)
  const [taskState, setTaskState] = useState(false)
  const { stateTask, msg } = route.params;

  useEffect(() => {
    setModalVisible(true)
    setTaskState(stateTask)
    if (modalVisible) {
      setTimeout(() => {
        setModalVisible(false)
        navigation.goBack()
      }, 1500)
    }
  }, []);



  const msgError = <View style={styles.modalView}>
    <Image style={styles.tinyLogo} source={require('../../assets/img/error-2.gif')} />
    <Text style={styles.modalText}>Error!</Text>
    {msg &&
      <Text style={styles.modalText}>{msg}</Text>
    }
  </View>

  const msgSuccess = <View style={styles.modalView}>
    <Image style={styles.tinyLogo} source={require('../../assets/img/succes-3.gif')} />
    <Text style={styles.modalText}>Exito!</Text>
    {msg &&
      <Text style={styles.modalText}>{msg}</Text>
    }
  </View>

  return (
    <View style={styles.centeredView}>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType={'fade'}
      >
        <View style={styles.centeredView}>
          {taskState === true ? (
            msgSuccess
          ) : (
              msgError
            )}
        </View>
      </Modal>
    </View>
  );

}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
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
    marginTop: 15,
    textAlign: "center",
    fontWeight: "bold",
  }
});