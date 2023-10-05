import { useState } from "react";
import Like from "./ui/Like";
import Input from "./ui/Input";
import likeImg from "../images/SVG/Like.svg";
import Notification from "../images/SVG/Notification.svg";
import Settings from "../images/SVG/Settings.svg";
import imageProfile from "../images/SVG/imageProfile.svg";
import "../style/NavBar.css";
import "../style/LikeModal.css";
const NavBar = ({ handleSearch, Data, takeLike }) => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggleModal = () => {
    SetIsOpen((prev) => !prev);
  };
  return (
    <div className="NavBar navContainer">
      <div className="leftSide">
        <h2>MORENT</h2>
        <Input onChange={(e) => handleSearch(e.target.value)} />
      </div>
      <div className="rightSide">
        <img src={likeImg} onClick={toggleModal} alt="like" id="likeModal" />
        <img src={Notification} alt="notification" />
        <img src={Settings} alt="settings" />
        <img src={imageProfile} alt="imagProfile" />
      </div>
      <Like
        isOpen={isOpen}
        toggleModal={toggleModal}
        Data={Data}
        takeLike={takeLike}
      ></Like>
    </div>
  );
};

export default NavBar;
