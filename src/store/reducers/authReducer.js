import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOG_OUT,
} from "../actions/actinTypes";

const initialState = {
  id: null,
  token: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return { ...state, loading: true, error: null };
    case AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        id: null,
        token: null,
      };
    case AUTH_LOG_OUT:
      return { ...state, id: null, token: null };
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        id: action.id,
        token: action.token,
      };
    default:
      return state;
  }
};

export default authReducer;
