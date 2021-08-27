import React, { useState, useContext, useEffect } from "react";
import {
    Modal,
    StyleSheet,
    View,
    Pressable,
    Text,
    ScrollView,
    Button
} from "react-native";

export default function CustomSelect(props) {

    const [modalVisible, setModalVisible] = useState(false);
    const [dataParent, setDataParent] = useState([]);
    const [itemSelect, setItemSelect] = useState({ name: 'Selecciona una categoria' });
    const [optSet, setOptSet] = useState();

    useEffect(() => {
        setDataParent(props.data)
        props.parentFunction(itemSelect)
    }, [itemSelect])


function cleanOpt(){
    const defaultOpt={ name: 'Selecciona una categoria' }
    setItemSelect(defaultOpt)

}


    var optionsData = dataParent.map((item) => {
        return (
            <Pressable key={item.id}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'white'
                    },
                    styles.wrapperCustom
                ]}
                onPress={() => {
                    setItemSelect(item)
                    setModalVisible(!modalVisible)
                }}
            >
                <Text style={{ fontSize: 20 }}>
                    {item.name}
                </Text>
            </Pressable>
        )
    }
    );

    return (
        <View >
            <Pressable
                style={({ pressed }) => [
                    {
                        color: 'white',
                        backgroundColor: pressed
                            ? 'rgb(106, 127, 168)'
                            : 'white'
                    },
                    styles.wrapperBtn
                ]}
                onPress={() => setModalVisible(true)}
            >
                {({ pressed }) => (
                    pressed ? <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>{itemSelect.name}</Text>
                        :
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>{itemSelect.name}</Text>
                )}
            </Pressable>
            <View style={styles.centeredViewModal}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredViewModal}>
                        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                            <View style={styles.modalView}>
                                {optionsData}
                            </View>                            
                        </ScrollView>
                    </View>
                </Modal>
                    {/* <Button onPress={() => cleanOpt()} title='  Xx  ' /> */}
            </View>
        </View>
    );
}





const styles = StyleSheet.create({
    wrapperBtn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 6,
        margin: 10,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomWidth: 1
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },
    centeredViewModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
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
        marginBottom: 15,
        textAlign: "center"
    }
});