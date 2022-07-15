import axios from "axios";
import { useState } from "react";
import {useDispatch} from "react-redux";

function PizzaForm() {
    const [customer_name, setName] = useState('');
    const [street_address, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('');


    // TODO bring states the price and pizza

    const dispatch = useDispatch();

     // handle the state of radio button
    const handlePickRadio = () => {
        console.log('in handlePickRadio');

        if (type === 'pickup'){
          setType('');
        }
        // TODO: handle state of type
        setType('pickup')

    }


    // handle the state of radio button
    const handleDelRadio = (event) => {
        console.log('in handleRadio')

        if (type === 'delivery'){
          setType('');
        }
        // TODO: handle state of type
        setType('delivery')

    }

    const handleSubmit = (event) => {
        // prevent reload
        event.preventDefault();

        console.log('in handleSubmit')
        console.log(customer_name, street_address, city, zip, type)
        axios.post('/api/order', {customer_name, street_address, city, zip, type})
        .then((response) => {
          console.log(response)
            dispatch({
                type: 'ADD_DETAILS',
                // data: {name, streetAddress, city, zip, type, total, pizzas}
                payload: {customer_name, street_address, city, zip, type}
            })
        })
        .catch((error) => {
            console.log('error in POST /api/order', error);
        })

    }
  
    return (

    <>
      <h2>Customer Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input 
          placeholder="name"
          value={customer_name}
          onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          <input 
          placeholder="Street Address"
          value={street_address}
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
            <input type="radio" onChange={handlePickRadio} name = "deliveryOption" checked={type === "pickup"} value="pickup"/>
            Pickup
        </label>
        <label>
            <input type="radio" onChange={handleDelRadio} name = "deliveryOption" checked={type === "delivery"} value="delivery"/>
            Delivery
        </label>
        <button type="submit">NEXT</button>
      </form>
    </>
  );
}

export default PizzaForm;
