import { combineReducers } from "redux";

import auth from "./authReducer";
import pictures from "./picturesReducer";

export default combineReducers({ auth, pictures });
