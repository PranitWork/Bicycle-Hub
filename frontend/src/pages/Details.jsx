import React from 'react'

const Details = () => {
  return (
       
    <div className="w-full min-h-screen bg-white text-black font-sans p-6">
      {/* Main Container */}
      <div className="max-w-[1200px] mx-auto mt-30 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Image Slider Section */}
        <div className="w-full">
          <div className="relative w-full h-[500px] flex items-center justify-center">
            <button className="absolute left-0 top-1/2  text-4xl text-white cursor-pointer transform -translate-y-1/2 px-2">←</button>
            <img
              src="Images/About-Page/bg10.jpg"
              alt="Product"
              className="h-[400px] object-contain"
            />
            <button className="absolute right-0 top-1/2 text-4xl text-white cursor-pointer transform -translate-y-1/2 px-2">→</button>
          </div>
          <div className="flex justify-center mt-4 space-x-2 cursor-pointer">
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          </div>
        </div>

        {/* Right Product Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Black A5 memobottle (Stainless Steel)</h2>
             <div>
        
            <p className="text-sm text-gray-700">
              Designed for those who value both form and function, the A5 Stainless Steel memobottle™ brings a new level of elegance and performance to your daily carry. With its durable, matte finish, it's perfect for long work sessions, outdoor treks, or simply enjoying life in refined taste.
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

    
            <div>
              <p className="text-xs font-bold uppercase mb-1">Colour</p>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-black border"></div>
                <div className="w-6 h-6 rounded-full bg-white border"></div>
              </div>
            </div>

            <div className="flex space-x-4 mt-4">
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
            <p className="text-sm text-gray-700">
              Designed for those who value both form and function, the A5 Stainless Steel memobottle™ brings a new level of elegance and performance to your daily carry. With its durable, matte finish, it's perfect for long work sessions, outdoor treks, or simply enjoying life in refined taste.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Specifications</h3>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              <li>Dimensions: 243mm (H) x 148mm (W) x 30mm (D)</li>
              <li>Weight: 520g (empty)</li>
              <li>Capacity: 1050ml / 35oz</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">What's included</h3>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              <li>A5 Stainless Steel memobottle™</li>
              <li>Stainless steel lid</li>
              <li>Instruction & Care Card</li>
              <li>Recyclable packaging</li>
            </ul>
          </div>
        </div>

        {/* Product Image */}
        <div>
          <img
            src="Images/About-Page/bg10.jpg"
            alt="Lifestyle"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Details