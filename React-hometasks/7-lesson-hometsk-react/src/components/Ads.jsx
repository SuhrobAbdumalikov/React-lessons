import "../style/Ads.css";
import "../style/Button.css";

const Ads = ({ mainTitle, description, button, carImg, bcAdsColor }) => {
  return (
    <div className="adsPlatform" style={{ backgroundColor: bcAdsColor }} data-aos="zoom-in">
      <h2>{mainTitle}</h2>
      <p>{description}</p>
      <button className="adsBtn">{button}</button>
      <img src={carImg} alt="carImg" />
    </div>
  );
};

export default Ads;
