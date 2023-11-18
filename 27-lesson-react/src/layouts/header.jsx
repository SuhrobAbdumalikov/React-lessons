import { NavLink } from "react-router-dom";

function Header() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">
          Todos
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/posts">
          Posts
        </NavLink>
      </li>
    </ul>
  );
}

export default Header;
