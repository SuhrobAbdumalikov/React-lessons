import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance } from "./utils/useRequest.js";
import Home from "./pages/home.jsx";
import Header from "./components/header.jsx";
import Layout from "./components/layout.jsx";
import SingleProduct from "./pages/single-product.jsx";
import Shop from "./pages/shop.jsx";
import WishList from "./pages/wishlist.jsx";
import Login from "./pages/login.jsx";
import MainCard from "./pages/mainCard.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [cardItem, setCardItem] = useState([]);
  const [isLogged, setIsLogged] = useState(() =>
    localStorage.getItem("access_token")
  );

  const getData = async () => {
    const data = await instance.get("/user");
    if (data.data?.user) {
      setWishList(data.data?.user?.wishlist);
    }
    console.log(data.data?.user);
  };

  const getCardData = async () => {
    const data = await instance.get("/user");
    if (data.data?.cart) {
      setCardItem(data.data?.user?.cart);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    (async () => {
      const data = await instance.get("/home/products");
      setProducts(data.data?.productsList);
      console.log(data.data);
    })();
    getData();
    getCardData();
  }, []);

  const handleLikeBtnClick = async (id) => {
    const el = wishList.find((wishItem) => wishItem._id === id);

    if (!el) {
      const product = products.find((arr) => arr._id === id);
      setWishList((prev) => [...prev, product]);
      await instance.patch("/wishlist", {
        productdetails: product,
      });
    } else {
      setWishList((prev) => prev.filter((wishItem) => wishItem._id !== id));
      await instance.delete("/wishlist/" + id);
    }
  };

  const handleAddCardBtn = async (id) => {
    const el = cardItem.find((cards) => cards._id === id);

    if (!el) {
      const product = products.find((arr) => arr._id === id);
      setCardItem((prev) => [...prev, product]);
      await instance.patch("/cart", {
        productdetails: product,
      });
    } else {
      setCardItem((prev) => prev.filter((cards) => cards._id !== id));
      await instance.delete("/cart/" + id);
    }
  };

  return (
    <BrowserRouter>
      <Layout>
        <Header isLogged={isLogged} setIsLogged={setIsLogged} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                wishList={wishList}
                setWishList={setWishList}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <Shop
                handleLikeBtnClick={handleLikeBtnClick}
                products={products}
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                wishList={wishList}
                setWishList={setWishList}
              />
            }
          />
          <Route
            path="/product/:productID"
            element={
              <SingleProduct
                products={products}
                handleLikeBtnClick={handleLikeBtnClick}
                handleAddCardBtn={handleAddCardBtn}
              />
            }
          />
          <Route path="/wishlist" element={<WishList />} />
          <Route
            path="/cards"
            element={
              <MainCard
                handleAddCardBtn={handleAddCardBtn}
                handleLikeBtnClick={handleLikeBtnClick}
              />
            }
          />
          <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
