// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { cardData } from "../__mock__/Data";

function SingleProduct() {
  //   const { ProductID } = useParams();

  //   useEffect(() => {
  // (async () => {
  //   const data = cardData.find((item) => {
  //     item.id === ProductID;
  //   });
  //   const { id, title, decription, mainImg } = data;
  // })();
  //   }, []);

  return (
    <div className="flex justify-between mt-9 gap-10 items-center">
      <div>
        <img src="" alt="image" className="w-2/3" />
      </div>
      <div className="w-2/3">
        <h1 className={"text-2xl text-gray-500 mb-3 font-bold"}>...Title...</h1>
        <p className="text-gray-400">description...</p>
        <p className="mt-3">$128</p>
      </div>
    </div>
  );
}

export default SingleProduct;
