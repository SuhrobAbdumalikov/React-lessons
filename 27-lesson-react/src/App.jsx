import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./layouts/rootLayout";

import Todos from "./pages/todos";
import Posts from "./pages/posts";
import SinglePost from "./pages/single-post";
import SingleTodo from "./pages/single-todo";

function App() {
  const roots = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Todos />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/todo/:id" element={<SingleTodo />} /> 
      </Route>
    )
  );

  return <RouterProvider router={roots} />;
}

export default App;
