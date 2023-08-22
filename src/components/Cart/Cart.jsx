import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import Checkout from "../Checkout/Checkout";

const Cart = (props) => {
  const [isOrdering, setIsOrdering] = useState(false);
  const [hasOrdered, setHasOrdered] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `£${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className="list-none m-0 p-0  max-h-80 overflow-y-auto">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const onStartOrderHandler = () => {
    setIsOrdering(true);
  };

  const cartButtons = (
    <div className="text-right">
      <button
        onClick={props.onHideCart}
        className="cursor-pointer border border-solid border-[#8a2b06] py-2 px-8 rounded-3xl ml-4 active:bg-[#5a1a01] active:border-[#5a1a01] active:text-white hover:bg-[#5a1a01] text-[#8a2b06] hover:border-[#5a1a01] hover:text-white"
      >
        Close
      </button>
      {hasItems && (
        <button
          onClick={onStartOrderHandler}
          className="cursor-pointer border border-solid bg-[#8a2b06] border-[#8a2b06] py-2 px-8 rounded-3xl ml-4 active:bg-[#5a1a01] active:border-[#5a1a01] active:text-white hover:bg-[#5a1a01] text-white hover:border-[#5a1a01] hover:text-white"
        >
          CheckOut
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className="flex justify-between items-center font-bold text-2xl my-4 mx-0">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {!isOrdering && cartButtons}

      {isOrdering && <Checkout onClose={props.onHideCart} />}
    </Modal>
  );
};

export default Cart;
