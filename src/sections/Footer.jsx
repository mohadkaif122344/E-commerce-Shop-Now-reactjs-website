import React, { useEffect } from "react";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import google from "../assets/google.jpg";
import apple from "../assets/apple.jpg";
import pay1 from "../assets/pay-1.jpg";
import pay2 from "../assets/pay-2.jpg";
import pay3 from "../assets/pay-3.jpg";
import pay4 from "../assets/pay-4.jpg";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ offset: 100, duration: 500, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  return (
    <div
      id="contact"
      className="w-full flex flex-col justify-center items-center dark:bg-gray-900 dark:text-white"
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="w-full bg-purple-400 lg:px-20 px-10 py-8 grid lg:grid-cols-6 grid-cols-2 justify-center items-center gap-10"
      >
        {[client1, client2, client3, client4, client5, client6].map(
          (client, i) => (
            <img
              key={i}
              src={client}
              alt=""
              className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
            />
          )
        )}
      </div>

      <div className="w-full lg:px-20 px-5 py-[60px] bg-gray-300 dark:bg-gray-900 dark:text-white grid lg:grid-cols-[auto,auto,auto,auto,auto] grid-cols-1 gap-10 lg:gap-3">
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-start items-start gap-10 grow"
        >
          <div className="flex flex-col justify-start items-start gap-4">
            <h1 className="text-4xl font-bold hover:text-white text-amber-600 underline italic ">
              Tech Shop
            </h1>
            <p className="text-gray-500 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,{" "}
              <br />
              labore minima. Fuga vitae cum sapiente corporis libero neque{" "}
              <br />
              architecto cupiditate velit minima est dolores dignissimos,
              <br />
              facilis labore laboriosam? Expedita, impedit?
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <h1 className="text-black text-xl font-semibold dark:text-white">
              Download our app
            </h1>
            <div className="flex justify-start items-center gap-4">
              <img src={google} alt="" />
              <img src={apple} alt="" />
            </div>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-delay="200">
          <h1 className="text-black text-xl font-semibold dark:text-white">
            Useful Links
          </h1>
          <ul className="mt-8 flex flex-col justify-start items-start gap-2">
            {["Home", "About", "Services", "Blogs", "Contact"].map(
              (link, i) => (
                <li
                  key={i}
                  className="text-gray-500 cursor-pointer hover:text-black"
                >
                  {link}
                </li>
              )
            )}
          </ul>
        </div>

        <div data-aos="zoom-in" data-aos-delay="200">
          <h1 className="text-black text-xl font-semibold dark:text-white">
            Information
          </h1>
          <ul className="mt-8 flex flex-col justify-start items-start gap-2">
            {[
              "Return Policy",
              "Privacy Policy",
              "Refund Policy",
              "Agreement",
              "We Our Brand",
            ].map((info, i) => (
              <li
                key={i}
                className="text-gray-500 cursor-pointer hover:text-black"
              >
                {info}
              </li>
            ))}
          </ul>
        </div>

        <div data-aos="zoom-in" data-aos-delay="200">
          <h1 className="text-black text-xl font-semibold dark:text-white">
            Top Category
          </h1>
          <ul className="mt-8 flex flex-col justify-start items-start gap-2">
            {[
              "Wireless Headphone",
              "Bluetooth Speakers",
              "Portable Devices",
              "Monio live camera",
              "Movie project T6",
            ].map((cat, i) => (
              <li
                key={i}
                className="text-gray-500 cursor-pointer hover:text-black"
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <div data-aos="zoom-in" data-aos-delay="200">
          <h1 className="text-black text-xl font-semibold dark:text-white">
            Contact Info
          </h1>
          <ul className="mt-8 flex flex-col justify-start items-start gap-2">
            <li className="text-gray-500">Phone: +91 222 333 5550</li>
            <li className="text-gray-500">Email: info@gmail.com</li>
            <li className="text-gray-500">
              01 Broadway, 2th floor,
              <br /> orchard view, London, UK
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full lg:px-20 px-5 py-[40px] bg-gray-200 dark:bg-gray-900 dark:text-white">
        <hr className="border-t border-gray-300 py-3" />
        <div className="w-full flex lg:flex-row flex-col justify-between items-center lg:gap-4 gap-10">
          <div className="lg:w-[20%] w-full flex justify-center items-center gap-4">
            {[pay1, pay2, pay3, pay4].map((pay, i) => (
              <img key={i} src={pay} alt="" className="w-[50px] rounded-lg" />
            ))}
          </div>

          <div className="lg:w-[60%] w-full flex lg:flex-row flex-col justify-center items-center gap-4 flex-grow">
            <h1 className="text-black font-semibold text-2xl dark:text-white">
              Subscribe Newsletter
            </h1>
            <div className="w-80 flex lg:flex-row flex-col gap-4">
              <input
                type="email"
                placeholder="Enter valid email"
                className=" w-80 capitalize text-white bg-gray-300 px-6 py-3 rounded-lg border:w-auto "
              />
              <button className="bg-purple-400 lg:w-auto w-full text-white hover:bg-slate-600 hover:text-black px-6 py-3 rounded-lg font-semibold ">
                SUBMIT
              </button>
            </div>
          </div>

          <div className="lg:w-[20%] w-full">
            <p className="text-gray-500 lg:text-end text-center">
              © 2025 Powered by Debug Entity
            </p>
          </div>
        </div>
      </div>

      <div
        id="icon-box"
        className="bg-themepurple text-white p-3 rounded-full hover:bg-themeyello hover:text-black cursor-pointer fixed lg:bottom-6 right-6 bottom-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="w-[35px] h-[35px]" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
