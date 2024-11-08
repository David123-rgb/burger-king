import WhooperSandwich from "../../assets/Whopper-Sandw-1024x659.jpg";
import SteakHouse from "../../assets/steakhouses-1024x659.jpg";
import BigKing from "../../assets/big-king-middle-bun-1024x659.jpg";
import DoubleWhooper from "../../assets/769_DOUBLE-WHOPPER.jpg";
import DoubleSteakHouse from "../../assets/double-steakhouse-wi-1024x659.jpg";
import BigKingXXlW from "../../assets/big-king-xxlw-1024x659.jpg";
import WhooperJr from "../../assets/whopper-jnr-1024x659.jpg";
import CheeseBurger from "../../assets/cheeseburger-sandwich-1024x659.jpg";
import Hamburger from "../../assets/hamburger-1024x659.jpg";
import DoubleCheeseBurger from "../../assets/double-cheese-burger-1024x659.jpg";
import { MenuNewsCard } from "./MenuNewsCard";

export const MenuNews = () => {
  const cards = [
    {
      id: 1,
      image: WhooperSandwich,
      alt: "Whopper® image",
      title: "Whopper®",
      link: "https://www.burger-king.ng/menu/flame-grilled-burgers/whopper",
    },
    {
      id: 2,
      image: SteakHouse,
      alt: "Steakhouse image",
      title: "Steakhouse",
      link: "https://www.burger-king.ng/menu/flame-grilled-burgers/steakhouse",
    },
    {
      id: 3,
      image: BigKing,
      alt: "Big King image",
      title: "Big King",
      link: "https://www.burger-king.ng/menu/flame-grilled-burgers/big-king",
    },

    {
      id: 4,
      image: DoubleSteakHouse,
      alt: "Double Whopper® image",
      title: "Double Whopper®",
      link: "https://www.burger-king.ng/menu/flame-grilled-burgers/double-whopper",
    },

    {
      id: 5,
      image: DoubleWhooper,
      alt: "Double Steakhouse image",
      title: "Double Steakhouse",
      link: "https://www.burger-king.ng/menu/flame-grilled-burgers/double-steakhouse",
    },

    {
      id: 6,
      image: BigKingXXlW,
      alt: "Big King XXL image",
      title: "Big King XXL",
      link: "https://www.burger-king.ng/menu/flame-grilled-burgers/big-king-xxl",
    },

    {
      id: 7,
      image: WhooperJr,
      alt: "Whopper Jr.® image",
      title: "Whopper Jr.®",
      link: "https://www.burger-king.ng/menu/flame-grilled-burgers/whopper-jr",
    },

    {
      id: 8,
      image: CheeseBurger,
      alt: "Cheeseburger image",
      title: "Cheeseburger",
      link: "https://www.burger-king.ng/menu/flame-grilled-burgers/cheeseburger/",
    },

    {
      id: 9,
      image: Hamburger,
      alt: "Hamburger image",
      title: "Hamburger",
      link: "https://www.burger-king.ng/menu/flame-grilled-burgers/hamburger-2/",
    },

    {
      id: 10,
      image: DoubleCheeseBurger,
      alt: "Double Cheeseburger image",
      title: "Double Cheeseburger",
      link: "https://www.burger-king.ng/menu/flame-grilled-burgers/double-cheeseburger/",
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
