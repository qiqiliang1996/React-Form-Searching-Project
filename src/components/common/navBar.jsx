import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">
          Vidly
        </Link>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/movies">
          Movies
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/customer">
          Customer
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/rental">
          Rental
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
