import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import SingleProduct from "./pages/SingleProduct";
import NotFound from "./pages/NotFound";
import RoutesLayout from "./layouts/RoutesLayout";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RoutesLayout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product">
          <Route index element={<Product />} />
          <Route path=":productID" element={<SingleProduct />} />
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
