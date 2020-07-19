import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOG_OUT,
} from "./actinTypes";
import { firebase } from "../../utils/utils";

export const onLogOut = () => {
  localStorage.removeItem("localId");
  localStorage.removeItem("idToken");
  localStorage.removeItem("expiresIn");

  return { type: AUTH_LOG_OUT };
};
export const onAuthStart = () => ({ type: AUTH_START });
export const onAuthFail = (error) => ({ type: AUTH_FAIL, error });
export const onAuthSuccess = (id, token) => ({
  type: AUTH_SUCCESS,
  id,
  token,
});

export const authTimeOut = (ms) => (dispatch) => {
  setTimeout(() => dispatch(onLogOut()), ms);
};

export const checkAuth = () => (dispatch) => {
  const { localId, idToken, expiresIn } = localStorage;

  if (!localId || !idToken) {
    dispatch(onLogOut());
  } else {
    if (new Date() > new Date(expiresIn)) {
      dispatch(onLogOut());
    } else {
      dispatch(onAuthSuccess(localId, idToken));

      dispatch(
        authTimeOut(new Date(expiresIn).getTime() - new Date().getTime())
      );
    }
  }
};

export const authInit = (isSingUp, user) => async (dispatch) => {
  const url = isSingUp ? "signUp" : "signInWithPassword";

  try {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:${url}?key=${firebase}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );

    const result = await response.json();

    console.log(result);

    if (result.error) {
      throw new Error(result.error.message);
    }

    const { localId, idToken, expiresIn } = result;

    localStorage.setItem("localId", localId);
    localStorage.setItem("idToken", idToken);
    localStorage.setItem(
      "expiresIn",
      new Date(+new Date().getTime() + +expiresIn * 1000)
    );

    dispatch(onAuthSuccess(localId, idToken));

    dispatch(authTimeOut(+expiresIn * 1000));
  } catch (error) {
    dispatch(onAuthFail(error));
  }
};
