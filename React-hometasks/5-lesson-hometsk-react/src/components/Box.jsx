import { DataCard } from "../data/data";
import "./Box.css";

export const Box = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "10px",
      }}
    >
      {DataCard.map(({ img, title, description }) => {
        return (
          <div className="Box">
            <img src={img} style={{ width: "70px", height: "70px" }} />
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};
