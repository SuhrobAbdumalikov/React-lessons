import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, removeTodo } from "./redux/reducers/todo-reducer";
import { useState } from "react";

function App() {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [val, setval] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [updateTitle, setUpdateTitle] = useState("");
  const [id, setId] = useState(null);

  const add = (title) => {
    dispatch(
      addTodo({
        title,
        id: new Date().getTime(),
      })
    );
  };

  const remove = (id) => {
    dispatch(removeTodo(id));
  };

  const edit = (title, id) => {
    dispatch(
      editTodo({
        title,
        id,
      })
    );
  };

  return (
    <>
      <h1>Redux Toolkit</h1>
      <div>
        <input
          type="text"
          placeholder="add todo"
          value={val}
          onChange={(e) => setval(e.target.value)}
        />
        <button
          onClick={() => {
            val ? add(val) : null;
            setval("");
          }}
        >
          Add Todo
        </button>
      </div>
      {todos.map((todo) => {
        return isEdit && id === todo.id ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5",
              marginTop: 5,
            }}
            key={todo.id}
          >
            <input
              type="text"
              placeholder="update Todo"
              onChange={(e) => setUpdateTitle(e.target.value)}
            />
            <button
              onClick={() => {
                edit(updateTitle, todo.id);
                setIsEdit(false);
                console.log(updateTitle);
                console.log(todo.id);
              }}
            >
              update
            </button>
          </div>
        ) : (
          <div
            key={todo.id}
            style={{ display: "flex", alignItems: "center", gap: 5 }}
          >
            <h3>{todo.title}</h3>
            <button
              onClick={() => {
                setIsEdit(true);
                setId(todo.id);
                console.log(todo.id);
                console.log(todo.title);
              }}
            >
              edit
            </button>
            <button onClick={() => remove(todo.id)}>del</button>
          </div>
        );
      })}
    </>
  );
}

export default App;
