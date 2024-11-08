// import "./App.css";
import { NavBar } from "../home/Navbar";
import HeroSlider from "../home/HeroSlider";
import StoreLocator from "../home/StoreLocator";
import { Download } from "../home/Download";
import { News } from "../home/News";
import { Footer } from "../footer/Footer";

export const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSlider />
      <StoreLocator />
      <Download />
      <News />
      <Footer />
    </>
  );
};
