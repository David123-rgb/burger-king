import Burgerlogo from "../../assets/Logo-3-1.svg";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";
import Twitter from "../../assets/Twitter.svg";
import Youtube from "../../assets/Youtube.svg";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-title">
            <a href="https://www.burger-king.ng/">
              <img src={Burgerlogo} alt="The Burger Logo" width={"150px"} />
            </a>
          </div>

          <div className="footer-row1">
            <h5 className="footer-row-title">BK® INFO</h5>

            <p className="footer-row-link">
              <a href="https://www.burger-king.ng/about-bk/">About BK</a>
            </p>

            <p className="footer-row-link">
              <a href="https://www.burger-king.ng/privacy-policy/">
                Privacy Policy
              </a>
            </p>

            <p className="footer-row-link">
              <a href="https://www.burger-king.ng/reach-out/">
                Reach out to US
              </a>
            </p>

            <p className="footer-row-link">
              <a href="https://mega.nz/file/49hBXIKQ#hWhvDUeH91ZGNkZfB9AiADeTVKUQfgNY5MfN32k9nv0">
                Terms and Conditions
              </a>
            </p>
          </div>

          <div className="footer-row2">
            <h5 className="footer-row-title">BK® Cares</h5>

            <p className="footer-row-link">
              <a href="https://www.burger-king.ng/allergens">Allergens Info</a>
            </p>

            <p className="footer-row-link">
              <a href="https://www.burger-king.ng/foodquality">Food Quality</a>
            </p>

            <p className="footer-row-link">
              <a href="https://www.burger-king.ng/responsibility">
                Responsibility
              </a>
            </p>
          </div>

          <div className="footer-row3">
            <h5 className="footer-row-title">BK® and YOU</h5>

            <p className="footer-row-link">
              <a href="https://www.burger-king.ng/careers">Careers</a>
            </p>

            <p className="footer-row-link">
              <a href="https://www.burger-king.ng/privacy-policy">
                Privacy policy
              </a>
            </p>
          </div>
        </div>

        <hr className="footer-divider"></hr>

        <div className="footer-copyright-and-icons">
          <div className="footer-copyright">
            <span className="footer-copyright-title">
              TM & Copyright 2021 Burger King Corporation. All Rights Reserved.
            </span>
          </div>

          <div className="footer-icons">
            <a href="https://www.facebook.com/burgerkingnaija">
              <img src={Facebook} alt="Facebook Account" />
            </a>

            <a href="https://www.instagram.com/burgerkingnaija/">
              <img src={Instagram} alt="Instagram Account" />
            </a>

            <a href="https://www.twitter.com/">
              <img src={Twitter} alt="Twitter Account" />
            </a>

            <a href="https://www.youtube.com/">
              <img src={Youtube} alt="Youtube Channel" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
