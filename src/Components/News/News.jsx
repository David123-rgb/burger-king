import { Footer } from "../footer/Footer";
import { NavBar } from "../home/Navbar";
import { NewsCard } from "../home/NewsCard";
import burger1 from "../../assets/meet-the-long-kings.jpg";
import slide from "../../assets/New-Sides-Intro-Blog-1.jpg";
import artboard from "../../assets/news-card.jpg";
import artboard1 from "../../assets/Artboard-1best-sellers-1.jpg";

export const News = () => {
  const cards = [
    {
      id: 1,
      image: slide,
      alt: "A picture saying new alert",
      title: "NEWS SIDE ALERT!!!",
      content: "Burger king has introduced NEW SIDES to the BK SIDES GENG",
      link: "https://www.burger-king.ng/news/new-sides-alert",
    },
    {
      id: 2,
      image: burger1,
      alt: "image saying meet the new king",
      title: "WHAT'S BETTER THAN ONE KING?",
      content:
        "Burger king is now grilling in Nigeria and the whopper has a new home",
      link: "https://www.burger-king.ng/news/whats-better-than-one-king",
    },

    {
      id: 3,
      image: artboard1,
      alt: "Best Sellers of the Month image",
      title: "Best Seller of the",
      content:
        "Say Hello to our Best Sellers of the month - The Whopper, Steakhouse, and the Big King.",
      link: "https://www.burger-king.ng/news/second-post/",
    },
    {
      id: 4,
      image: artboard,
      alt: "THE WHOPPER HAS A NEW HOME image",
      title: "THE WHOPPER HAS A NEW",
      content:
        "Burger King is now Grilling in Nigeria and the Whopper has a new Home!!",
      link: "https://www.burger-king.ng/news/bk-naija/",
    },
  ];

  return (
    <>
      <NavBar />
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
      <Footer />
    </>
  );
};
