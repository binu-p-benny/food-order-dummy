import { useContext } from "react";
import CartContext from "../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
function Cart(props) {
  const cartCxt = useContext(CartContext);

  const totalAmount = cartCxt.totalAmount.toFixed(2);

  const cartItemAddHandler  = () => {
  }
  const cartItemRemoveHandler  = () => {
  }
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {cartCxt.items.map((item) => (
        <CartItem 
        key={item.id} 
        name={item.name} 
        amount={item.amount} 
        price={item.price}
        onRemove = {cartItemRemoveHandler.bind(null, item.id)}
        onAdd = {cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onHideCart}>
      {cartitems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["button--alt"]}>
          Close
        </button>
        <button onClick={props.onHideCart} className={classes["button"]}>
          Order
        </button>
      </div>
    </Modal>
  );
}
export default Cart;
