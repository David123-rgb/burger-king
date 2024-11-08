import PlantainRegularCubes from "../../assets/Plantain-Cubes-Regular-1024x1024.png";
import PotatoCubes from "../../assets/Potato-Cubes-Regular-1024x1024.png";
import YamFries from "../../assets/Yam-Fries-Regular-1024x1024.png";
import ChickenWings from "../../assets/chicken-wings-1024x659.jpg";
import ChiliCheese from "../../assets/chili-cheese-1024x659.jpg";
import ChickenNuggets from "../../assets/chicken-nuggets-1024x659.jpg";
import OnionRings from "../../assets/onion-rings-1024x659.jpg";
import Fries from "../../assets/fries-1024x659.jpg";
import { MenuNewsCard } from "./MenuNewsCard";

export const SidesNews = () => {
  const cards = [
    {
      id: 1,
      image: PlantainRegularCubes,
      alt: "Plantain Cubes image",
      title: "Plantain Cubes",
      link: "https://www.burger-king.ng/menu/sides/plantain-cubes",
    },
    {
      id: 2,
      image: PotatoCubes,
      alt: "Potato Cubes image",
      title: "Potato Cubes",
      link: "https://www.burger-king.ng/menu/sides/potato-cubes",
    },
    {
      id: 3,
      image: YamFries,
      alt: "Yam Fries image",
      title: "Yam Fries",
      link: "https://www.burger-king.ng/menu/sides/yam-fries",
    },
    {
      id: 4,
      image: ChiliCheese,
      alt: "Chicken Wings image",
      title: "Chicken Wings",
      link: "https://www.burger-king.ng/menu/sides/chicken-wings/",
    },
    {
      id: 5,
      image: ChickenWings,
      alt: "Cheesy Bites image",
      title: "Cheesy Bites",
      link: "https://www.burger-king.ng/menu/sides/cheesy-bites/",
    },
    {
      id: 6,
      image: ChickenNuggets,
      alt: "Chicken Nuggets image",
      title: "Chicken Nuggets",
      link: "https://www.burger-king.ng/menu/sides/chicken-nuggets/",
    },
    {
      id: 7,
      image: OnionRings,
      alt: "Onion Rings image",
      title: "Onion Rings",
      link: "https://www.burger-king.ng/menu/sides/onion-rings/",
    },
    {
      id: 8,
      image: Fries,
      alt: "BK Fries image",
      title: "BK Fries",
      link: "https://www.burger-king.ng/menu/sides/classic-fries/",
    },
  ];

  return (
    <>
      <div className="news-container">
        <div className="news-title">
          <div className="news-heading">
            <div className="news-title-1">
              {/* <h2 className="News">News</h2> */}
            </div>
          </div>

          <div className="card">
            {cards.map((card, index) => {
              return (
                <MenuNewsCard
                  image={card.image}
                  title={card.title}
                  // content={card.content}
                  link={card.link}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
