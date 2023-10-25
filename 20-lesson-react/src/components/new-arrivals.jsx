import PropTypes from "prop-types";
import { instance } from "../utils/useRequest";
import { useEffect, useState } from "react";
import Card from "./card";

function NewArrivals({ wishList, setWishList }) {
  const [arrivals, setArrivals] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    (async () => {
      const data = await instance.get("/home/newarrivals");
      setArrivals(data.data?.newArrivalList);
    })();
  }, []);

  const handleLikeBtnClick = async (id) => {
    const el = wishList.find((wishItem) => wishItem._id === id);

    if (!el) {
      const product = arrivals.find((arr) => arr._id === id);
      setWishList((prev) => [...prev, product]);
      await instance.patch("/wishlist", {
        productdetails: product,
      });
    } else {
      setWishList((prev) => prev.filter((wishItem) => wishItem._id !== id));
      await instance.delete("/wishlist/" + id);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mb-8 text-3xl text-white">New Arrivals</h1>
      <div className="flex justify-between">
        {arrivals?.map((arrival) => (
          <Card
            key={arrival._id}
            {...arrival}
            isLiked={
              wishList.findIndex(
                (wishItem) => wishItem._id === arrival?._id
              ) === -1
            }
            handleLikeBtnClick={handleLikeBtnClick}
          />
        ))}
      </div>
    </div>
  );
}
export default NewArrivals;

NewArrivals.propTypes = {
  wishList: PropTypes.array,
  setWishList: PropTypes.func,
};
