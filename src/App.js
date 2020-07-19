import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { checkAuth, getPictures } from "./store/actions";
import Auth from "./components/Auth/Auth";
import LogOut from "./components/Auth/LogOut/LogOut";
import Layout from "./components/Layout/Layout";
import Pictures from "./components/Pictures/Pictures";

function App({ isAuth, checkAuth, getPictures }) {
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (isAuth) getPictures();
  }, [getPictures, isAuth]);

  return (
    <Layout>
      <Switch>
        {!isAuth && (
          <>
            <Route path="/auth">
              <Auth />
            </Route>
            <Redirect to="/auth" />
          </>
        )}
        {isAuth && (
          <>
            <Route path="/logout">
              <LogOut />
            </Route>
            <Route exact={true} path="/">
              <Pictures />
            </Route>
            <Redirect to="/" />
          </>
        )}
      </Switch>
    </Layout>
  );
}
const mapState = (state) => ({
  isAuth: state.auth.id && state.auth.token,
});

const mapDispatch = { checkAuth, getPictures };

export default connect(mapState, mapDispatch)(App);
