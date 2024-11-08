import CaramelSundae from "../../assets/caramel-sundae-1024x659.jpg";
import StrawberrySundae from "../../assets/strawberry-sundae-1024x659.jpg";
import ChocolateSundae from "../../assets/chocolate-sundae-1024x659.jpg";
import KitKatFusion from "../../assets/kit-kat-fusion-1024x659.jpg";
import { MenuNewsCard } from "./MenuNewsCard";

export const DessertsNews = () => {
  const cards = [
    {
      id: 1,
      image: CaramelSundae,
      alt: "Caramel Sundae image",
      title: "Caramel Sundae",
      link: "https://www.burger-king.ng/menu/desserts/caramel-sundae/",
    },
    {
      id: 2,
      image: StrawberrySundae,
      alt: "Strawberry Sundae image",
      title: "Strawberry Sundae",
      link: "https://www.burger-king.ng/menu/desserts/strawberry-sundae/",
    },
    {
      id: 3,
      image: ChocolateSundae,
      alt: "Chocolate Sundae image",
      title: "Chocolate Sundae",
      link: "https://www.burger-king.ng/menu/desserts/chocolate-sundae/",
    },
    {
      id: 4,
      image: KitKatFusion,
      alt: "Kit Kat Fusion image",
      title: "Kit Kat Fusion",
      link: "https://www.burger-king.ng/menu/desserts/kit-kat-fusion/",
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
