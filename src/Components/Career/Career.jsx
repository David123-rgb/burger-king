import { NavBar } from "../home/Navbar";
import { Footer } from "../footer/Footer";
import GridImage from "../../assets/gallery_.png";

export const Career = () => {
  return (
    <>
      <NavBar />
      <div className="Career_Container">
        <div className="career-title1">
          <h1 className="career-t">Your Career,</h1>
          <br />
        </div>

        <div className="career-title1">
          <h1 className="career-t">Your Way</h1>
          <br />
        </div>

        <div className="career-img">
          <img src={GridImage} alt="Grid Image" className="Career-i" />
        </div>

        <div className="career-description">
          <br />
          <h2 className="career-D">
            We may be the King, <br /> but around here, my friend, <br /> YOU
            rule your career. <br />
          </h2>
        </div>

        <div className="career-paragraph">
          <br />
          <p className="career-P">
            You get to do things your way, and be, well, just you. <br /> The
            team's a proper team. We have a laugh, and we've got your back.{" "}
            <br /> And because we are shaking up fast food and opening
            restaurants like <br /> nobody's business, you get to be a part of
            something (royally) huge. <br /> It is only what "one" deserves.{" "}
            <br />
          </p>
        </div>

        <div className="career-button">
          <a href="https://www.burger-king.ng/join_bk_team/">
            <button className="career-B">
              <p className="Career-BP">Find the King Vacancy</p>
            </button>
            <br />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};
