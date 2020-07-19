import React from "react";

//import { ReactComponent as CatSvg } from "../../assests/cat.svg";
import image from "../../assests/cat.svg";
import { logo } from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={logo}>
      <img src={image} alt="logo of a cat" />
    </div>
  );
};

export default Logo;
