import React from "react";

import { wrapper, column } from "./Wrapper.module.css";

const Wrapper = ({ children, flexColumn }) => {
  const classes = [wrapper];

  if (flexColumn) classes.push(column);

  return <div className={classes.join(" ")}>{children}</div>;
};

export default Wrapper;
