import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.productReducer.Products);
  const clickProduct = products.find((p) => p.id === id);

  if (!clickProduct) {
    return (
      <div className="text-center mt-20 text-xl font-semibold">
        Product not found
      </div>
    );
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = clickProduct.image; // ✅ Corrected

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const selectImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full min-h-screen bg-white text-black font-sans p-6">
      {/* Main Container */}
      <div className="max-w-[1200px] mx-auto mt-30 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Image Slider Section */}
        <div className="w-full">
          <div className="relative w-full md:h-[500px] flex items-center justify-center">
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 text-4xl text-white bg-opacity-30 rounded-full cursor-pointer transform -translate-y-1/2 px-4 py-1 hover:bg-opacity-60"
            >
              ←
            </button>
            <img
              src={images[currentIndex]}
              alt={`Product ${currentIndex + 1}`}
              className="h-[400px] object-contain transition-all duration-500 ease-in-out"
            />
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 text-4xl text-white bg-opacity-30 rounded-full cursor-pointer transform -translate-y-1/2 px-4 py-1 hover:bg-opacity-60"
            >
              →
            </button>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => selectImage(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  index === currentIndex ? 'bg-black scale-110' : 'bg-gray-400'
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Right Product Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">{clickProduct.title}</h2>
          <div>
            <p className="text-sm text-gray-700">
              {clickProduct.description.slice(0, 200)}...
            </p>
          </div>

          <div className="space-y-6 mt-10">
            <div>
              <p className="text-xs font-bold uppercase mb-1">Size</p>
              <div className="flex space-x-2">
                {['Kids', 'Udult', 'Womens', 'Other'].map((s) => (
                  <button
                    key={s}
                    className="px-3 py-1 border text-sm hover:bg-black hover:text-white"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

 

            <div className="flex space-x-4 mt-20">
              <button className="w-1/2 py-3 bg-black cursor-pointer text-white font-semibold">Add to Cart</button>
              <button className="w-1/2 py-3 border cursor-pointer border-black font-semibold">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description Section */}
      <div className="max-w-[1200px] mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-sm text-gray-700">{clickProduct.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Specifications</h3>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              {clickProduct.Specifications.split(',').map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">What's included</h3>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              {clickProduct.included.split(',').map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Image */}
        <div>
          <img
            src={clickProduct.partImg}
            alt="Lifestyle"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
