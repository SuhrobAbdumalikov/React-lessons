import { useParams } from "react-router-dom";
import { useGetPostsByIdQuery } from "../features/posts";

function SinglePost() {
  const { id } = useParams();
  const { data, isLoading } = useGetPostsByIdQuery(id);

  return (
    <>
      <h1 className="mb-3">Single Post</h1>
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </>
      )}
    </>
  );
}

export default SinglePost;
