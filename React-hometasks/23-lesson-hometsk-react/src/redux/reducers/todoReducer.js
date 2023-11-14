import { ACTION_TYPES } from "../actionTypes/actionTypes";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Hello world!",
    },
  ],
  done: false,
};

const removeTodo = (id, todos) => todos.filter((todo) => todo.id !== id);
const editTodo = (id, todos) => todos.findIndex((todo) => todo.id === id);

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      state.todos = [...state.todos, action.payload];
      break;
    case ACTION_TYPES.REMOVE_TODO:
      state.todos = removeTodo(action.payload, state.todos);
      break;
    case ACTION_TYPES.DONE_TODO:
      state.done = !state.done;
      break;
    case ACTION_TYPES.EDIT_TODO:
      state.todos = editTodo(action.payload, state.todos);
      break;
    default:
  }
  return { ...state };
}
