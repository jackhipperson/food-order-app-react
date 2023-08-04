import MealItemForm from "./MealItemForm";

const MealItem = (props) => {

    const price = `£${props.price.toFixed(2)}`

  return (
    <li className="flex justify-between items-center m-4 pb-4 border-b border-solid border-[#ccc]">
      <div>
        <h3>{props.name}</h3>
        <div className="italic">{props.description}</div>
        <div className="mt-1 font-bold text-[#ad5502] text-xl">{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
