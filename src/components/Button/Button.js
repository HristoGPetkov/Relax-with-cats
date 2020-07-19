import React from "react";

import { btn } from "./Button.module.css";

const Button = ({ disabled, children, type = "button", clickHandler }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={btn}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
