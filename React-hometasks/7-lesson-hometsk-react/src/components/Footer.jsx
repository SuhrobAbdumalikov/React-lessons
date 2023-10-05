import "../style/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="navContainer">
      <div className="topFooter">
        <div className="leftFooter">
          <h2>MORENT</h2>
          <p>
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <ul className="rightFooter">
          <li>
            <h3>About</h3>
            <a href="#0">How it works </a>
            <a href="#0">Featured</a>
            <a href="#0">Partnership</a>
            <a href="#0">Bussiness Relation</a>
          </li>
          <li>
            <h3>Community</h3>
            <a href="#0">Events</a>
            <a href="#0">Blog</a>
            <a href="#0">Podcast</a>
            <a href="#0">Invite a friend</a>
          </li>
          <li>
            <h3>Socials</h3>
            <a href="#0">Discord</a>
            <a href="#0">Instagram</a>
            <a href="#0">Twitter</a>
            <a href="#0">Facebook</a>
          </li>
        </ul>
      </div>
      <div className="bottomFooter">
        <p>©2022 MORENT. All rights reserved</p>
        <div className="rightBy">
          <a href="#0">Privacy & Policy</a>
          <a href="#0">Terms & Condition</a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
