import {
  GET_PICS_FAIL,
  GET_PICS_INIT,
  GET_PICS_SUCCESS,
} from "../actions/actinTypes";

const initialState = {
  pictures: [],
  error: null,
  loading: false,
};

const picturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PICS_INIT:
      return { ...state, loading: true, error: null };
    case GET_PICS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        pictures: [...state.pictures, ...action.pictures],
      };

    case GET_PICS_FAIL:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default picturesReducer;
