import Button from "./ui/Button";
import "../style/App.css";

export const Card = ({
  props: {
    name,
    description,
    img,
    Spesification,
    dollor,
    date,
    button,
    lastPrice,
    id,
  },
  takeLike,
  isliked,
}) => {
  return (
    <div className="boxCar" data-aos="zoom-in">
      <div className="topSide">
        <div className="leftTexts">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div
          className="like"
          onClick={() => {
            takeLike(id);
          }}
        >
          {!isliked ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z"
                stroke="#90A3BF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z"
                fill="red"
                stroke="red"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="middleImg">
        <img src={img} alt="carImg" />
      </div>
      <div className="bottomSide">
        <div className="bottomTop">
          {Spesification.map(({ title, icon }) => {
            return (
              <div className="specificationBox">
                <img src={icon} alt="" />
                <p>{title}</p>
              </div>
            );
          })}
        </div>
        <div className="bottomBottom">
          <div className="leftContent">
            <div className="newPrice">
              <h4>{dollor}</h4>
              <span>{date}</span>
            </div>
            <p>{lastPrice}</p>
          </div>
          <div className="rightContent">
            <Button
              bcColor={"#3563E9"}
              color={"white"}
              children={button}
              className="cardBtn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const RecomendationCard = ({
  props: {
    name,
    description,
    img,
    Spesification,
    dollor,
    date,
    button,
    lastPrice,
    id,
  },
  takeLike,
  isliked,
}) => {
  return (
    <div className="boxCar" data-aos="zoom-out">
      <div className="topSide">
        <div className="leftTexts">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div
          className="like"
          onClick={() => {
            takeLike(id);
          }}
        >
          {!isliked ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z"
                stroke="#90A3BF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z"
                fill="red"
                stroke="red"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="middleImg">
        <img src={img} alt="carImg" />
      </div>
      <div className="bottomSide">
        <div className="bottomTop">
          {Spesification.map(({ title, icon }) => {
            return (
              <div className="specificationBox">
                <img src={icon} alt="" />
                <p>{title}</p>
              </div>
            );
          })}
        </div>
        <div className="bottomBottom">
          <div className="leftContent">
            <div className="newPrice">
              <h4>{dollor}</h4>
              <span>{date}</span>
            </div>
            <p>{lastPrice}</p>
          </div>
          <div className="rightContent">
            <Button bcColor={"#3563E9"} color={"white"} children={button} />
          </div>
        </div>
      </div>
    </div>
  );
};
