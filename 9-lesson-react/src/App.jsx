import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos([...newTodo]);
  };

  const changeStatus = (id) => {
    const idx = todos.findIndex((todo) => todo.id === id);
    todos[idx].status = !todos[idx].status;
    setTodos([...todos]);
  };

  const editTodo = (todo) => {
    const idx = todos.findIndex((t) => t.id === todo.id);
    todos[idx] = todo;
    setTodos([...todos]);
    setSelectedTodo(null);
  };

  const setEditedTodo = (id) => {
    const currentTodo = todos.find((todo) => todo.id === id);
    setSelectedTodo(currentTodo);
  };

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  console.log(todos);
  return (
    <div className="container mt-5">
      <AddTodo add={addTodo} selectedTodo={selectedTodo} editTod={editTodo} />
      <ul className="list-group">
        {todos.length ? (
          todos.map((todo) => (
            <Todo
              {...todo}
              key={todo.id}
              deleteTodo={deleteTodo}
              done={changeStatus}
              setEditedTodo={setEditedTodo}
            />
          ))
        ) : (
          <h1>N0 TODO</h1>
        )}
      </ul>
    </div>
  );
}

export default App;
