import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const AddTodo = ({ add, selecTedTodo, editTodo }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(false);

  const addTodo = (e) => {
    e.preventDefault();
    if (!title) {
      return;
    }
    if (!selecTedTodo) {
      add({ id: new Date().getMilliseconds(), title, status });
    } else {
      editTodo({ ...selecTedTodo, title, status });
    }
    setStatus(false);
    setTitle("");
  };

  useEffect(() => {
    if (selecTedTodo) {
      setTitle(selecTedTodo?.title);
      setStatus(selecTedTodo?.status);
    }
  }, [selecTedTodo]);

  return (
    <form onSubmit={addTodo} className="mb-3">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Todo title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          checked={status}
          onChange={(e) => setStatus(e.target.checked)}
        />
        <label htmlFor="exampleCheck1" className="form-check-label">
          Finish
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        {selecTedTodo ? "Edit" : "Add"}
      </button>
    </form>
  );
};

AddTodo.propTypes = {
  add: PropTypes.func,
  selecTedTodo: PropTypes.any,
  editTodo: PropTypes.func,
};

export default AddTodo;
