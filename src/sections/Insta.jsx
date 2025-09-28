import React, { useEffect, useState } from "react";
import insta1 from "../assets/insta-1.jpg";
import insta2 from "../assets/insta-2.jpg";
import insta3 from "../assets/insta-3.jpg";
import insta4 from "../assets/insta-4.jpg";
import insta5 from "../assets/insta-5.jpg";
import insta6 from "../assets/insta-6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Insta = () => {
  const images = [insta1, insta2, insta3, insta4, insta5, insta6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full lg:px-20 px-5 py-[80px] bg-white flex flex-col justify-center items-center gap-4 dark:bg-gray-900 dark:text-white ">
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-themepurple text-xl font-semibold capitalize"
      >
        Our Instagram Shop
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="w-full text-center capitalize font-semibold text-[42px] leading-[50px]  dark:bg-gray-900 dark:text-white"
      >
        Follow on Instagram
      </h1>

      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="w-full flex justify-center items-center mt-8"
      >
        <img
          src={images[currentIndex]}
          alt={`insta-${currentIndex + 1}`}
          className="rounded-lg w-full lg:w-1/3 object-cover transition-all duration-700"
        />
      </div>
    </div>
  );
};

export default Insta;
