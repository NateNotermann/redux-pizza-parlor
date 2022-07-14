import { useDispatch, useSelector } from 'react-redux';



function PizzaList() {

const pizzaList = useSelector(store => store.pizzaList);


    return(
        <div>
            {pizzaList.map((pizza)=>{
                return(
                    <div key={pizza.id} >
                    <img src={pizza.image_path}/>
                    <h4>{pizza.name}</h4>
                    <p>{pizza.description}</p>
                    <h5>${pizza.price}</h5>
                    <button>Add</button>
                    </div>
                )
            })}



        </div>

    )
}

export default PizzaList;