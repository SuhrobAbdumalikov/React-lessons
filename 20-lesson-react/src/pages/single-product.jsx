import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { badgeVariants } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { toast } from "../components/ui/use-toast";

function SingleProduct({ products, handleLikeBtnClick, handleAddCardBtn }) {
  const [product, setProduct] = useState({});
  const { productID } = useParams();
  const {
    author,
    badgeText,
    bookName,
    description,
    discountPercent,
    discountedPrice,
    imgAlt,
    imgSrc,
    originalPrice,
    rating,
    _id,
  } = product;

  useEffect(() => {
    const singleData = products.find((product) => product._id === productID);
    if (singleData) {
      setProduct(singleData);
    } else {
      return;
    }
  }, [productID, products]);

  const handleAddToWishlist = () => {
    handleLikeBtnClick(_id);
  };

  const handleAddCart = () => {
    handleAddCardBtn(_id);
    console.log("id", _id);
  };

  return (
    <div className="container text-white">
      {products.length ? (
        <section className="py-[120px] flex justify-evenly items-center">
          <div className="w-[300px] relative">
            <img
              src={imgSrc}
              alt={imgAlt}
              className="w-[300px] h-[450px] mx-auto shadow-lg shadow-white"
            />
            <span
              className={`${badgeVariants({
                variant: "destructive",
              })} absolute top-0 left-0 rounded-none`}
            >
              {badgeText}
            </span>
          </div>
          <div className="w-[50%]">
            <h2 className="font-bold text-[36px]">{bookName}</h2>
            <hr className="border" />
            <h3 className="text-[22px]">
              <span className="mr-5 my-4 font-bold inline-block">Author:</span>{" "}
              {author}
            </h3>
            <p className="text-[20px]">
              <span className="font-bold mr-3 text-[22px]">Description: </span>
              {description}
            </p>
            <div className="my-3 font-bold text-[22px]">
              Rating:{" "}
              {Array.from({ length: rating }, (_, index) => (
                <span key={index}>⭐️</span>
              ))}
            </div>
            <div className="flex gap-16 items-center w-[400px] font-semibold text-[20px]">
              <p>R.S {discountedPrice}</p>
              <del>R.S {originalPrice}</del>
              <span className="text-red-500 text-[14px]">
                ({discountPercent}% off)
              </span>
            </div>
            <div className="flex justify-between items-center gap-3 mt-5 w-[550px]">
              <Button
                className="bg-red-500 w-1/2 hover:bg-red-700"
                onClick={() => {
                  handleAddToWishlist();
                  toast({
                    className: "bg-green-600 text-white",
                    title: "Successfully Added✅",
                    description: "Item successfully added to Wishlist!",
                  });
                }}
              >
                Add to Wishlist
              </Button>
              <Button
                className="bg-orange-400 w-1/2 hover:bg-orange-500 "
                onClick={() => {
                  handleAddCart();
                  toast({
                    className: "bg-green-600 text-white",
                    title: "Successfully Added✅",
                    description: "Item successfully added to Cards!",
                  });
                }}
              >
                Add to Card
              </Button>
            </div>
          </div>
        </section>
      ) : (
        <div className="h-[500px] flex justify-center items-center">
          <h2 className="text-gray-500 font-bold text-xl">Loading...</h2>
        </div>
      )}
    </div>
  );
}

SingleProduct.propTypes = {
  products: PropTypes.array,
  wishlist: PropTypes.array,
  setWishlist: PropTypes.func,
  handleLikeBtnClick: PropTypes.func,
  handleAddCardBtn: PropTypes.func,
};

export default SingleProduct;
