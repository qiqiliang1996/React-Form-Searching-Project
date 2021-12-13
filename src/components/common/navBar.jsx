import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
