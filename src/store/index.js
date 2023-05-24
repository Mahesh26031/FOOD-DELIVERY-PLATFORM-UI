import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import MainReducer from "./reducer";

// Import the index reducer and sagas

// Setup the middleware to watch between the Reducers and the Actions

const store = createStore(MainReducer);

export default store;
