import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-[300px] h-full mt-20 mx-auto">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
