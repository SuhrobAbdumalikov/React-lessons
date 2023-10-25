import PropTypes from "prop-types";
import Genres from "../components/genres";
import NewArrivals from "../components/new-arrivals";

function Home({ selectedGenres, setSelectedGenres, wishList, setWishList }) {
  return (
    <div className="mt-3 mb-10">
      <div className="mb-10 rounded-sm">
        <img
          src="/assets/mainImg.jpg"
          alt="img"
          className="rounded-sm w-full"
        />
      </div>
      <h1 className="text-center mb-8 text-3xl text-white">Genres</h1>
      <Genres
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
      />
      <NewArrivals setWishList={setWishList} wishList={wishList} />
    </div>
  );
}
export default Home;

Home.propTypes = {
  selectedGenres: PropTypes.array,
  setSelectedGenres: PropTypes.func,
  wishList: PropTypes.array,
  setWishList: PropTypes.func,
  handleLikeBtnClick: PropTypes.func,
};
