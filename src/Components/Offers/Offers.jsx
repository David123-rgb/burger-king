import { Footer } from "../footer/Footer";
import { NavBar } from "../home/Navbar";

export const Offers = () => {
  return (
    <>
      <NavBar />
      <div className="offers">
        <h2 className="offers-h2">No coupons available at the moment.</h2>
      </div>
      <Footer />
    </>
  );
};
