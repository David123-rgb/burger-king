import React from "react";
import { Link as Link1 } from "react-router-dom";
import { Link } from "react-scroll"; // Rename Scroll's Link
import logo from "../../assets/Burger-King-logo.svg";
import ActiveLastBreadcrumb from "../Order/ActiveLastBreadcrumb";
import { Footer } from "../footer/Footer";
import { MenuNews } from "./MenuNews";
import { CBNews } from "./CBNews";
import { SidesNews } from "./SidesNews";
import { DrinksNews } from "./DrinksNews";
import { DessertsNews } from "./Desserts";

export const Menu = () => {
  return (
    <>
      <div className="nav">
        <nav className="navbar ">
          <div className="logo">
            <Link1 to={"https://www.burger-king.ng/"}>
              <img src={logo} alt="Burger King Logo" />
            </Link1>
          </div>
          <ul className="navlinks-1">
            <li>
              <Link1 to="/order" className="nav-links">
                Order
              </Link1>
            </li>
            <li>
              <Link1 to="/menu" className="nav-links">
                Menu
              </Link1>
            </li>
            <li>
              <Link1 to="/offers" className="nav-links">
                Offer
              </Link1>
            </li>
            <li>
              <Link1 to="/restaurants" className="nav-links">
                Restaurants
              </Link1>
            </li>
            <li>
              <Link1 to="/careers" className="nav-links">
                Careers
              </Link1>
            </li>
            <li>
              <Link1 to="/news" className="nav-links">
                News
              </Link1>
            </li>
          </ul>
        </nav>

        <nav className="secondary-nav">
          <ul className="navlinks-2">
            <li>
              <Link
                to="Flammed Grilled Burgers"
                smooth={true}
                duration={500}
                className="menulinks"
                spy={true}
                offset={-70}
              >
                Flammed Grilled Burgers
              </Link>

              <Link
                to="Chicken Burger"
                smooth={true}
                duration={500}
                className="menulinks"
                spy={true}
                offset={-70}
              >
                Chicken Burgers
              </Link>

              <Link
                to="Sides"
                smooth={true}
                duration={500}
                className="menulinks"
                spy={true}
                offset={-70}
              >
                Sides
              </Link>

              <Link
                to="Drinks"
                smooth={true}
                duration={500}
                className="menulinks"
                spy={true}
                offset={-70}
              >
                Drinks
              </Link>

              <Link
                to="Desserts"
                smooth={true}
                duration={500}
                className="menulinks"
                spy={true}
                offset={-70}
              >
                Desserts
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <ActiveLastBreadcrumb />
      <section className="fgb">
        <section id="Flammed Grilled Burgers">
          <div className="fgb-header">
            <h2 className="fgb-title">Flammed Grilled Burgers</h2>
          </div>
          <MenuNews />
        </section>

        <section id="Chicken Burger">
          <div className="fgb-header">
            <h2 className="fgb-title1">Chicken Burger</h2>
          </div>
          <CBNews />
        </section>

        <section id="Sides">
          <div className="fgb-header">
            <h2 className="fgb-title1">Sides</h2>
          </div>
          <SidesNews />
        </section>

        <section id="Drinks">
          <div className="fgb-header">
            <h2 className="fgb-title1">Drinks</h2>
          </div>
          <DrinksNews />
        </section>

        <section id="Desserts">
          <div className="fgb-header">
            <h2 className="fgb-title1">Desserts</h2>
          </div>
          <DessertsNews />
        </section>
      </section>
      <Footer />
    </>
  );
};
