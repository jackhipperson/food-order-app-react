
const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="flex justify-between items-center border-b-2 border-solid border-[#8a2b06] py-0 my-0 px-4 mx-4">
      <div className="flex flex-col">
        <h2 className='mx-0 mr-2 ml-0 text-[#363636]'>{props.name}</h2>
        <div className='w-40 flex justify-between items-center'>
          <span className='font-bold text-[#8z2b06]'>{price}</span>
          <span className='font-bold border border-solid border-[#ccc] rounded-md text-[#363636]'>x {props.amount}</span>
        </div>
      </div>
      <div className='flex md:flex-row flex-col'>
        <button className='font-bold text-xl text-[#8a2b06] w-12 text-center rounded-md bg-transparent cursor-pointer ml-4 m-1 hover:bg-[#8a2b06] hover:text-white active:bg-[#8a2b06] active:text-white' onClick={props.onRemove}>−</button>
        <button className='font-bold text-xl text-[#8a2b06] w-12 text-center rounded-md bg-transparent cursor-pointer ml-4 m-1 hover:bg-[#8a2b06] hover:text-white active:bg-[#8a2b06] active:text-white' onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
