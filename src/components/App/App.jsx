import React from "react";
import axios from "axios";
import "./App.css";

//components
import PizzaCheckout from "../PizzaCheckout/PizzaCheckout";
import PizzaForm from "../PizzaForm/PizzaForm";
import PizzaList from "../PizzaList/PizzaList";
import { Route, HashRouter as Router, Link } from "react-router-dom";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    console.log('this should be working')
  }, [])

  return (
    <Router>
      <div className="App">
      <Route path="/">
       <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
      </Route>
        <Route path="/api/order">
          < PizzaForm />
        </Route>
        <img src="images/pizza_photo.png" />
        <p>Pizza is great.</p>
      </div>
    </Router>
  );
}

export default App;
