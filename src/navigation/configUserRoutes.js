import React, { useState, useEffect, useContext } from 'react'


import Home from '../views/Home/Home';
import CrudItems from '../views/CrudItems/CrudItems';
import ListItems from '../views/ListItems/ListItems';
import CrudCategorias from '../views/CrudCategorias/CrudCategorias';


import AdminView from '../views/AdminView/AdminView';
import AddCategoriaModal from '../components/modals/CrudCategorias/AddCategoriaModal';
import UpdateCategoriaModal from '../components/modals/CrudCategorias/UpdateCategoriaModal';
import AddImtemModal from '../components/modals/CrudItems/AddImtemModal';
import EditItemModal from '../components/modals/CrudItems/EditItemModal';
import TaskStatus from '../components/TaskStatus/TaskStatus';

Rutas = {
    Admin: {
        views: {
            Home: AdminView,
            CrudCategorias: CrudCategorias,
            CrudItems: CrudItems,
            ListItems: ListItems
        },
        modals: {
            AddCategoriaModal: AddCategoriaModal,
            UpdateCategoriaModal: UpdateCategoriaModal,
            AddImtemModal: AddImtemModal,
            EditItemModal: EditItemModal,
            TaskStatus: TaskStatus,
        },
        // Solo links para no volver a cargar los componentes
        // parametro 1: nombre visible
        // nombre de la screen o ruta
        sidebar: {
            'Inicio': 'Home',
            'Productos': 'ListItems',
            'Gestionar Productos': 'CrudItems',
        }
    },
    User: { // clientes
        views: {
            Home: Home,
            CrudCategorias: CrudCategorias,
        },
        modals: {
            TaskStatus: TaskStatus
        },
        sidebar: {
            'Inicio': 'Home',
            'InicioUser': 'CrudCategorias',

        }
    },
    Anom: {
        views: {
            Home: Home,
            CrudCategorias: CrudCategorias,

        },
        modals: {
            TaskStatus: TaskStatus
        },
        // sidebar: [
        //     'Home', 'CrudCategorias', 'Hola'
        // ],
        sidebar: {
            'Inicio': 'Home',
            'InicioAnom': 'CrudCategorias',
            // 'Productos': 'ListItems',
            // 'Gestionar Productos': 'CrudItems',
        }
    },
}

export default Rutas;