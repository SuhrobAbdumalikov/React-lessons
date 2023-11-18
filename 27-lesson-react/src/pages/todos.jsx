import { Link } from "react-router-dom";
import { useGetAllTodosQuery } from "../features/todo";

function Todos() {
  const { isLoading, data } = useGetAllTodosQuery();

  return (
    <>
      <h1 className="mb-5">All Todos</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data?.map((data) => {
          return (
            <h1 key={data.id}>
              <Link to={`/todo/${String(data?.id)}`} className="text-secondary">
                {data.id}. {data.title}
              </Link>
              ;
            </h1>
          );
        })
      )}
    </>
  );
}

export default Todos;
