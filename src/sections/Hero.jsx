import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from "../assets/headset1.png";
import earbuds from "../assets/earbud2.png";
import dslr from "../assets/dslr1.png";
import { FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  const Slide = ({ bgImage, title, subtitle, highlight, button, quote }) => (
    <div>
      <div
        className="relative w-full min-h-[600px] sm:min-h-[700px] lg:min-h-[750px] flex flex-col justify-center items-start px-6 sm:px-12 md:px-20 gap-6 sm:gap-8 lg:gap-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 -z-10" />
        <h1
          data-aos="zoom-in"
          data-aos-delay="50"
          className="text-themeyello border rounded-lg border-themeyello py-1 sm:py-2 px-4 sm:px-6 text-lg sm:text-xl bg-black/40"
        >
          Get upto Discounts 80% Off
        </h1>
        <h1
          data-aos="zoom"
          data-aos-delay="100"
          className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-[120px] uppercase font-bold leading-tight sm:leading-snug lg:leading-[120px]"
        >
          {title}
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="150"
          className="text-white text-lg sm:text-xl md:text-2xl"
        >
          {subtitle}{" "}
          <span className="text-themeyello font-semibold">{highlight}</span>
        </h1>
        <button
          data-aos="zoom-in"
          data-aos-delay="200"
          className="bg-themeyello px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-black font-semibold text-sm sm:text-base hover:bg-yellow-400 transition"
        >
          {button}
        </button>
        {quote && (
          <FaQuoteLeft className="text-themepurple text-2xl sm:text-4xl mt-4" />
        )}
      </div>
    </div>
  );

  return (
    <div
      id="hero"
      className="w-full flex justify-center items-center dark:bg-gray-900 dark:text-white"
    >
      <Slider className="w-full" {...settings}>
      
        <Slide
          bgImage={dslr}
          title="DSLR 360 Camera"
          subtitle="100% trusted"
          highlight="Electronics Gadgets"
          button="ONLINE COLLECTIONS"
        />

        <Slide
          bgImage={earbuds}
          title="Wireless Earbuds"
          subtitle="100% trusted"
          highlight="Electronics Gadgets"
          button="ONLINE COLLECTIONS"
        />

        <Slide
          bgImage={headset}
          title="Wireless Headset"
          subtitle="100% trusted"
          highlight="Electronics Gadgets"
          button="ONLINE COLLECTIONS"
          quote={true}
        />
      </Slider>
    </div>
  );
};

export default Hero;
