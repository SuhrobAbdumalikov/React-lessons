import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { TodoReducer } from "./redux/reducer/todo-reducer";
import thunk from "redux-thunk";
// import logger from "redux-logger";

const customLogger = (prev) => {
  return (next) => {
    return (action) => {
      console.log(
        "%cprev state",
        "color:#ccc; padding-left:5px; border-left:5px solid yellow",
        prev.getState()
      );
      console.log(
        "%caction",
        "padding-left:5px; border-left:5px solid yellow; color:#318ef1 ",
        action
      );
      console.log(
        "%cnext state",
        "padding-left:5px; border-left:5px solid yellow; color:#12fc41",
        prev.getState()
      );
      next(action);
    };
  };
};

export const store = createStore(
  TodoReducer,
  composeWithDevTools(applyMiddleware(customLogger, thunk))
);
