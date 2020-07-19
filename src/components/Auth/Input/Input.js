import React, { useReducer, useEffect } from "react";

import { validate } from "../../../utils/validators";
import { authErrorMsg } from "../../../utils/utils";
import {
  wrapper,
  control,
  text,
  wrapperValid,
  wrapperInvalid,
  errorText,
} from "./Input.module.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "ADD_VALUE":
      return { ...state, value: action.value, valid: action.valid };
    case "LEAVE_FIELD":
      return { ...state, touched: true };
    default:
      return state;
  }
};

const Input = ({
  type,
  label,
  onValueChange,
  validators,
  errorMessage,
  authError,
}) => {
  const [state, dispatch] = useReducer(inputReducer, {
    value: "",
    valid: false,
    touched: false,
  });

  useEffect(() => {
    onValueChange(type, state.value, state.valid);
  }, [type, state.value, state.valid, onValueChange]);

  const onChangeHandler = (e) => {
    dispatch({
      type: "ADD_VALUE",
      value: e.target.value,
      valid: validate(e.target.value, validators),
    });
  };

  const onBlurHandler = () => {
    dispatch({ type: "LEAVE_FIELD" });
  };

  let inputElement = null;
  let errorMsg = null;

  const wrapperClasses = [wrapper];

  if (state.valid && state.touched) {
    wrapperClasses.push(wrapperValid);
  }

  if (!state.valid && state.touched) {
    wrapperClasses.push(wrapperInvalid);
    errorMsg = <p className={errorText}>{errorMessage}</p>;
  }

  if (authError && authErrorMsg[authError].type === type) {
    wrapperClasses.push(wrapperInvalid);
    errorMsg = <p className={errorText}>{authErrorMsg[authError].message}</p>;
  }

  switch (type) {
    case "email":
      inputElement = (
        <input
          type="email"
          id={type}
          name={type}
          value={state.value}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          className={control}
        />
      );
      break;
    case "password":
      inputElement = (
        <input
          type="password"
          id={type}
          name={type}
          value={state.value}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          className={control}
        />
      );
      break;
    default:
      inputElement = <input type="text" />;
  }

  return (
    <>
      <div className={wrapperClasses.join(" ")}>
        <label htmlFor={type} className={text}>
          {label}:
        </label>
        {inputElement}
      </div>
      {errorMsg}
    </>
  );
};

export default Input;
