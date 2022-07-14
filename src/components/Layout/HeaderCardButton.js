


import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../store/cart-context';
import CartProvider from '../store/cart-context';
import classes from './HeaderCardButton.module.css'

function HeaderCardButton(props) {

    const cartCxt = useContext(CartContext);
    console.log("here");
    const numberOfItems = cartCxt.items.reduce((currentval, item) => {
       return currentval + item.amount;
    }, 0);

    return <button onClick={props.onClick} className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfItems}</span>
    </button>
}

export default HeaderCardButton;