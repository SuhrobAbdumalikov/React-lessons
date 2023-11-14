/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ACTION_TYPES } from "../redux/actionTypes/actionTypes";
import { useState } from "react";

const mapDispatch = (dispatch) => {
  return {
    delTodo: (id) => dispatch({ type: ACTION_TYPES.REMOVE_TODO, payload: id }),
    // doneTodo: () => dispatch({ type: ACTION_TYPES.DONE_TODO }),
    editTodo: (id) => dispatch({ type: ACTION_TYPES.EDIT_TODO, payload: id }),
  };
};

const mapState = (state) => {
  return { done: state.done };
};

function Todo({ delTodo, title, id }) {
  const [done, setDone] = useState(false);
  // const [edit, setEdit] = useState(false);
  // const [value, setValue] = useState(false);

  return (
    <div className="flex items-center justify-between w-full">
      <h1 className={`text-lg ${!done ? "" : "line-through text-gray-400"}`}>
        {title}
      </h1>
      <div className="flex items-center gap-2">
        <button className="bg-yellow-500 px-2 rounded-sm">edit</button>
        <button
          className="bg-blue-500 px-2 rounded-sm"
          onClick={() => setDone((prev) => !prev)}
        >
          done
        </button>
        <button
          onClick={() => delTodo(id)}
          className="bg-red-500 px-2 rounded-sm"
        >
          del
        </button>
      </div>
    </div>
  );
}

export default connect(mapState, mapDispatch)(Todo);

Todo.propTypes = {
  delTodo: PropTypes.func,
  doneTodo: PropTypes.func,
  editTodo: PropTypes.func,
  title: PropTypes.string,
  id: PropTypes.number,
  done: PropTypes.bool,
};
