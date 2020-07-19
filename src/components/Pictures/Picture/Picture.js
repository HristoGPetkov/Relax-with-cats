import React from "react";

import { img, wrapper } from "./Picture.module.css";

const Picture = ({ image }) => {
  let output = null;

  if (image) {
    const { description, alt_description, user, url } = image;

    output = (
      <div className={wrapper}>
        <img className={img} src={url} alt={description || alt_description} />
      </div>
    );
  }

  return output;
};

export default Picture;
