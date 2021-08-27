import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Text } from 'react-native-elements';

export default function LoadingScreens() {
    return (
        <View style={[styles.centeredView]}>
            <Text h2 style={[styles.textStyle]}>Cargando datos...</Text>
            <ActivityIndicator style={[styles.activityIndicator]} size="large" color="#1d3557" />
        </View>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      activityIndicator:{
          margin: 5,
        transform: [{scale: 2}]
      },
      textStyle:{
          margin:5
      }
});
