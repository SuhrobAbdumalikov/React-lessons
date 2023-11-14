/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { connect } from "react-redux";
import { ACTION_TYPES } from "./redux/action-types/action-types";

const mapDispatch = (dispatch) => {
  return {
    addTodo: () =>
      dispatch({
        type: ACTION_TYPES.ADD_TODO,
        payload: `Hello world ${Math.floor(Math.random() * 1000)}`,
      }),
  };
};

const mapState = (state) => {
  return {
    todos: state.todos,
  };
};

function App({ addTodo, todos }) {
  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {/* {props.todos.map((todo, idx) => {
        return <h1 key={idx}>{todo.title}</h1>;
      })} */}
      <h1>{todos}</h1>
    </>
  );
}

export default connect(mapState, mapDispatch)(App);
