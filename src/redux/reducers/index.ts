import { combineReducers } from "redux";
import userReducer from "./user.reducer.ts";
import playerReducer from "./player.reducer.ts";

const reducer = combineReducers({
  userReducer: userReducer,
  playerReducer: playerReducer,
});

export default reducer;
