import React from "react";

import {
  wrapper,
  skCircle,
  skChild,
  skCircle1,
  skCircle2,
  skCircle3,
  skCircle4,
  skCircle5,
  skCircle6,
  skCircle7,
  skCircle8,
  skCircle9,
  skCircle10,
  skCircle11,
  skCircle12,
} from "./LoadingIndicator.module.css";

const LoadingIndicator = () => {
  return (
    <div className={wrapper}>
      <div className={skCircle}>
        <div className={`${skCircle1} ${skChild}`}></div>
        <div className={`${skCircle2} ${skChild}`}></div>
        <div className={`${skCircle3} ${skChild}`}></div>
        <div className={`${skCircle4} ${skChild}`}></div>
        <div className={`${skCircle5} ${skChild}`}></div>
        <div className={`${skCircle6} ${skChild}`}></div>
        <div className={`${skCircle7} ${skChild}`}></div>
        <div className={`${skCircle8} ${skChild}`}></div>
        <div className={`${skCircle9} ${skChild}`}></div>
        <div className={`${skCircle10} ${skChild}`}></div>
        <div className={`${skCircle11} ${skChild}`}></div>
        <div className={`${skCircle12} ${skChild}`}></div>
      </div>
      <p style={{ textAlign: "center", fontSize: "1.6rem" }}>Loading...</p>
    </div>
  );
};

export default LoadingIndicator;
