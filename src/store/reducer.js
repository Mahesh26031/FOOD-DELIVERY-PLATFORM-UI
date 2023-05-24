import { combineReducers } from "redux";

import app from "./app/reducer";

const MainReducer = combineReducers({
  app,
});

export default MainReducer;
