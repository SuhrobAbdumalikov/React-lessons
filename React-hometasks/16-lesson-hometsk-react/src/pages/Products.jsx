import { cardData } from "../__mock__/Data";
import Button from "../components/ui/Button";

function Products() {
  return (
    <>
      <h2 className="text-4xl text-center py-7 font-workSans bg-gray-400 font-extrabold text-purple-700">
        Our Products
      </h2>
      <div className="grid grid-cols-4 grid-rows-2 gap-12 py-10 px-20">
        {cardData.map(({ id, title, mainImg, decription }) => {
          return (
            <div
              key={id}
              className="w-80 h-90 text-center rounded-lg shadow-xl shadow-gray-200 transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gray-400"
            >
              <div className="w-full h-48 rounded-lg">
                <img
                  src={mainImg}
                  alt="mainImg"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3>{title}</h3>
              <p className="px-4">{decription}</p>
              <div className="flex items-center justify-between px-4 pb-4">
                <span className="font-bold text-green-500">$128</span>
                <Button title={"Buy"} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
