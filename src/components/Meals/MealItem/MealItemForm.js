import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {

    const [amountIsValid,setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
  const enteredAmountNumber = +enteredAmount;
    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 ){
        return;
        setAmountIsValid(false);
    }else{
        setAmountIsValid(true);
    }

    props.onAddToCart(enteredAmountNumber);
};

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid ? 'entered amount ius not valid' : ''}
    </form>
  );
}

export default MealItemForm;
