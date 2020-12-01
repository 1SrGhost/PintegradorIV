import React from 'react'
import { View, StyleSheet, FlatList, ScrollView } from 'react-native'

import { Button, ListItem, Text, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButtons from '../../components/Buttons/CustomButtons'

export default function CrudItems({ navigation }) {


  return (
    <View>
      {/* <SearchBar
        placeholder="Type Here..."
        platform="android"
        cancelIcon={null}
      /> */}

      <View style={styles.contentButtons}>
        <CustomButtons
          icon="plus"
          route='AddImtemModal'
          theme="main"
          name="Agregar producto  "
        />
        <CustomButtons
          icon="eye"
          route='CrudCategorias'
          theme="main"
          name="Categorias  "
        />
      </View>

      {/* Renderizar lista de productos */}

      <ScrollView>
        <ListItem bottomDivider>

          <ListItem.Content>
            <ListItem.Title>Nombre producto nombre muy largo y extensamente ancho</ListItem.Title>
            <ListItem.Subtitle>000,000,000,000</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem />
          <Button
            icon={
              <Icon
                name="pencil"
                size={15}
              />
            }
            type="clear"
            onPress={() => navigation.navigate('EditItemModal')}
          />
          <Button
            icon={
              <Icon
                name="trash"
                size={15}
              />
            }
            type="clear"
            onPress={() => navigation.navigate('ListItems')}
          />
        </ListItem>

        {/* <ListItem bottomDivider>
   
          <ListItem.Content>
            <ListItem.Title>Nombre producto</ListItem.Title>
            <ListItem.Subtitle>Precio</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem />
          <Icon name='arrow-down' />
        </ListItem>

        <ListItem bottomDivider>
   
          <ListItem.Content>
            <ListItem.Title>Nombre producto</ListItem.Title>
            <ListItem.Subtitle>Precio</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem />
          <Icon name='arrow-down' />
        </ListItem>

        <ListItem bottomDivider>
   
          <ListItem.Content>
            <ListItem.Title>Tubo redondo 3/4 * 1/2</ListItem.Title>
            <ListItem.Subtitle>56,000</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem />
          <Icon name='arrow-down' />
        </ListItem>

        <ListItem bottomDivider>
   
          <ListItem.Content>
            <ListItem.Title>Tubo redondo 3/4 * 1/2</ListItem.Title>
            <ListItem.Subtitle>56,000</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem />
          <Icon name='arrow-down' />
        </ListItem>

        <ListItem bottomDivider>
   
          <ListItem.Content>
            <ListItem.Title>Tubo redondo 3/4 * 1/2</ListItem.Title>
            <ListItem.Subtitle>56,000</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem />
          <Icon name='arrow-down' />
        </ListItem>

        <ListItem bottomDivider>
   
          <ListItem.Content>
            <ListItem.Title>Tubo redondo 3/4 * 1/2</ListItem.Title>
            <ListItem.Subtitle>56,000</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem />
          <Icon name='arrow-down' />
        </ListItem>

        <ListItem bottomDivider>
   
          <ListItem.Content>
            <ListItem.Title>Tubo redondo 3/4 * 1/2</ListItem.Title>
            <ListItem.Subtitle>56,000</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem />
          <Icon name='arrow-down' />
        </ListItem>

        <ListItem bottomDivider>
   
          <ListItem.Content>
            <ListItem.Title>Tubo redondo 3/4 * 1/2</ListItem.Title>
            <ListItem.Subtitle>56,000</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem />
          <Icon name='arrow-down' />
        </ListItem>

        <ListItem bottomDivider>
   
          <ListItem.Content>
            <ListItem.Title>Tubo redondo 3/4 * 1/2</ListItem.Title>
            <ListItem.Subtitle>56,000</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem />
          <Icon name='arrow-down' />
        </ListItem>

        <ListItem bottomDivider>
   
          <ListItem.Content>
            <ListItem.Title>Tubo redondo 3/4 * 1/2</ListItem.Title>
            <ListItem.Subtitle>56,000</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem />
          <Icon name='arrow-down' />
        </ListItem>

        <ListItem bottomDivider>
   
          <ListItem.Content>
            <ListItem.Title>Tubo redondo 3/4 * 1/2</ListItem.Title>
            <ListItem.Subtitle>56,000</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem />
          <Icon name='arrow-down' />
        </ListItem>

        <ListItem bottomDivider>
   
          <ListItem.Content>
            <ListItem.Title>Tubo redondo 3/4 * 1/2</ListItem.Title>
            <ListItem.Subtitle>56,000</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem />
          <Icon name='arrow-down' />
        </ListItem>

        <ListItem bottomDivider>
   
          <ListItem.Content>
            <ListItem.Title>Tubo redondo 3/4 * 1/2</ListItem.Title>
            <ListItem.Subtitle>56,000</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem />
          <Icon name='arrow-down' />
        </ListItem> */}

      </ScrollView>


    </View>
  )
}

const styles = StyleSheet.create({
  contentButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

})
