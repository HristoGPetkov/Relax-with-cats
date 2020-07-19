import React from "react";

import { img, wrapper, attribution } from "./Picture.module.css";

const Picture = ({ image }) => {
  let output = null;

  if (image) {
    const { description, alt_description, user, url } = image;

    output = (
      <>
        <div className={wrapper}>
          <img className={img} src={url} alt={description || alt_description} />
        </div>
        <p className={attribution}>
          Photo by
          <a
            href={`https://unsplash.com/@${user.username}?utm_source=Relax with cats&utm_medium=referral`}
          >
            {" "}
            {user.name}{" "}
          </a>
          on
          <a
            href={`https://unsplash.com/?utm_source=Relax with cats&utm_medium=referral`}
          >
            {" "}
            Unsplash{" "}
          </a>
        </p>
      </>
    );
  }

  return output;
};

export default Picture;
