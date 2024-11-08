import { Footer } from "../footer/Footer";
import { NavBar } from "../home/Navbar";
import { FaPaperPlane } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import React, { useState, useEffect } from "react";
import { BasicMap } from "./BasicMap";

function handleClick(event) {
  event.preventDefault();

  // console.info("You clicked a breadcrumb.");
}

export const Restuarant = () => {
  const [address, setAddress] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const handleFocused = (e) => {
    setAddress(e.target.value);
    setIsFocused(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function LocationMarker() {
    const [position, setPosition] = useState(null);

    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return (
    <>
      <NavBar />
      <section className="sidenav">
        <div
          className="sidebar"
          style={{
            height: "90vh",
            width: "50vw",
            overflowY: "scroll",
            padding: "1rem",
          }}
        >
          <div
            role="presentation"
            onClick={handleClick}
            className="breadcrumb1"
          >
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="#502314" href="/">
                Home
              </Link>
              <Link
                underline="hover"
                color="#d62300"
                href="/material-ui/react-breadcrumbs/"
                aria-current="page"
              >
                Restaurant
              </Link>
            </Breadcrumbs>
          </div>

          <div className="form">
            <form onSubmit={handleSubmit} className="search-form">
              <input
                type="text"
                placeholder="Please Enter Your Location"
                value={address}
                onChange={handleFocused}
                // onChange={(e) => setAddress(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">
                {address !== "" ? (
                  <MdClear size={24} onClick={() => setAddress("")} />
                ) : (
                  <FaPaperPlane size={24} />
                )}
              </button>
            </form>
          </div>

          <div className="fgb-header">
            <h2 className="fgb-title2">Restaurant</h2>
          </div>

          <div className="location">
            <div className="location1">
              <a href="https://www.burger-king.ng/restaurants/274-ajose-adeogun/?id=5">
                <h5 className="location-title">Victoria Island</h5>
              </a>
              <p className="location-subtitle">274 Ajose adeogun</p>
              <h3 className="location-map">Show on map</h3>
            </div>

            <div className="location1">
              <a href="https://www.burger-king.ng/restaurants/1-bisway-st-maroko-lekki?id=394">
                <h5 className="location-title">Palms</h5>
              </a>
              <p className="location-subtitle">1 Bisway St, Maroko, Lekki</p>
              <h3 className="location-map">Show on map</h3>
            </div>

            <div className="location1">
              <a href="https://www.burger-king.ng/restaurants/274-ajose-adeogun/?id=5">
                <h5 className="location-title">Lekki</h5>
              </a>
              <p className="location-subtitle">
                11b Victoria Arobieke St, Lekki Phase 1
              </p>
              <h3 className="location-map">Show on map</h3>
            </div>
          </div>
        </div>

        <BasicMap />
      </section>
      <Footer />
    </>
  );
};
