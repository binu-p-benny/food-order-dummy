import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../store/cart-context'
function MealItem(props) {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = () =>{
        cartCtx.addItem({
            id : props.id,
            name  :props.name,
            amount : props.amount,
            amount : props.price,

        })
    }

    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price} >{props.price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler} id={props.id}/>
        </div>
    </li>
}

export default MealItem;