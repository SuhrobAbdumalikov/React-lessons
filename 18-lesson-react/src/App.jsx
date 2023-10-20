import { useState } from "react";

function App() {
  const [state, setState] = useState({
    todos: [
      { id: 1, task: "Walk the walk" },
      { id: 2, task: "Talk the talk" },
      { id: 3, task: "Jump the jump" },
    ],
    draggedTask: {},
    draggedTaskIndex: null,
    dragOverTaskIndex: null,
  });

  const onDrag = (event, todo) => {
    event.preventDefault();
    setState((prev) => ({ ...prev, draggedTask: todo }));
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = () => {
    const { draggedTask, todos, dragOverTaskIndex, draggedTaskIndex } = state;
    const copy = [...todos];
    copy.splice(draggedTaskIndex, 1);
    copy.splice(dragOverTaskIndex, 0, draggedTask);

    setState({
      todos: [...copy],
      draggedTask: null,
      dragOverTaskIndex: null,
      draggedTaskIndex: null,
    });
  };

  const { todos } = state;
  return (
    <div className="App">
      <div
        className="todos"
        onDrop={(event) => onDrop(event)}
        onDragOver={(event) => onDragOver(event)}
      >
        {todos.map((todo, index) => {
          <h1
            key={todo.id}
            draggable
            onDragStart={() =>
              setState((prev) => ({ ...prev, draggedTaskIndex: index }))
            }
            onDragEnter={() =>
              setState((prev) => ({ ...prev, dragOverTaskIndex: index }))
            }
            onDrag={(event) => onDrag(event, todo, index)}
          >
            {todo.id}.{todo.task}
          </h1>;
        })}
      </div>
    </div>
  );
}

export default App;
