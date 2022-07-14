import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';

//components
import PizzaCheckout from '../PizzaCheckout/PizzaCheckout';
import PizzaForm from '../PizzaForm/PizzaForm';
import PizzaList from '../PizzaList/PizzaList';

function App() {


  const pizzaList = useSelector(store => store.pizzaList);
  const dispatch = useDispatch();
  
  // ---- GET PIZZALIST ----
  const getPizzaList = () => {
    axios.get('/api/pizza')
    .then(response => {
      dispatch({ 
        type: 'GET_PIZZA_LIST',
        payload: response.data 
      })
      console.log(response.data)
    })
    .catch((error) => {
      console.log('error in GET', error );
    })
    
  }

  // ---- USE-EFFECT ----
  useEffect(() => {
    getPizzaList();
  }, [] );



// ---- RETURN ----
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      


    </div>
  );
}

export default App;
