import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { toolbar } from "./Toolbar.module.css";
import Button from "../Button/Button";

const Toolbar = ({ isAuth }) => {
  return (
    <nav className={toolbar}>
      {!isAuth && (
        <Link to="/auth">
          <Button>Log In</Button>
        </Link>
      )}
      {isAuth && (
        <Link to="/logout">
          <Button>Log Out</Button>
        </Link>
      )}
    </nav>
  );
};

const mapState = (state) => ({
  isAuth: state.auth.id && state.auth.token,
});

export default connect(mapState)(Toolbar);
