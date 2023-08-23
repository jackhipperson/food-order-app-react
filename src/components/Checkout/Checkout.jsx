import React, { useEffect } from "react";

function Checkout(props) {

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!hasError) {
      console.log(nameValue);
      nameResetHandler();
    }
  };

  const formIsValid = !nameHasError && nameIsTouched;

    const nameInputClass = nameHasError ? "bg-[#ffeff1] border border-[#aa0b20] rounded-2xl max-w-full" : "border border-[#ccc] rounded-2xl max-w-full"
    const nameLabelClass = nameHasError ? "font-bold mb-1 block text-[#ca3e51]" : "font-bold mb-1 block"

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


