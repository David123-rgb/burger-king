import burger1 from "../../assets/cc2eafb384e1a1cdf1aaafabb2efff11.jpeg";
import slide from "../../assets/e7cc7140b50385ab860b8d8d03486832.jpeg";
import artboard from "../../assets/39b1da0ecd309b87e985e00115dea93c.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { OrderNewsCard } from "./OrderNewsCard";

export const OrderNews = () => {
  const cards = [
    {
      id: 1,
      image: burger1,
      alt: "image saying meet the new king",
      title: "JOIN THE BK TEAM",
      link: "https://order.burger-king.ng/news/4/",
    },
    {
      id: 2,
      image: slide,
      alt: "A picture saying new alert",
      title: "THE WHOOPER HAS A NEW HOME",
      link: "https://order.burger-king.ng/news/2/",
    },
    {
      id: 3,
      image: artboard,
      alt: "A picture of burger saying budgeat",
      title: "THE 3K,4K,5K NAIRA MENU",
      link: "https://order.burger-king.ng/news/25/",
    },
  ];

  return (
    <>
      <div className="news-container">
        <div className="news-title">
          <div className="news-heading">
            <div className="news-title-1">
              <h2 className="News">News</h2>

              <div className="newsbutton">
                <a
                  href="https://order.burger-king.ng/news/"
                  className="news-view-action"
                >
                  {" "}
                  view all
                </a>
                {/* <p >View all</p> */}
                <button className="news-button">
                  <IoIosArrowBack />
                </button>
                <button className="news-button">
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            {cards.map((card, index) => {
              return (
                <OrderNewsCard
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
