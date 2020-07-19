import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { onLogOut } from "../../../store/actions";

const LogOut = ({ onLogOut }) => {
  useEffect(() => {
    onLogOut();
  }, [onLogOut]);
  return <Redirect to="/auth" />;
};

const mapDispatch = { onLogOut };

export default connect(null, mapDispatch)(LogOut);
