import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RouteLayout from "./layouts/RouteLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RouteLayout />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Products">
          <Route index element={<Products />} />
          <Route path=":ProductsID" element={<SingleProduct />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
