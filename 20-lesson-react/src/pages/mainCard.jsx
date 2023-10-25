import PropTypes from "prop-types";
import { instance } from "../utils/useRequest";
import { useState } from "react";
import { useEffect } from "react";
import Cards from "./cards";

function MainCard({ handleLikeBtnClick }) {
  const [dataCard, setDataCard] = useState([]);

  const getData = async () => {
    const data = await instance.get("/user");
    setDataCard(data.data?.user?.cart);
  };

  const click = async (id) => {
    await instance.delete("/cart/" + id);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mt-24 mb-5 text-white"> 
      <h1 className="text-center my-7 text-3xl text-white">
        {dataCard?.length} items in Cards
      </h1>
      <div>
        {dataCard?.length ? (
          dataCard.map((card) => (
            <Cards
              key={card._id}
              {...card}
              click={click}
              handleLikeBtnClick={handleLikeBtnClick}
            />
          ))
        ) : (
          <h1 className="text-4xl">No Cards</h1>
        )}
      </div>
    </div>
  );
}

export default MainCard;

MainCard.propTypes = {
  handleLikeBtnClick: PropTypes.func,
};
