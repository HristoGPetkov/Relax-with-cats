import React from "react";

import { layout } from "./Layout.module.css";
import Toolbar from "../Toolbar/Toolbar";

const Layout = (props) => {
  return (
    <>
      <Toolbar />
      <main className={layout}>{props.children}</main>
    </>
  );
};

export default Layout;
