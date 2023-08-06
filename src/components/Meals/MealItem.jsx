import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `£${props.price.toFixed(2)}`;

  const addToCardHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className="flex justify-between items-center m-4 pb-4 border-b border-solid border-[#ccc]">
      <div>
        <h3>{props.name}</h3>
        <div className="italic">{props.description}</div>
        <div className="mt-1 font-bold text-[#ad5502] text-xl">{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCardHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
