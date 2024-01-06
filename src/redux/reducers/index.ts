import { combineReducers } from "redux";
import userReducer from "./user.reducer.ts";

const reducer = combineReducers({
  userReducer: userReducer,
});

export default reducer;
