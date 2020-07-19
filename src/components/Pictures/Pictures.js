import React, { useState } from "react";
import { connect } from "react-redux";

import { getPictures } from "../../store/actions";
import Card from "../Card/Card";
import Picture from "./Picture/Picture";
import Button from "../Button/Button";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import { pictures } from "./Pictures.module.css";

const Pictures = ({ picsArr, getPictures, isLoading }) => {
  const [picIdx, setPicIdx] = useState(0);

  const nextPic = () => {
    if (picIdx === picsArr.length - 1) {
      getPictures();
    } else {
      setPicIdx((prevIdx) => prevIdx + 1);
    }
  };

  const prevPic = () => {
    if (picIdx === 0) return;

    setPicIdx((prevIdx) => prevIdx - 1);
  };

  let output = isLoading ? (
    <LoadingIndicator />
  ) : (
    <Picture image={picsArr[picIdx]} />
  );

  return (
    <div className={pictures}>
      <Card>{output}</Card>
      <Button large disabled={picIdx === 0} clickHandler={prevPic}>
        Prev
      </Button>
      <Button
        large
        clickHandler={nextPic}
        btnBlue={picIdx === picsArr.length - 1}
      >
        {picIdx === picsArr.length - 1 ? "Load More" : "Next"}
      </Button>
    </div>
  );
};

const mapState = (state) => ({
  isLoading: state.pictures.loading,
  picsArr: state.pictures.pictures,
});

const mapDispatch = { getPictures };

export default connect(mapState, mapDispatch)(Pictures);
