import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12 text-center flex flex-col items-center gap-3 h-72">
      <ul className="flex gap-10">
        <li>
          <NavLink
            to={"/"}
            className={"text-gray-300 hover:text-white font-medium"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"About"}
            className={"text-gray-300 hover:text-white font-medium"}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"Products"}
            className={"text-gray-300 hover:text-white font-medium"}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"Posts"}
            className={"text-gray-300 hover:text-white font-medium"}
          >
            Posts
          </NavLink>
        </li>
      </ul>
      <p className="text-gray-300">Assalomu Alaykum Hammaga!</p>
    </footer>
  );
};

export default Footer;
