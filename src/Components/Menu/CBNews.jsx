import OriginalChicken1 from "../../assets/original-chicken-1-1024x659.jpg";
import KingFillet from "../../assets/King-Fillet-.png";
import CrispyChicken from "../../assets/crispy-chicken-main-1024x659.jpg";
import { MenuNewsCard } from "./MenuNewsCard";

export const CBNews = () => {
  const cards = [
    {
      id: 1,
      image: OriginalChicken1,
      alt: "Chicken Royale image",
      title: "Chicken Royale",
      link: "https://www.burger-king.ng/menu/chicken-burgers/chicken-royale-2/",
    },
    {
      id: 2,
      image: KingFillet,
      alt: "King Chicken Fillet image",
      title: "King Chicken Fillet",
      link: "https://www.burger-king.ng/menu/chicken-burgers/king-chicken-fillet/",
    },
    {
      id: 3,
      image: CrispyChicken,
      alt: "Crispy Chicken image",
      title: "Crispy Chicken",
      link: "https://www.burger-king.ng/menu/chicken-burgers/crispychicken/",
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
