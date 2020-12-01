import React, { createContext, useReducer, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import * as RootNavigation from '../navigation/CustomNavigation/RootNavigation';

const refDimensions = firestore().collection('dimensions');
const refCat = firestore().collection('categories');

// actions

const navigateMsgStatus = (status, msg) => {
    RootNavigation.navigate('TaskStatus',
        {
            stateTask: status,
            msg
        })
}

const getCategories = (dispatch) => async () => {
    return refCat.onSnapshot(querySnapshot => {
        const list = [];
        querySnapshot.forEach(doc => {
            const { name } = doc.data();
            list.push({
                id: doc.id,
                name
            });
        });
        dispatch({
            type: 'getCategories',
            payload: list
        });
    });
}

const getDimensions = (dispatch) => async () => {
    return refDimensions.onSnapshot(querySnapshot => {
        const list = [];
        querySnapshot.forEach(doc => {
            const { name } = doc.data();
            list.push({
                id: doc.id,
                name
            });
        });
        dispatch({
            type: 'getDimensions',
            payload: list
        });
    });
}

const addCategory = (dispatch) => async (data) => {
    await refCat.add({
        name: data
    });
    navigateMsgStatus(true, 'Categoria agregada!')
    dispatch({
        type: 'addCategory',
        payload: true
    });
}

const addDimension = (dispatch) => async (data) => {
    await refDimensions.add({
        name: data
    });
    navigateMsgStatus(true, 'Dimension agregada!')
    dispatch({
        type: 'addDimension',
        payload: true
    });
}

const deleteCategory = (dispatch) => async (data) => {
    await refCat.doc(data).delete()
    navigateMsgStatus(true, 'Categoria eliminada!')
    dispatch({
        type: 'deleteCategory',
        payload: true
    });
}

const deleteDimension = (dispatch) => async (data) => {
    await refDimensions.doc(data).delete()
    navigateMsgStatus(true, 'Dimension eliminada!')
    dispatch({
        type: 'deleteDimension',
        payload: true
    });
}

const updateCategory = (dispatch) => async (data) => {
    await refCat.doc(data.id).update({
        name: data.newName
    })
    navigateMsgStatus(true, 'Categoria actualizada!')
    dispatch({
        type: 'updateCategory',
        payload: true
    });
}

const updateDimension = (dispatch) => async (data) => {
    await refDimensions.doc(data.id).update({
        name: data.newName
    })
    navigateMsgStatus(true, 'Dimension actualizada!')
    dispatch({
        type: 'updateDimension',
        payload: true
    });
}


// reducers to handle Dispatched Actions
const categoriesReducer = (state, action) => {
    switch (action.type) {
        case 'getCategories':
            return {
                ...state,
                categories: action.payload,
            };
        case 'addCategory':
            return {
                ...state,
                addCatState: action.payload,
            };
        case 'deleteCategory':
            return {
                ...state,
                daleteCatState: action.payload,
            };
        case 'updateCategory':
            return {
                ...state,
                updateCatState: action.payload,
            };
        case 'getDimensions':
            return {
                ...state,
                dimensions: action.payload,
            };
        case 'addDimension':
            return {
                ...state,
                addDimState: action.payload,
            };
        case 'deleteDimension':
            return {
                ...state,
                daleteDimState: action.payload,
            };
        case 'updateDimension':
            return {
                ...state,
                updateDimState: action.payload,
            };
        default:
            return state;
    }
};

// Map Actions, State and Reducer for Consumer Components
const CreateCategoriesContext = (reducer, actions, initialState) => {
    const CategoriesContext = createContext();
    const CategoriesProvider = ({ children }) => {
        const [categoriesState, dispatch] = useReducer(reducer, initialState);
        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }
        return (
            <CategoriesContext.Provider value={{ categoriesState, ...boundActions }}>
                {children}
            </CategoriesContext.Provider>
        );
    };
    return { CategoriesContext, CategoriesProvider };
};

export const { CategoriesProvider, CategoriesContext } = CreateCategoriesContext(
    categoriesReducer,
    {
        getCategories,
        addCategory,
        deleteCategory,
        updateCategory,
        getDimensions,
        addDimension,
        deleteDimension,
        updateDimension
    },
    {
        categories: [{ id: 0, name: 'Dafault Array Categories' }],
        dimensions: [{ id: 0, name: 'Dafault Array Dimensions' }],
    }
);