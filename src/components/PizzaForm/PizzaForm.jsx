import axios from "axios";
import { useState } from "react";
import {useDispatch} from "react-redux";

function PizzaForm() {
    const [name, setName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('');

    // TODO bring states the price and pizza

    const dispatch = useDispatch();

     // handle the state of radio button
    const handlePickRadio = () => {
        console.log('in handlePickRadio');

        // TODO: handle state of type
        setType(value);
    }


    // handle the state of radio button
    const handleDelRadio = (event) => {
        // prevent reload
        event.preventDefault();

        console.log('in handleRadio')

        // TODO: handle state of type
        setType(value);
    }

    const handleSubmit = (event) => {
        // prevent reload
        event.preventDefault();

        console.log('in handleSubmit')
        
        axios.post('/api/order', {name, streetAddress, city, zip, type})
        .then((reponse) => {
            dispatch({
                type: 'ADD_DETAILS',
                // data: {name, streetAddress, city, zip, type, total, pizzas}
                data: {name, streetAddress, city, zip, type}
            })
        })
        .catch((error) => {
            console.log('error in POST /api/order', error);
        })

    }
  
    return (

    <>
      <h2>Customer Information</h2>
      <form>
        <label>
          <input 
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          <input 
          placeholder="Street Address"
          value={streetAddress}
          onChange={(event) => setStreetAddress(event.target.value)}
          />
        </label>
        <label>
          <input 
          placeholder="City"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          />
        </label>
        <label>
          <input 
          placeholder="Zip"
          value={zip}
          onChange={(event) => setZip(event.target.value)}
          />
        </label>
        <label>
            <button type="radio" onClick={handlePickRadio} value="pickup"></button>
            Pickup
        </label>
        <label>
            <button type="radio" onClick={handleDelRadio} value="delivery"></button>
            Delivery
        </label>
        <button type="submit" onClick={handleSubmit}>NEXT</button>
      </form>
    </>
  );
}

export default PizzaForm;
