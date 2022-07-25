import {  NavLink } from "react-router-dom";
const NavBar = ({user}) => {
  // console.log(user,'user inside nav')
  return (
    <nav className="navbar navbar-expand-lg bg-light" >
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Vidly</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item" >
          <NavLink className=" nav-link active" aria-current="page" to="/">Movies</NavLink>
        </li>
        {!user && <> <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">
          Register
        </NavLink>
      </li></>}
      {user && <> <li className="nav-item">
        <NavLink className="nav-link" to="/profile">
          {user.name}
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/logout">
          Logout
        </NavLink>
      </li></>}
        
      </ul>
    </div>
  </div>
</nav>
    // <ul className="nav">
    //   <li className="nav-item">
    //     <NavLink className="nav-link" to="/movies">
    //       Movies
    //     </NavLink>
    //   </li>
      // {!user && <> <li className="nav-item">
      //   <NavLink className="nav-link" to="/login">
      //     Login
      //   </NavLink>
      // </li>
      // <li className="nav-item">
      //   <NavLink className="nav-link" to="/register">
      //     Register
      //   </NavLink>
      // </li></>}
      // {user && <> <li className="nav-item">
      //   <NavLink className="nav-link" to="/profile">
      //     {user.name}
      //   </NavLink>
      // </li>
      // <li className="nav-item">
      //   <NavLink className="nav-link" to="/logout">
      //     Logout
      //   </NavLink>
      // </li></>}
    // </ul>
  );
};

export default NavBar;
