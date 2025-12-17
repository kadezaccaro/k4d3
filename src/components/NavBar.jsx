import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="navbar">
      <Link to="/">
        <h1 id="logo">K4D3&trade;</h1>
      </Link>

      <div id="nav-links">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
