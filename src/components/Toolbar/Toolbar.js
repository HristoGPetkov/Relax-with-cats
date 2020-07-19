import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { toolbar } from "./Toolbar.module.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

const Toolbar = ({ isAuth }) => {
  return (
    <nav className={toolbar}>
      <Logo />
      {!isAuth && (
        <Link to="/auth">
          <Button>Log In</Button>
        </Link>
      )}
      {isAuth && (
        <Link to="/logout">
          <Button btnPink>Log Out</Button>
        </Link>
      )}
    </nav>
  );
};

const mapState = (state) => ({
  isAuth: state.auth.id && state.auth.token,
});

export default connect(mapState)(Toolbar);
