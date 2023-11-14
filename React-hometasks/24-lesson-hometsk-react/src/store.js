import { applyMiddleware, createStore } from "redux";
import { userReducer } from "./redux/reducers/userReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const store = createStore(userReducer, applyMiddleware(logger, thunk));
