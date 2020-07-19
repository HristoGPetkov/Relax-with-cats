import React from "react";

import {
  btn,
  flex_end,
  flex_start,
  btn_blue,
  btn_pink,
  btn_large,
} from "./Button.module.css";

const Button = ({
  disabled,
  children,
  type = "button",
  clickHandler,
  flexEnd,
  flexStart,
  large,
  btnPink,
  btnBlue,
}) => {
  const addedClasses = [];

  if (flexEnd) addedClasses.push(flex_end);
  if (flexStart) addedClasses.push(flex_start);
  if (btnBlue) addedClasses.push(btn_blue);
  if (btnPink) addedClasses.push(btn_pink);
  if (large) addedClasses.push(btn_large);

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${btn} ${addedClasses.join(" ")}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
