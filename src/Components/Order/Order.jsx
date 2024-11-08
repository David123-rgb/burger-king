import React, { useState } from "react";
import { Footer } from "../footer/Footer";
import logo from "../../assets/Burger-King-logo.svg";
import { Link } from "react-router-dom";
import Facebook from "../../assets/Facebook.svg";
import homeImage from "../../assets/homeImage_6698d1b71eb46.jpg";
import { AccordionTransition } from "./Accordion";
// import { News } from "../home/News";
import { OrderNews } from "./OrderNews";

const SignInModal = ({ onClose }) => {
  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target.className === "modal-overlay") onClose();
      }}
    >
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <h2 className="modal-title">Sign in or Create account</h2>

        <button className="facebook-button">
          <img src={Facebook} alt="Facebook Account" />
          <p className="Order-p">Continue with Facebook</p>
        </button>

        <button className="email-button">Continue with email</button>
      </div>
    </div>
  );
};

export const Order = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <nav className="navbar ">
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
            <Link to="/news" className="nav-links">
              News
            </Link>
          </li>
          <li>
            <button className="nav-button" onClick={handleClick}>
              Register
            </button>
          </li>
        </ul>
      </nav>

      {/* Render modal when isModalOpen is true */}
      {isModalOpen && <SignInModal onClose={() => setIsModalOpen(false)} />}

      <div className="imgcontainer">
        <AccordionTransition />
        <div className="homeimg">
          {/* <img src={homeImage} alt="" width={"100%"} /> */}
        </div>
      </div>

      <OrderNews />
      <Footer />
    </>
  );
};
