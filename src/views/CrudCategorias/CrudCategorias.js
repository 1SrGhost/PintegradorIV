import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, ScrollView, Alert, InteractionManager } from "react-native";

import { ListItem, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CategoriesContext } from '../../context/CategoriesContext'

import CustomButtons from '../../components/Buttons/CustomButtons'
import LoadingScreens from '../../components/LoadingScreens/LoadingScreens'

export default function CrudCategorias() {
  const { categoriesState, deleteCategory, deleteDimension } = useContext(CategoriesContext);
  const { categories, dimensions } = categoriesState;

  const [interactionsComplete, setInteractionsComplete] = useState(false)

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setInteractionsComplete(true)
    });

  }, [])

  const listItemsCat = categories.map((obj) => {
    obj.type = 'cat'
    return (
      <ListItem bottomDivider key={obj.id}>
        <ListItem.Content>
          <ListItem.Title>{obj.name}</ListItem.Title>
        </ListItem.Content>
        <ListItem />
        <CustomButtons
          icon="pencil"
          type="icon"
          iconColor="black"
          route="UpdateCategoriaModal"
          data={obj}
        />
        {/* <CustomButtons
          icon="trash"
          type="icon"
          iconColor="black"
          func={() => alertDeleteCat(obj.id)}
        /> */}
      </ListItem>
    )
  }
  );

  const listItemsDim = dimensions.map((obj) => {
    obj.type = 'dim'
    return (
      <ListItem bottomDivider key={obj.id}>
        <ListItem.Content>
          <ListItem.Title>{obj.name}</ListItem.Title>
        </ListItem.Content>
        <ListItem />
        <CustomButtons
          icon="pencil"
          type="icon"
          iconColor="black"
          route="UpdateCategoriaModal"
          data={obj}
        />
        {/* <CustomButtons
          icon="trash"
          type="icon"
          iconColor="black"
          func={() => alertDeleteDim(obj.id)}
        /> */}
      </ListItem>
    )
  }
  );

  function alertDeleteCat(id) {
    Alert.alert(
      "Esta seguro de eliminar?",
      "Esto eliminara la categoria definitivamente.",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Eliminar", onPress: () => deleteCategory(id) }
      ],
      { cancelable: false }
    );
  }
  function alertDeleteDim(id) {
    Alert.alert(
      "Esta seguro de eliminar?",
      "Esto eliminara la categoria definitivamente.",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Eliminar", onPress: () => deleteDimension(id) }
      ],
      { cancelable: false }
    );
  }


  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={styles.contentButtons}>
        <CustomButtons
          icon="plus"
          route='AddCategoriaModal'
          theme="main"
          name="Crear categoria / Dimension  "
        />
      </View>

      {interactionsComplete ? (
        <ScrollView>
          <Text h3>Categorias</Text>
          {listItemsCat}
          <Text h3>Dimensiones</Text>
          {listItemsDim}
        </ScrollView>
      ) : (
          // <Text>Loading</Text>
          <LoadingScreens/>
        )}
    </View>
  );

}

const styles = StyleSheet.create({
  contentButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

})