import Button from "./ui/Button";
import "../style/Ads.css";
import "../style/Button.css";

const Ads = ({ mainTitle, description, button, carImg, bcAdsColor, }) => {
  return (
    <div className="adsPlatform" style={{ backgroundColor: bcAdsColor }}>
      <h2>{mainTitle}</h2>
      <p>{description}</p>
      <Button bcColor={"#54A6FF"}>{button}</Button>
      <img src={carImg} alt="" />
    </div>
  );
};

export default Ads;
