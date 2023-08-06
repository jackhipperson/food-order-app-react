import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const[btnHighlighted, setBtnHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numCartItems = items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const btnClasses =
    "flex cursor-pointer items-center bg-[#4d1601] rounded-full py-2 px-12 text-l active:bg-[#2c0d00] hover:bg-[#2c0d00] " +
    `${btnHighlighted ? "animate-[bump_300ms_ease-out]" : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlighted(true);

    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className="pr-2 h-6">
        <FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff" }} />
      </span>
      <span>Your Cart</span>
      <span className="rounded-full bg-[#b94517] ml-4 font-bold px-4 py-1">
        {numCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
