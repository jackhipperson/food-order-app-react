import { useRef } from "react";

function Checkout(props) {

  const nameRef = useRef()
  const streetRef = useRef()
  const cityRef = useRef()
  const postcodeRef = useRef()

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!hasError) {
      console.log(nameValue);
      nameResetHandler();
    }
  };

    const nameInputClass = "border border-[#ccc] rounded max-w-full"
    const nameLabelClass = "font-bold mb-1 block"

    // "bg-[#ffeff1] border border-[#aa0b20] rounded-l max-w-full" :
    // nameHasError ? "font-bold mb-1 block text-[#ca3e51]" :

  return (
      <form className="m-4 h-[19rem] overflow-auto" onSubmit={onSubmitHandler}>
        <div className="mb-2">
        <label htmlFor="name" className={nameLabelClass}>Full Name</label>
        <input className={nameInputClass}
          id="name"
          ref={nameRef}
         />
        </div>
        <div className="mb-2">
        <label htmlFor="street" className={nameLabelClass}>Street</label>
        <input className={nameInputClass}
          id="street"
          ref={streetRef}
         />
        </div>
        <div className="mb-2">
        <label htmlFor="city" className={nameLabelClass}>City</label>
        <input className={nameInputClass}
          id="city"
          ref={cityRef}
         />
        </div>
        <div className="mb-2">
        <label htmlFor="postcode" className={nameLabelClass}>Postcode</label>
        <input className={nameInputClass}
          id="postcode"
          ref={postcodeRef}
         />
        </div>

        
        <div className="flex justify-end gap-4">
          <button
            onClick={props.onHideCart}
            className="cursor-pointer border border-solid border-[#8a2b06] py-2 px-8 rounded-3xl ml-4 active:bg-[#5a1a01] active:border-[#5a1a01] active:text-white hover:bg-[#5a1a01] text-[#8a2b06] hover:border-[#5a1a01] hover:text-white"
          >
            Close
          </button>
          <button className="cursor-pointer border border-solid bg-[#8a2b06] border-[#8a2b06] py-2 px-8 rounded-3xl ml-4 active:bg-[#5a1a01] active:border-[#5a1a01] active:text-white hover:bg-[#5a1a01] text-white hover:border-[#5a1a01] hover:text-white">
            Confirm
          </button>
        </div>
      </form>
  );
}

export default Checkout;


