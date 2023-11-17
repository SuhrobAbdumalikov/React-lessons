import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/dist";
import { getTodosById } from "../reducer/reducer";

function SingleBlog() {
  const { id } = useParams();
  const { currentTodo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosById(id));
  }, [id]);

  return (
    <div>
      <h2>
        {currentTodo.id}. {currentTodo.title}
      </h2>
    </div>
  );
}

export default SingleBlog;
