import React from "react";

import { card } from "./Card.module.css";

const Card = (props) => {
  return <div className={card}>{props.children}</div>;
};

export default Card;
