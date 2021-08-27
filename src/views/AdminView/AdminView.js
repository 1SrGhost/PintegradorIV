import React, {useState, useEffect, useContext} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';

//State
import {UserContext} from '../../context/UserContext';
import {CategoriesContext} from '../../context/CategoriesContext';

//components UI
import LoginButton from '../../components/LoginButton/LoginButton';
import CustomBtn from '../../components/Buttons/CustomBtn';
import HomeMenuSearchHeader from '../../components/HomeMenuSearchHeader/HomeMenuSearchHeader';
import {navigate} from '../../navigation/CustomNavigation/RootNavigation';

export default function Home({navigation}) {
  //state user
  const {userState} = useContext(UserContext);
  const {isLoggedIn, userInfo} = userState;
  // console.log('Usuario logeado AdminView: ', isLoggedIn);

  //load categories
  const [loading, setLoading] = useState(true);
  const {categoriesState, getCategories, getDimensions} = useContext(
    CategoriesContext,
  );
  const {categories, dimensions} = categoriesState;

  useEffect(() => {
    if (loading) {
      getCategories();
      getDimensions();
      setLoading(false);
    }
  }, [categories, dimensions]);

  //Si el usuario esta logueado muestra usuario loguado
  let userMsgStatus;
  if (isLoggedIn) {
    userMsgStatus = <Text>Usuario logueado: {userInfo.user.name}</Text>;
  } else {
    userMsgStatus = <Text>Inicia sesion</Text>;
  }

  const rutas = {
    navigate: [
      {route: 'ListItems', title: 'productos'},
      {route: 'Home', title: 'factura actual'},
      {route: 'AddCategoriaModal', title: 'facturas'},
      {route: 'AddCategoriaModal', title: 'cotizar'},
    ],
    gestionate: [
      {route: 'CrudItems', title: 'gestionar productos'},
      {route: 'CrudCategorias', title: 'gestionar categorias'},
      {route: 'AddCategoriaModal', title: 'gestionar dimensiones y calibres'},
      {route: 'AddCategoriaModal', title: 'gestionar cotizaciones'},
    ],
  };

  const RenderBtnNavigate = ({views}) => (
    <View>
      {views.map((item, index) => (
        <CustomBtn
          route={item.route}
          title={item.title}
          nameBtn="HomeBtn"
          key={index}
        />
      ))}
    </View>
  );
  const RenderBtnGestionate = ({views}) => (
    <View>
      {views.map((item, index) => (
        <CustomBtn
          route={item.route}
          title={item.title}
          nameBtn="HomeBtn"
          key={index}
        />
      ))}
    </View>
  );
  return (
    <ScrollView>
      <View>
        <HomeMenuSearchHeader/>
        {/* <LoginButton/> */}
        {/* {userMsgStatus} */}
        {/* <LoginButton /> */}
        <Text style={generalStyles.titleText}>Navegar</Text>
        <RenderBtnNavigate views={rutas.navigate} />
        <Text style={generalStyles.titleText}>Gestionar</Text>
        <RenderBtnGestionate views={rutas.gestionate} />
      </View>
    </ScrollView>
  );
}

const generalStyles = StyleSheet.create({
  titleText: {
    color: '#1D3557',
    fontSize: 50,
    fontWeight: 'bold',
    marginLeft: 5,
    marginVertical: 10,
  },
});
