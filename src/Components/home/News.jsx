import burger1 from "../../assets/meet-the-long-kings.jpg";
import slide from "../../assets/New-Sides-Intro-Blog-1.jpg";
import artboard from "../../assets/Artboard-15-20.jpg";

import { NewsCard } from "./NewsCard";

export const News = () => {
  const cards = [
    {
      id: 1,
      image: burger1,
      alt: "image saying meet the new king",
      title: "WHAT'S BETTER THAN ONE KING?",
      content:
        "Burger king is now grilling in Nigeria and the whopper has a new home",
      link: "https://www.burger-king.ng/news/whats-better-than-one-king",
    },
    {
      id: 2,
      image: slide,
      alt: "A picture saying new alert",
      title: "NEWS SIDE ALERT!!!",
      content: "Burger king has introduced NEW SIDES to the BK SIDES GENG",
      link: "https://www.burger-king.ng/news/new-sides-alert",
    },
    {
      id: 3,
      image: artboard,
      alt: "A picture of burger saying budgeat",
      title: "BudgEat Menu Is Back",
      content: "BudgEat Menu Is Back! Ball on a BudgeEat only at a Burger king",
      link: "https://www.burger-king.ng/news",
    },
  ];

  return (
    <>
      <div className="news-container">
        <div className="news-title">
          <h2 className="News">News</h2>

          <div className="card">
            {cards.map((card, index) => {
              return (
                <NewsCard
                  image={card.image}
                  title={card.title}
                  content={card.content}
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
