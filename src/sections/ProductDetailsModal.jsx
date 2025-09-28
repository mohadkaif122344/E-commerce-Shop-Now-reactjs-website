import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

const ProductDetailsModal = ({ product, onClose, addToCart }) => {
  if (!product) return null;

  const [showMore, setShowMore] = useState(false);

  const fullDescription =
    product.description ||
    "This is a high-quality product with amazing features. Perfect for your needs and crafted with care. It is made with durable materials, offers great performance, and ensures customer satisfaction. You can rely on this product for everyday use, making your life easier and more comfortable.";

  const shortDescription =
    fullDescription.length > 100
      ? fullDescription.slice(0, 100) + "..."
      : fullDescription;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-[90%] max-w-3xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-3xl font-bold text-gray-600 hover:text-red-500"
        >
          ×
        </button>

        <div className="flex flex-col lg:flex-row gap-6">
          <img
            src={product.img}
            alt={product.name}
            className="w-full lg:w-1/2 h-[300px] object-cover rounded-lg"
          />

          <div className="flex flex-col justify-between w-full">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {product.name}
            </h1>
            <p className="text-gray-500 dark:text-gray-300">
              {product.category}
            </p>
            <h2 className="text-xl text-themepurple font-semibold mt-2">
              ${product.price}
            </h2>

            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-themepurple" />
              ))}
            </div>

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {showMore ? fullDescription : shortDescription}
            </p>
            {fullDescription.length > 100 && (
              <button
                onClick={() => setShowMore((prev) => !prev)}
                className="text-themepurple font-semibold mt-2 hover:underline"
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            )}

            <button
              onClick={() => {
                addToCart(product);
                onClose();
              }}
              className="mt-6 bg-themepurple hover:bg-themeyello hover:text-black text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 w-max"
            >
              <MdAddShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
