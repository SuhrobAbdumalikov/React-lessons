import PropTypes from "prop-types";
const tabs = [
  { tabTitle: "Mening qarzlarim" },
  { tabTitle: "Ularning qarzlari" },
];

const Tabbar = ({ activeTab, setActiveTab }) => {
  return (
    <ul className="nav nav-underline">
      {tabs.map((tab, index) => {
        return (
          <li
            className="nav-item"
            key={tab.tabTitle}
            onClick={() => setActiveTab(index)}
          >
            <a
              className={`nav-link ${activeTab === index ? "active" : ""} `}
              href="#"
            >
              {tab.tabTitle}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Tabbar;

Tabbar.propTypes = {
  activeTab: PropTypes.number,
  setActiveTab: PropTypes.func,
};
