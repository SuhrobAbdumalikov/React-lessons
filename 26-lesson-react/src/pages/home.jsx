import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../reducer/reducer";
import { Link } from "react-router-dom/dist";
import "../App.css";

function Home() {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div>
      <h1>All Todos</h1>
      {todos.map((todo) => {
        return (
          <h3 key={todo.id}>
            <Link to={String(todo.id)} className="h1">
              {todo.id}. {todo.title}
            </Link>
          </h3>
        );
      })}
    </div>
  );
}

export default Home;
