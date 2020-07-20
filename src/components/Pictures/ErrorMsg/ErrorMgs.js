import React from "react";

import Wrapper from "../../Card/Wrapper/Wrapper";
import { error } from "./ErrorMgs.module.css";

const ErrorMsg = (props) => {
  return (
    <Wrapper>
      <h1 className={error}>{props.message}</h1>
    </Wrapper>
  );
};

export default ErrorMsg;
