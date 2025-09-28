import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { reviewdata } from "../assets/export";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrowsL: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);
  return (
    <div
      id="testimonials"
      className="w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4 dark:bg-gray-900 dark:text-white"
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-themepurple text-xl font-semibold  capitalize "
      >
        1300+ Customer reviews
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-black font-semibold text-[42px] leading-[50px] text-center capitalize dark:bg-gray-900 dark:text-white "
      >
        Our Customer Love
      </h1>
      <div data-aos="zoom-in" data-aos-delay="300" className="w-full mt-10 ">
        <Slider
          className="w-full dark:bg-gray-900 dark:text-white"
          {...settings}
        >
          {reviewdata.map((item, index) => (
            <div>
              <div
                key={index}
                className="w-full flex flex-col justify-center items-center gap-4 lg:p-10 p-3 dark:bg-gray-900 dark:text-white"
              >
                <img
                  src={item.img}
                  alt=""
                  className="rounded-full w-[100px] m-auto "
                />
                <div className="flex justify-center items-center gap-1 dark:bg-gray-900 dark:text-white">
                  <FaStar className="text-themepurple" />
                  <FaStar className="text-themepurple" />
                  <FaStar className="text-themepurple" />
                  <FaStar className="text-themepurple" />
                  <FaStar className="text-themepurple" />
                </div>
                <p className="text-center text-gray-600 text-lg dark:text-gray-400">
                  {item.para}
                </p>
                <div className="flex justify-center items-center gap-5">
                  <FaQuoteLeft className="fill-themepurple size-16" />
                  <div className="w-full flex flex-col justify-center items-start">
                    <h1 className="text-black text-xl capitalize font-semibold dark:bg-gray-900 dark:text-white">
                      {item.name}
                    </h1>
                    <h1 className="text-gray-500 capitalize dark:bg-gray-900 dark:text-gray-300">
                      {item.post}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
