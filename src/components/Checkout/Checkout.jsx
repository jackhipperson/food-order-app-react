import React from "react";
import UseInput from "./UseInput";

function Checkout(props) {
  const {
    value: nameValue,
    isTouched: nameIsTouched,
    hasError: nameHasError,
    onBlurHandler: nameBlurHandler,
    onInputHandler: nameInputHander,
    onResetHandler: nameResetHandler,
  } = UseInput(value => value.trim() !== "");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!hasError) {
      console.log(nameValue);
      nameResetHandler();
    }
  };

  const formIsValid = !nameHasError && nameIsTouched;

  let nameInputClass = "border border-[#ccc] rounded-2xl max-w-full"
  let nameLabelClass = "font-bold mb-1 block"

  if (nameHasError) {
    nameInputClass = "bg-[#ffeff1] border border-[#aa0b20] rounded-2xl max-w-full"
    nameLabelClass = "font-bold mb-1 block text-[#ca3e51]"
  }

  return (
      <form className="m-4 h-[17rem] overflow-auto">
        <div className="mb-2">
        <label htmlFor="name" className={nameLabelClass}>Name</label>
        <input className={nameInputClass}
          onChange={nameInputHander}
          onBlur={nameBlurHandler}
          id="name"
          value={nameValue}
         />
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={props.onHideCart}
            className="cursor-pointer border border-solid border-[#8a2b06] py-2 px-8 rounded-3xl ml-4 active:bg-[#5a1a01] active:border-[#5a1a01] active:text-white hover:bg-[#5a1a01] text-[#8a2b06] hover:border-[#5a1a01] hover:text-white"
          >
            Close
          </button>
          <button disabled={!formIsValid} className="cursor-pointer border border-solid bg-[#8a2b06] border-[#8a2b06] py-2 px-8 rounded-3xl ml-4 active:bg-[#5a1a01] active:border-[#5a1a01] active:text-white hover:bg-[#5a1a01] text-white hover:border-[#5a1a01] hover:text-white">
            Confirm
          </button>
        </div>
      </form>
  );
}

export default Checkout;


