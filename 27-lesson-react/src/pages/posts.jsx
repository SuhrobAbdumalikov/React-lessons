import { Link } from "react-router-dom";
import { useGetAllPostsQuery } from "../features/posts";

function Posts() {
  const { isLoading, data } = useGetAllPostsQuery();

  return (
    <>
      <h1 className="mb-5">All Posts</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data?.map((data) => {
          return (
            <h1 key={data.id}>
              <Link to={`/post/${String(data.id)}`} className="text-secondary">
                {data.id}. {data.title}
              </Link>
            </h1>
          );
        })
      )}
    </>
  );
}

export default Posts;
