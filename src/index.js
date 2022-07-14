import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {Provider} from 'react-redux';
import { combineReducers } from 'redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';



 // --- REDUCERS ---
const pizzaList = (state = [], action) => {
    switch (action.type) {
        case 'GET_PIZZA_LIST':
            return action.payload;
        default:
            return state;
    }
}

const pizzaCart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PIZZA':
            return action.payload;
        default:
            return state;
    }
}

const orderForm = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DETAILS':
            return action.payload;
        default:
            return state;
    }
}



 // --- STORE ---
const storeInstance= createStore(
    combineReducers(
        {
            // reducers here
            pizzaList,
            pizzaCart,
            orderForm

        }
    ), 
    applyMiddleware(logger)

);


 // --- PROVIDER ---
ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
document.getElementById('root'));
