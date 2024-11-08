import logo from "../../assets/Burger-King-logo.svg";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="Burger King Logo" />
          </Link>
        </div>
        <ul className="navlinks-1">
          <li>
            <Link to="/order" className="nav-links">
              Order
            </Link>
          </li>
          <li>
            <Link to="/menu" className="nav-links">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/offers" className="nav-links">
              Offer
            </Link>
          </li>
          <li>
            <Link to="/restaurants" className="nav-links">
              Restaurants
            </Link>
          </li>
          <li>
            <Link to="/careers" className="nav-links">
              Careers
            </Link>
          </li>
          <li>
            <Link to="/News" className="nav-links">
              News
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
