import { FaPaperPlane } from "react-icons/fa";
import React, { useState } from "react";
import face from "../../assets/BK_ILLUSTRATION_PICKLE_EYE_MASK_ST_FC_RGB-2-1-1.png";
import { MdClear } from "react-icons/md";

const StoreLocator = () => {
  const [address, setAddress] = useState("");
  const [isFocused, setIsFocused] = useState("");

  const handleFocused = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
    setIsFocused(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Searching for:", address);
  };
  return (
    <>
      <div className="store-locator">
        <div className="store-locator-container">
          <div className="store-locator-content">
            <h2>Store locator</h2>
            <p>Find a location nearby</p>

            <form onSubmit={handleSubmit} className="search-form">
              <input
                type="text"
                placeholder="Your address"
                value={address}
                onChange={(e) => handleFocused(e)}
                className="search-input"
              />
              <button type="submit" className="search-button">
                {address != "" ? (
                  // <MdClear  onClick={(e) => (setAddress = "")} />
                  <MdClear size={24} onClick={(e) => setAddress("")} />
                ) : (
                  <FaPaperPlane size={24} />
                )}
              </button>
            </form>
          </div>

          <div className="illustration">
            <div className="character">
              <img src={face} alt="a face someone" width={"50%"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StoreLocator;
