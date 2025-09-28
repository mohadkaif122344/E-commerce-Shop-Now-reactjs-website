import React, { useEffect, useState, useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { products } from "../assets/export";
import { CartContext } from "../sections/CartContext";
import ProductDetailsModal from "../sections/ProductDetailsModal";

const Productsgrid = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCount, setShowCount] = useState(4);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ offset: 100, duration: 500, easing: "ease-in-out" });
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    if (products.length === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    if (products.length === 0) return;
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  let displayedProducts = [];
  if (windowWidth < 768) {
    displayedProducts = showCount === 1 ? [products[currentIndex]] : products;
  } else {
    displayedProducts = products.slice(0, showCount);
  }

  return (
    <div
      id="products"
      className="w-full lg:px-20 px-5 py-[80px] flex flex-col justify-center items-center gap-4 bg-gray-100 dark:bg-gray-900 dark:text-white"
    >
      <h1 className="text-themepurple font-semibold text-xl">
        Browse Collections
      </h1>
      <h1 className="text-black font-semibold text-[42px] leading-[50px] text-center dark:text-white">
        Trending Products
      </h1>

      <div
        className={`w-full grid ${
          windowWidth >= 768 ? "lg:grid-cols-4 gap-10" : "grid-cols-1 gap-6"
        } mt-10`}
      >
        {displayedProducts.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-300">
            No products available.
          </p>
        ) : (
          displayedProducts.map((item, index) => (
            <div
              key={item.id || index}
              className="flex flex-col justify-center items-center gap-2 bg-white p-4 rounded-lg relative dark:bg-gray-900"
            >
              <img
                src={item.img}
                alt={item.name || "product"}
                className="w-full h-[250px] object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedProduct(item)}
              />

              <div className="flex justify-center items-center gap-3 absolute top-[20px]">
                <div
                  className="bg-themepurple hover:bg-themeyello hover:text-black rounded-full p-3 text-white cursor-pointer"
                  onClick={() => setSelectedProduct(item)}
                >
                  <MdOutlineRemoveRedEye />
                </div>
                <div className="bg-themepurple hover:bg-themeyello hover:text-black rounded-full p-3 text-white">
                  <FaRegHeart />
                </div>
                <div
                  className="bg-themepurple hover:bg-themeyello hover:text-black rounded-full p-3 text-white cursor-pointer"
                  onClick={() => addToCart(item)}
                >
                  <MdAddShoppingCart />
                </div>
              </div>

              <h1 className="text-lg text-gray-400">{item.category}</h1>
              <h1 className="text-xl text-black dark:text-white">
                {item.name}
              </h1>
              <h1 className="text-lg text-themepurple dark:text-white">
                ${item.price}
              </h1>
            </div>
          ))
        )}
      </div>

      {windowWidth < 768 && showCount === 1 && products.length > 1 && (
        <div className="flex justify-center items-center gap-4 mt-4">
          <button
            onClick={prevSlide}
            className="px-4 py-2 bg-themepurple text-white rounded-full hover:bg-themeyello"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-2 bg-themepurple text-white rounded-full hover:bg-themeyello"
          >
            &#10095;
          </button>
        </div>
      )}

      {products.length > (windowWidth < 768 ? 1 : 4) && (
        <button
          onClick={() =>
            setShowCount(
              showCount === (windowWidth < 768 ? 1 : 4)
                ? products.length
                : windowWidth < 768
                ? 1
                : 4
            )
          }
          className="bg-themepurple hover:bg-themeyello text-white hover:text-black font-semibold px-8 py-3 rounded-lg mt-8"
        >
          {showCount === (windowWidth < 768 ? 1 : 4)
            ? "VIEW MORE"
            : "VIEW LESS"}
        </button>
      )}

      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      )}
    </div>
  );
};

export default Productsgrid;
