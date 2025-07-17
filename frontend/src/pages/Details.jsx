import React from 'react'

const Details = () => {
  return (
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      
      {/* Left Side - Main Image & Thumbnails */}
      <div>
        <div className="w-full bg-gray-100 rounded-lg aspect-[4/3] flex items-center justify-center">
          {/* Replace src with your bike image */}
          <img src="/images/bike-main.png" alt="Runabout Bike" className="w-full h-auto object-contain" />
        </div>
        <div className="flex gap-4 mt-4">
          {/* Replace these with your thumbnails */}
          <img src="/images/bike-1.png" alt="thumb" className="w-24 h-24 object-contain border rounded" />
          <img src="/images/bike-2.png" alt="thumb" className="w-24 h-24 object-contain border rounded" />
          <img src="/images/bike-3.png" alt="thumb" className="w-24 h-24 object-contain border rounded" />
        </div>
      </div>

      {/* Right Side - Details */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Runabout</h1>
        <p className="text-xl font-bold text-gray-700 mt-1">$499.00</p>

        <p className="text-sm text-gray-600 mt-4">
          Inspired by the humble classic steel town bikes ridden by writers, artists, and thinkers, we added a dash of modern art and engineering to create the Runabout.
        </p>

        <p className="text-sm text-green-600 font-medium mt-2">Always ships free.</p>

        {/* Color Options */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Color</h4>
          <div className="flex gap-2">
            {["bg-red-500", "bg-gray-500", "bg-green-700", "bg-green-400", "bg-blue-300", "bg-yellow-300"].map((color, i) => (
              <div key={i} className={`w-6 h-6 rounded-full border-2 ${i === 2 ? 'border-black' : 'border-gray-300'} ${color}`}></div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-1">Nerudo olive</p>
        </div>

        {/* Size Options */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Size</h4>
          <div className="flex gap-2">
            {["S", "M", "L"].map((size) => (
              <button
                key={size}
                className={`px-4 py-1 border rounded text-sm ${
                  size === "L"
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-300 hover:bg-gray-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Large fits riders 5'10" to 6'2". When in doubt, size down for comfort.
          </p>
        </div>

        {/* Speed Options */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Speeds</h4>
          
          <div className="flex gap-2">
            {["1", "3", "7"].map((spd) => (
              <button
                key={spd}
                className={`px-4 py-1 border rounded text-sm ${
                  spd === "3"
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-300 hover:bg-gray-100"
                }`}
              >
                {spd}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Flexibility: cover moderate hills and distances in cities like New York or Los Angeles.
          </p>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-8">
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-teal-600 transition-all">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  )
}

export default Details