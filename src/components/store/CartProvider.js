import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartSate = {
  totalAmount: 0,
  items: [],
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return {
      totalAmount: updatedTotalAmount,
      items: updatedItems,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartSate
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      item: item,
    });
  };

  const removeItemFromhandler = (id) => {
    dispatchCartAction({
      type: "REMOEVE_ITEM",
      id: id,
    });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromhandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
