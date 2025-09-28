import React, { useEffect, useState } from "react";
import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";
import cat4 from "../assets/cat4.jpg";
import cat5 from "../assets/cat5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Category = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const products = [
    {
      id: 1,
      title: "Portable Speaker",
      desc: "High quality portable Bluetooth speaker with deep bass and long battery life.",
      image: cat1,
    },
    {
      id: 2,
      title: "Wireless Earbuds",
      desc: "Lightweight wireless earbuds with noise cancellation and clear sound.",
      image: cat2,
    },
    {
      id: 3,
      title: "Smart Watch",
      desc: "Track your fitness, sleep, and heart rate with this stylish smartwatch.",
      image: cat3,
    },
    {
      id: 4,
      title: "Gaming Headset",
      desc: "Comfortable over-ear gaming headset with surround sound and noise-cancel mic.",
      image: cat4,
    },
    {
      id: 5,
      title: "Wireless Keyboard",
      desc: "Slim wireless keyboard with smooth keys and long battery backup.",
      image: cat5,
    },
  ];

  let displayedProducts = products;
  if (windowWidth < 1024 && !showAll) {
    displayedProducts = products.slice(0, 2);
  }

  return (
    <div className="w-full bg-gray-100 lg:px-20 px-5 pt-[130px] pb-[80px] flex flex-col justify-center items-center gap-20 dark:bg-gray-900 dark:text-white">
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        className="w-full flex flex-col justify-center items-center gap-4"
      >
        <div
          id="category"
          className="flex flex-col justify-center items-center gap-4"
        >
          <h1 className="text-themepurple text-xl font-semibold text-center">
            Favorite item
          </h1>
          <h1 className="text-black font-semibold text-[42px] leading-[50px] text-center dark:text-white">
            About Our Popular Category
          </h1>
        </div>
      </div>

      <div className="lg:w-[85%] w-full grid lg:grid-cols-5 grid-cols-1 gap-10">
        {displayedProducts.map((product, index) => (
          <div
            key={product.id}
            data-aos="zoom-in"
            data-aos-delay={`${100 * (index + 1)}`}
            className="flex flex-col justify-center items-center gap-6 cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="rounded-full cursor-pointer"
            />
            <h1 className="text-black text-xl font-semibold hover:text-themepurple dark:text-white">
              {product.title}
            </h1>
          </div>
        ))}
      </div>

      {windowWidth < 1024 && products.length > 2 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-themepurple hover:bg-themeyello text-white hover:text-black px-8 py-3 rounded-lg font-semibold mt-[40px]"
        >
          {showAll ? "VIEW LESS" : "VIEW ALL"}
        </button>
      )}

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[9999]">
          <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg relative">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4">{selectedProduct.title}</h2>
            <p className="text-gray-700 mt-2">{selectedProduct.desc}</p>
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <button className="hidden lg:block bg-themepurple hover:bg-themeyello text-white hover:text-black px-8 py-3 rounded-lg font-semibold mt-[40px]">
        VIEW ALL
      </button>
    </div>
  );
};

export default Category;
