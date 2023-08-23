import { useRef, useState } from "react";

function Checkout(props) {
  const nameRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const postcodeRef = useRef();
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    city: true,
    postcode:true
  })

  const isEmpty = (value) => value.trim() === "";
  const isFiveChars = (value) => value.trim().length >= 5;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredCity = cityRef.current.value;
    const enteredPostcode = postcodeRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostcodeIsValid = isFiveChars(enteredPostcode);

    setFormValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postcode: enteredPostcodeIsValid
    })

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostcodeIsValid;

      if (!formIsValid) {
        return;
      }
  };

  const validInputClass = "px-2 border border-[#ccc] rounded max-w-full"
  const invalidInputClass = "px-2 bg-[#ffeff1] border border-[#aa0b20] rounded-l max-w-full"
  const validLabelClass = "font-bold mb-1 block"
  const invalidLabelClass = "font-bold mb-1 block text-[#ca3e51]"

  const nameInputClass = `${formValidity.name ? validInputClass : invalidInputClass}`
  const streetInputClass = `${formValidity.street ? validInputClass : invalidInputClass}`
  const cityInputClass = `${formValidity.city ? validInputClass : invalidInputClass}`
  const postcodeInputClass = `${formValidity.postcode ? validInputClass : invalidInputClass}`
  const nameLabelClass = `${formValidity.name ? validLabelClass : invalidLabelClass}`
  const streetLabelClass = `${formValidity.street ? validLabelClass : invalidLabelClass}`
  const cityLabelClass = `${formValidity.city ? validLabelClass : invalidLabelClass}`
  const postcodeLabelClass = `${formValidity.postcode ? validLabelClass : invalidLabelClass}`


  return (
    <form className="m-4 h-[19rem] overflow-auto" onSubmit={onSubmitHandler}>
      <div className="mb-2">
        <label htmlFor="name" className={nameLabelClass}>
          Full Name
        </label>
        <input className={nameInputClass} id="name" ref={nameRef} />
        {!formValidity.name && <p className="text-[#ca3e51]">Please enter a valid name!</p>}
      </div>
      <div className="mb-2">
        <label htmlFor="street" className={streetLabelClass}>
          Street
        </label>
        <input className={streetInputClass} id="street" ref={streetRef} />
        {!formValidity.street && <p className="text-[#ca3e51]">Please enter a valid street!</p>}
      </div>
      <div className="mb-2">
        <label htmlFor="city" className={cityLabelClass}>
          City
        </label>
        <input className={cityInputClass} id="city" ref={cityRef} />
        {!formValidity.city && <p className="text-[#ca3e51]">Please enter a valid city!</p>}
      </div>
      <div className="mb-2">
        <label htmlFor="postcode" className={postcodeLabelClass}>
          Postcode
        </label>
        <input className={postcodeInputClass} id="postcode" ref={postcodeRef} />
        {!formValidity.postcode && <p className="text-[#ca3e51]">Please enter a valid postcode!</p>}
      </div>

      <div className="flex justify-end gap-4">
        <button
          onClick={props.onClose}
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
