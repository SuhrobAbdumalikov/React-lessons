import { createStore } from "redux";
import { todoReducer } from "../redux/reducers/todoReducer";

export const store = createStore(todoReducer);
