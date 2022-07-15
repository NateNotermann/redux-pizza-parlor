import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';



function PizzaList({addToCart, cartList}) {

const pizzaList = useSelector(store => store.pizzaList);

// const [cartList, setCartList] = useState([]);
console.log('cartList', cartList)

// const addToCart = (pizza) => {
// console.log('pizza in addToCart', pizza);
// setCartList([...cartList, pizza]);
// console.log('cartList in addToCart', cartList)




    return(
        <div>
            {pizzaList.map((pizza)=>{
                return(
                    <div className="pizza" key={pizza.id} >
                    <img src={pizza.image_path}/>
                    <h4>{pizza.name}</h4>
                    <p>{pizza.description}</p>
                    <h5>${pizza.price}</h5>
                    <button key={pizza.id} onClick={(event) => addToCart(pizza)} >Add</button>

                    {/* <button key={pizza.id} onClick={() => setCartList(pizza)}>Add</button> */}

                    </div>
                )
            })}



        </div>

    )
}

export default PizzaList;