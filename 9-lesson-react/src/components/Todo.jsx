import PropTypes from "prop-types";
import { useEffect } from "react";

const Todo = ({ title, deleteTodo, setEditedTodo, done, status, id }) => {
  useEffect(() => {
    return () => {
      console.log("Test");
    };
  });
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {status ? <del>{title}</del> : <>{title}</>}
      <div>
        <button onClick={() => setEditedTodo(id)} className="btn btn-warning">
          Edit
        </button>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger ms-2">
          Delete
        </button>
        <button
          onClick={() => done(id)}
          className="btn btn-success ms-2"
          disabled={status}
        >
          Done
        </button>
      </div>
    </li>
  );
};

Todo.propTypes = {
  title: PropTypes.string,
  deleteTodo: PropTypes.func,
  setEditedTodo: PropTypes.func,
  done: PropTypes.func,
  status: PropTypes.bool,
  id: PropTypes.number,
};

export default Todo;
