import { ACTION_TYPES } from "../action-types/action-types";

const initalValue = {
  todos: [],
};

export const TodoReducer = (state = initalValue, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      state.todos = [...state.todos, action.payload];
      break;
    default:
  }
  return { ...state };
};
