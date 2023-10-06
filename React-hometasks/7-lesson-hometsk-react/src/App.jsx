import { useState } from "react";
import { RecomendationCars, PopularCars } from "./components/Catalog";
import { CarsData } from "./__mock__/catalogData";
import Aos from "aos";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Button from "./components/ui/Button";
import Ads from "./components/Ads";
import LocationAndTime from "./components/LocationAndTime";

import Ads1Img from "./images/PNG/ads1_img.png";
import Ads2Img from "./images/PNG/ads2_img.png";
import swapImg from "./images/SVG/Swap.svg";
import 'aos/dist/aos.css'
import "./style/App.css";

const App = () => {
  const [like, setLike] = useState(false);
  const [Data, setData] = useState(CarsData);
  const [search, setSearch] = useState("");

  Aos.init({
    duration:1400,
  })

  const handleSearch = (value) => {
    console.log(value);
    setSearch(value);
  };

  const takeLike = (id) => {
    setLike((prev) => !prev);
    console.log(Data[id - 1]);
    Data.map((el) => {
      if (el.id === id) {
        el.isliked = !el.isliked;
      }
      return el;
    });
  };

  return (
    <>
      <NavBar handleSearch={handleSearch} Data={Data} takeLike={takeLike} />
      <main>
        <div className="contentContainer">
          <div className="allAds">
            <Ads
              bcAdsColor={"#54A6FF"}
              mainTitle={"The Best Platform for Car Rental"}
              description={
                "Ease of doing a car rental safely and reliably. Of course at a low price."
              }
              button={<Button bcColor={"#3563E9"}>Rental Car</Button>}
              carImg={Ads1Img}
            />
            <Ads
              bcAdsColor={"#3563E9"}
              mainTitle={"Easy way to rent a car at a low price"}
              description={
                "Providing cheap car rental services and safe and comfortable facilities."
              }
              carImg={Ads2Img}
              button={<Button bcColor={"#54A6FF"}>Rental Car</Button>}
              className="ads2"
            />
          </div>
          <div className="selectTimeAndLocation">
            <LocationAndTime checkedTitle={"Pick - Up"} />
            <Button bcColor={"#3563E9"}>
              <img src={swapImg} alt="" />
            </Button>
            <LocationAndTime checkedTitle={"Drop - Off"} />
          </div>
          <div className="popularCarTitle">
            <p>Popular Car</p>
            <Button color={"#3563E9"} bcColor={"white"}>
              View All
            </Button>
          </div>
          <PopularCars
            Data={
              !search.length
                ? Data
                : Data.filter((Data) =>
                    Data.name
                      .toLocaleLowerCase()
                      .includes(search.trim().toLocaleLowerCase())
                  )
            }
            takeLike={takeLike}
          ></PopularCars>
          <p className="recomendationCar">Recomendation Car</p>
          <RecomendationCars
            Data={
              !search.length
                ? Data
                : Data.filter((Data) =>
                    Data.name
                      .toLocaleLowerCase()
                      .includes(search.trim().toLocaleLowerCase())
                  )
            }
            takeLike={takeLike}
          ></RecomendationCars>
          <div className="moreCars" data-aos="zoom-in-up">
            <Button
              bcColor={"#3563E9"}
              color={"white"}
              children={"Show more car"}
            />
            <span>120 Car</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default App;
