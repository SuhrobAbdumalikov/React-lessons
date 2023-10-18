import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-gray-800">
      <nav className="flex items-center justify-between py-4 px-20">
        <div className="text-white font-workSans text-2xl tracking-widest font-extrabold">
          <NavLink to={"/"}> WSP</NavLink>
        </div>
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
      </nav>
    </div>
  );
};

export default NavBar;
