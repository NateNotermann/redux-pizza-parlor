import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


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

  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);
// ADD TO CART
  const addToCart = (pizza) => {
    console.log('pizza in addToCart', pizza);
    setCartList([...cartList, pizza]);
    console.log('cartList in addToCart', cartList)

    console.log(Number(pizza.price))
    // let priceConvert = Number(pizza.price);
    // console.log('should be a number now:', priceConvert);
    // setTotal = (priceConvert + total).toFixed(2);
    // console.log('Total should now be 2 decimal:', setTotal);
    setTotal(Number(pizza.price) + total)
    // (total).toFixed(2)
    console.log('total', total)
  }

  // ---- USE-EFFECT ----
  useEffect(() => {
    getPizzaList();
  }, [] );


console.log('total', total)
// ---- RETURN ----
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <p>Cart Total: {total}</p>
      
      <PizzaList addToCart={addToCart} cartList={cartList} />

      <footer>
       <p>Made with SOOO much love by;
          Miski, Rachel and Nate
      </p> 
      <div className="TD"> and Tim and Diego where there I guess</div>
      </footer>
    </div>
  );
}

export default App;
