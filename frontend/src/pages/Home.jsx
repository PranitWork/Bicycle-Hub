import React from 'react'

const Home = () => {
  return (
    <main>
      {/* home section */}
        <section className="relative w-full min-h-screen bg-[#1d1f20] flex items-center justify-center overflow-hidden px-4 md:px-8">
      {/* Left Content */}
      <div className="absolute left-4 top-10 md:top-1/3 text-white text-xs md:text-sm space-y-2 md:space-y-3 max-w-[200px]">
        <p className="uppercase opacity-90 font-semibold">Up to €30 OFF</p>
        <p className="opacity-70 leading-snug">
          Now & Now+ <br /> Instant Cameras
        </p>
        <button className="underline hover:text-gray-300 transition text-xs">
          Explore Bicycle →
        </button>
      </div>

      {/* Center Bike Image */}
      <div className="z-10 w-full flex justify-center items-center">
        <img
          src="/images/Home_page/Hero-bg.png" // Make sure image is inside /public/images/Home_page/
          alt="Bike"
          className="w-[90%] max-w-[700px] object-contain"
        />
      </div>

      {/* Right Tag */}
      <div className="absolute right-4 bottom-36 md:bottom-32 bg-[#2b2d2f] text-white p-2 md:p-3 rounded-md flex items-center gap-2 md:gap-3">
        <img
          src="/images/Home_page/bike-tag.png" // optional small preview icon (or you can use <svg> if missing)
          alt="Tag"
          className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-sm"
        />
        <div>
          <p className="text-xs md:text-sm font-semibold leading-tight">
            SHESH - CLASSIC SERIES BLACK
          </p>
          <button className="text-xs underline hover:text-gray-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Bottom Slogan */}
      <div className="absolute bottom-6 w-full text-center px-2">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          RIDE BEYOND <span className="text-white">LIMITS.</span>
        </h1>
      </div>
    </section>

    {/* section 2 */}
      <section className="relative w-full min-h-screen bg-[#f4f4f4] flex flex-col justify-center items-center px-4 md:px-10 overflow-hidden">
      {/* Heading */}
      <div className="absolute top-16 md:top-24 text-center px-4">
        <h1 className="text-gray-400 text-2xl md:text-4xl font-extrabold tracking-wider uppercase leading-tight">
          Ergonomic <br className="md:hidden" />
          Control At Hand
        </h1>
      </div>

      {/* Center Bike Image */}
      <div className="z-10 w-full flex justify-center items-center">
        <img
          src="/images/Home_page/Hero-bike-2.png" // Update this with your correct path
          alt="Ergo Handlebar Bike"
          className="w-[90%] max-w-[700px] object-contain"
        />
      </div>

      {/* Bottom Left Description */}
      <div className="absolute bottom-6 left-4 md:left-10 text-gray-800 text-xs md:text-sm max-w-[260px]">
        <p className="font-semibold uppercase mb-1">
          Your comfort and cycling <br className="hidden md:block" /> experience is our priority
        </p>
        <button className="mt-1 underline hover:text-gray-600 transition text-xs">
          Ergo Classic Series →
        </button>
      </div>

      {/* Bottom Right Tag */}
      <div className="absolute bottom-6 right-4 md:right-10 bg-white text-black p-2 md:p-3 rounded-md shadow-md flex items-center gap-2 md:gap-3">
        <img
          src="/images/Home_page/bike-tag-2.png" // Replace with your icon/square preview
          alt="Bike Tag"
          className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-sm"
        />
        <div>
          <p className="text-xs md:text-sm font-semibold leading-tight">
            SHESH - ERGO CLASSIC WHITE
          </p>
          <button className="text-xs underline hover:text-gray-600">Shop Now</button>
        </div>
      </div>
    </section>

{/* section3 */}
 <section className="w-full min-h-[60vh] bg-[#f4f4f4] flex flex-col justify-center items-center px-4">
      <div className="text-center text-gray-300 font-extrabold uppercase leading-tight">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide flex flex-wrap justify-center items-center gap-2">
          <span>Precision</span>
          <img
            src="/images/Home_page/insert-img.png" // Replace with actual image path
            alt="Cyclist"
            className="w-10 h-8 md:w-14 md:h-10 object-cover rounded-sm inline-block"
          />
          <span>Steering,</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1">
          Ultimate Comfort
        </h2>
      </div>
    </section>

    {/* section 4 */}
     <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/Home_page/ride-bg.jpg" // Replace with your image
        alt="Cyclist Riding"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10" />

      {/* Central Slogan & Icon */}
      <div className="relative z-20 text-center text-white px-4">
        {/* Speedometer-style arc */}
        <div className="w-20 h-20 md:w-28 md:h-28 border-t-4 border-white rounded-full mx-auto mb-3 md:mb-4"></div>

        {/* Slogan */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight">
          Ride Beyond <br /> Limits.
        </h1>
      </div>
    </section>

    {/* section 5 */}
     <section className="bg-black text-white py-12 px-4 md:px-16 w-full">
      {/* Heading and Description */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold uppercase leading-tight">
          Ultimate <br />
          <span className="text-gray-400">Comfort.</span>
        </h1>

        {/* Description */}
        <p className="text-sm md:max-w-[50%] text-gray-300 leading-relaxed">
          Take control on every turn. With responsive brakes and intuitive handling, our bikes offer race-proven geometry for superior performance.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-[#1b1b1b] p-6 rounded-lg flex flex-col justify-between min-h-[180px]">
          <div>
            <div className="mb-4 text-xl">📐</div>
            <p className="text-sm font-semibold text-white">
              Experience cutting-edge engineering with aerodynamically optimized frames
            </p>
          </div>
          <button className="mt-4 text-sm underline hover:text-gray-400">
            Explore Performance Bikes →
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-[#1b1b1b] p-6 rounded-lg flex flex-col justify-between min-h-[180px]">
          <div>
            <div className="mb-4 text-xl">🧩</div>
            <p className="text-sm font-semibold text-white">
              Ergonomic designs and shock-absorbing technology
            </p>
          </div>
          <button className="mt-4 text-sm underline hover:text-gray-400">
            Explore Bicycle →
          </button>
        </div>

        {/* Card 3 (with image) */}
        <div className="bg-[#1b1b1b] p-6 rounded-lg flex flex-col justify-between min-h-[180px] relative">
          <p className="text-xs uppercase text-gray-400 mb-2">
            Race-proven geometry <br /> for total control on any terrain
          </p>
          <div className="text-3xl font-bold mb-2">99.8%</div>
          <p className="text-sm text-gray-300 mb-4">Precision</p>
          <img
            src="/images/Home_page/precision-bike.png" // replace with actual path
            alt="Precision Bike"
            className="absolute bottom-2 right-2 w-20 object-contain opacity-90"
          />
        </div>
      </div>
    </section>

{/* section 6 */}

  <section className="w-full bg-black text-white py-14 px-4 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      
      {/* Left: Text Content */}
      <div className="w-full md:w-1/2">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase leading-tight mb-3">
          Building <br />
          <span className="text-gray-400">Quality For You</span>
        </h2>

        {/* Paragraph */}
        <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
          Precision engineering meets premium craftsmanship. Our expertly welded frame ensures a seamless, strong, and long-lasting structure. Designed for maximum durability, it delivers unparalleled reliability and safety — minimizing the risk of fractures.
        </p>

        {/* Stats */}
        <div className="text-white text-3xl md:text-4xl font-bold mb-1">99.8%</div>
        <p className="text-xs text-gray-400">Precision and Performance.</p>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="/images/Home_page/gear-quality.png" // Make sure this exists
          alt="Gear Part"
          className="w-[85%] max-w-[500px] object-contain"
        />
      </div>
    </section>

    </main>
  )
}

export default Home