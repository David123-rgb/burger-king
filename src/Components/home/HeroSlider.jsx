import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Images
import hero from "../../assets/hero-section-1.png";
import magic from "../../assets/Magic-web.png";
import way from "../../assets/Have-it-your-Way-web.jpg";
import Way2 from "../../assets/Have-it-your-Way-edit-2.jpg";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: hero,
      alt: "burger",
    },
    {
      id: 2,
      image: magic,
      alt: "A picture of someone holding a burger",
    },
    {
      id: 3,
      image: way,
      alt: "A picture of burger saying Have it your Way",
    },
    {
      id: 4,
      image: Way2,
      alt: "A picture of burger saying Have it your Way edit 2",
    },
  ];

  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={slide.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
