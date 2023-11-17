import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./layouts/root-layout";
import Home from "./pages/home";
import SingleBlog from "./pages/single-blog";

import "./App.css";

function App() {
  const roots = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<SingleBlog />} />
      </Route>
    )
  );

  return <RouterProvider router={roots} />;
}

export default App;
