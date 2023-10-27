import PropTypes from "prop-types";
import Card from "../components/card";
import { useEffect, useState } from "react";
import { instance } from "../utils/useRequest";

function WishList({ handleLikeBtnClick }) {
  const [data, setData] = useState([]);

  const getData = async () => {
    const data = await instance.get("/user");
    setData(data.data?.user?.wishlist);
  };

  const click = async (id) => {
    await handleLikeBtnClick(id);
    await getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mt-28">
      <h1 className="text-center my-5 text-3xl text-black">
        {data?.length} items in Wishlist!
      </h1>
      <div className="flex  mt-5 flex-wrap gap-10">
        {data?.length ? (
          data.map((wishItem) => (
            <Card key={wishItem._id} {...wishItem} handleLikeBtnClick={click} />
          ))
        ) : (
          <h1 className="flex items-center justify-center text-4xl w-full mt-32 text-red-500">
            Your Wishlist is Empty!
          </h1>
        )}
      </div>
    </div>
  );
}
export default WishList;

WishList.propTypes = {
  // wishList: PropTypes.array,
  handleLikeBtnClick: PropTypes.func,
};
