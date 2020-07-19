import React, { useReducer, useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";

import Input from "./Input/Input";
import Button from "../Button/Button";
import Card from "../Card/Card";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../utils/validators";
import { form, head } from "./Auth.module.css";
import { authInit } from "../../store/actions";

const formControlsReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          value: action.value,
          valid: action.valid,
        },
      };
    default:
      return state;
  }
};

const Auth = (props) => {
  const [formValidity, setFormValidity] = useState(false);
  const [isSingUp, toggleSingUp] = useState(true);

  const [state, dispatch] = useReducer(formControlsReducer, {
    email: { value: "", valid: false },
    password: { value: "", valid: false },
  });

  useEffect(() => {
    let isFormValid = true;

    for (let key in state) {
      isFormValid = isFormValid && state[key].valid;
    }

    setFormValidity(isFormValid);
  }, [state, state.valid]);

  const onValueChange = useCallback((id, value, valid) => {
    dispatch({ type: "SET", id, value, valid });
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!formValidity) return;

    const user = {
      email: state.email.value,
      password: state.password.value,
      returnSecureToken: true,
    };

    props.authInit(isSingUp, user);
  };

  return (
    <Card>
      <header className={head}>
        <h1>
          {isSingUp
            ? "Already have an account? Switch to:"
            : "Don't have an accont? Switch to:"}
        </h1>
        <Button clickHandler={() => toggleSingUp((prevValue) => !prevValue)}>
          {isSingUp ? "Sign In" : "Sign Up"}
        </Button>
      </header>
      <form onSubmit={onSubmitHandler} className={form}>
        <Input
          type={"email"}
          label={"Email"}
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
          onValueChange={onValueChange}
          errorMessage="Please enter valid email address"
          authError={props.authError && props.authError.message}
        />
        <Input
          type={"password"}
          label={"Password"}
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
          onValueChange={onValueChange}
          errorMessage="Please enter valid password (at least six symbols)"
          authError={props.authError && props.authError.message}
        />
        <Button type="submit" disabled={!formValidity}>
          Submit
        </Button>
      </form>
    </Card>
  );
};

const mapState = (state) => {
  return {
    authError: state.auth.error,
  };
};

const mapDispatch = { authInit };

export default connect(mapState, mapDispatch)(Auth);
