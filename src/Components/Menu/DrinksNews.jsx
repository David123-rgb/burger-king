import EvaWater from "../../assets/eva-water-1024x659.jpg";
import Sprite from "../../assets/sprite-1024x659.jpg";
import Coke from "../../assets/coke-1024x659.jpg";
import { MenuNewsCard } from "./MenuNewsCard";

export const DrinksNews = () => {
  const cards = [
    {
      id: 1,
      image: EvaWater,
      alt: "Eva Water image",
      title: "Eva Water",
      link: "https://www.burger-king.ng/menu/drinks/eva-water/",
    },
    {
      id: 2,
      image: Sprite,
      alt: "Sprite image",
      title: "Sprite",
      link: "https://www.burger-king.ng/menu/drinks/sprite/",
    },
    {
      id: 3,
      image: Coke,
      alt: "Coke image",
      title: "Coke",
      link: "https://www.burger-king.ng/menu/drinks/coke/",
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
