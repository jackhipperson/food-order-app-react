import Input from "../UI/Input";

const MealItemForm = (props) => {
  return (
    <form className="text-right">
      <Input label='Amount' input={{
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
        autocomplete: 'off'
      }} />
      <button className="cursor-pointer  bg-[#8a2b06] border border-solid border-[#8a2b06] text-white py-1 px-8 rounded-xl font-bold hover:bg-[#641e03] hover:border-[#641e03] active:bg-[#641e03] active:border-[#641e03]">
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
