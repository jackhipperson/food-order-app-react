import { useReducer } from "react";

const defaultInput = { inputValue: "", isTouched: false };

const reducer = (state, action) => {
  if (action.type === "BLUR") {
    return { inputValue: state.value, isTouched: true };
  }
  if (action.type === "INPUT") {
    return { inputValue: action.value, isTouched: state.isTouched };
  }
  if (action.type === "RESET") {
    return defaultInput;
  }
  return defaultInput;
};

function UseInput(validateInput) {

  const [enteredInput, dispatch] = useReducer(reducer, defaultInput);

  const isValid = validateInput(enteredInput.inputValue)
  const hasError = !isValid && enteredInput.isTouched

  const onBlurHandler = () => {
    dispatch({
      type: "BLUR",
    });
  };

  const onInputHandler = (event) => {
    dispatch({
        type: "INPUT", value: event.target.value
    })
  }

  const onResetHandler = () => {
    dispatch({
        type: "RESET"
    })
  }

  return {
    value: enteredInput.inputValue,
    isTouched: enteredInput.isTouched,
    hasError,
    onBlurHandler,
    onInputHandler,
    onResetHandler,
  };
}

export default UseInput;