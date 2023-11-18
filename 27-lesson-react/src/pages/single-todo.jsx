import { useParams } from "react-router-dom";
import { useGetTodosByIdQuery } from "../features/todo";

function SingleTodo() {
  const { id } = useParams();
  const { data, isLoading } = useGetTodosByIdQuery(id);

  return (
    <>
      <h1 className="mb-3">Single Todo</h1>
      {isLoading ? <h1>loading...</h1> : <h1>{data?.title}</h1>}
    </>
  );
}

export default SingleTodo;
