import { useRef, useState } from "react";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true)
  
  const submitHandler = event => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
      setAmountIsValid(false)
      return;
    }

    props.onAddToCart(enteredAmountNum)

  }

  return (
    <form onSubmit={submitHandler} className="text-right">
      <Input ref={amountInputRef} label='Amount' input={{
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
        autoComplete: 'off'
      }} />
      <button className="cursor-pointer  bg-[#8a2b06] border border-solid border-[#8a2b06] text-white py-1 px-8 rounded-xl font-bold hover:bg-[#641e03] hover:border-[#641e03] active:bg-[#641e03] active:border-[#641e03]">
        + Add
      </button>
      { !amountIsValid && <p>Please enter a valid amount! (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
