/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useState } from "react";
import { ACTION_TYPES } from "../redux/actionTypes/actionTypes";

const mapDispatch = (dispatch) => {
  return {
    add: (titleTodo) =>
      dispatch({
        type: ACTION_TYPES.ADD_TODO,
        payload: { title: titleTodo, id: new Date().getTime() },
      }),
  };
};

function AddTodo({ add }) {
  const [val, setVal] = useState("");

  const addTodo = () => {
    add(val);
    setVal("");
  };

  return (
    <form
      className="flex items-center justify-between  w-full"
      onSubmit={(e) => {
        e.preventDefault(), val ? addTodo() : null;
      }}
    >
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className="text-black border-none outline-none px-2 rounded-sm"
      />
      <button
        onClick={() => (val ? addTodo() : null)}
        className="bg-green-500 rounded-sm px-2"
      >
        Add Todo
      </button>
    </form>
  );
}

export default connect(null, mapDispatch)(AddTodo);

AddTodo.propTypes = {
  add: PropTypes.func,
};
