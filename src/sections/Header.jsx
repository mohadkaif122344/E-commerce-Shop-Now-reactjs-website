import React, { useEffect, useState, useContext } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import { FaMoon, FaSun } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import LoginSignup from "./LoginSignup";
import { CartContext } from "../sections/CartContext";

const Header = () => {
  const { cartItems, increaseQty, decreaseQty, removeItem } =
    useContext(CartContext);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ offset: 100, duration: 500, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const navItems = [
    { link: "Home", path: "hero" },
    { link: "About", path: "category" },
    { link: "Products", path: "products" },
    { link: "Testimonials", path: "testimonials" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav className="w-full bg-blue-100 dark:bg-gray-500 sticky top-0 z-50 px-4 lg:px-16 py-4 flex justify-between items-center">
      <h1 className="font-bold text-2xl lg:text-[30px] underline italic flex-shrink-0 hover:bg-teal-600 dark:text-amber-600 px-4 py-2 rounded-lg transition-all duration-300 hover:text-white text-amber-600">
        Tech Shop
      </h1>

      <ul className="hidden lg:flex gap-10">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-black dark:text-white text-sm uppercase cursor-pointer px-4 py-2 font-extrabold rounded-lg hover:bg-blue-300 hover:text-white"
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:scale-110 transition-transform"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <div className="hidden lg:flex items-center overflow-hidden rounded-lg px-2 py-1 max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow px-2 py-2 bg-transparent text-black dark:bg-gray-100 focus:outline-none rounded-l-lg border border-gray-300 capitalize"
          />
          <button className="flex items-center justify-center px-4 bg-gray-800 text-white hover:bg-slate-600 py-3 rounded-r-lg font-semibold">
            <FaSearch />
          </button>
        </div>

        <LoginSignup
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="hidden lg:flex gap-2 px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 hover:scale-105 transition-transform hover:bg-gray-500 h-10 cursor-pointer text-black dark:text-white"
        >
          <IoPerson className="h-6 w-7" />
        </button>

        <div className="relative">
          <FaShoppingCart
            className="w-8 h-8 cursor-pointer bg-gray-300 dark:bg-gray-700 p-1 rounded-full text-black dark:text-white hover:scale-110 transition-transform"
            onClick={() => setIsCartOpen((prev) => !prev)}
          />
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-themepurple text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          )}
          {isCartOpen && (
            <div className="absolute top-10 right-0 w-72 sm:w-96 max-h-[500px] bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-4 z-50 overflow-y-auto">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg sm:text-xl font-semibold dark:text-white">
                  Cart Items{" "}
                </h3>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-green-500 font-bold hover:text-green-700 text-2xl sm:text-3xl p-1 rounded-full"
                >
                  ×
                </button>
              </div>{" "}
              {cartItems.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-300">
                  Your cart is empty
                </p>
              ) : (
                <div className="flex flex-col gap-3">
                  {cartItems.map((item) => {
                    const price = parseFloat(
                      item.price.toString().replace(/[^0-9.]/g, "")
                    );
                    const total = price * item.qty;
                    return (
                      <div
                        key={item.cartId}
                        className="flex justify-between items-center gap-2"
                      >
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />{" "}
                        <div className="flex flex-col flex-grow">
                          {" "}
                          <p className="font-semibold text-gray-800 dark:text-white">
                            {" "}
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-300">
                            ${price.toFixed(2)} x {item.qty} = ${" "}
                            {total.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => decreaseQty(item.cartId)}
                            className="px-2 bg-gray-200 rounded dark:bg-gray-900 dark:text-white "
                          >
                            -
                          </button>
                          <span className="dark:text-white">{item.qty}</span>
                          <button
                            onClick={() => increaseQty(item.cartId)}
                            className="px-2 bg-gray-200 rounded dark:bg-gray-900 dark:text-white "
                          >
                            +{" "}
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.cartId)}
                          className="text-red-500 font-bold hover:text-red-700 text-lg"
                        >
                          ×{" "}
                        </button>
                      </div>
                    );
                  })}
                  <div className="mt-2 border-t pt-2 flex justify-between items-center">
                    <span className="font-semibold dark:text-white text-base sm:text-lg">
                      {" "}
                      Total:
                    </span>
                    <span className="font-semibold dark:text-white text-base sm:text-lg">
                      ${" "}
                      {cartItems
                        .reduce((acc, item) => {
                          const price = parseFloat(
                            item.price.toString().replace(/[^0-9.]/g, "")
                          );
                          return acc + price * item.qty;
                        }, 0)
                        .toFixed(2)}
                    </span>
                  </div>
                  <button className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition-colors">
                    Proceed to Pay
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <FaXmark className="text-themepurple text-2xl cursor-pointer" />
          ) : (
            <FaBars className="text-themepurple text-2xl cursor-pointer" />
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col w-full bg-blue-500 absolute top-full left-0 p-4 gap-2 lg:hidden">
          <div className="flex items-center overflow-hidden rounded-lg mb-3">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow px-2 py-2 bg-white text-black focus:outline-none rounded-l-lg border border-gray-300 capitalize"
            />
            <button className="flex items-center justify-center px-4 bg-gray-800 text-white hover:bg-slate-600 py-2 rounded-r-lg font-semibold h-[44px]">
              <FaSearch />
            </button>
          </div>

          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-white uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-themeyello w-full hover:text-black text-center"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </Link>
          ))}

          <div className="mt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-themeyello hover:text-black w-full justify-center text-white font-semibold uppercase"
            >
              <IoPerson className="h-5 w-5" /> Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
