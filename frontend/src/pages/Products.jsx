import React from 'react'

const Products = () => {
  return (
  <div className="w-full font-sans text-black bg-white">
      {/* Hero Banner */}
      <section className="w-full h-[500px] bg-cover bg-center relative flex items-center justify-between px-20" style={{ backgroundImage: 'url(https://yourdomain.com/banner-image.jpg)' }}>
        <div className="text-black">
          <h1 className="text-5xl font-bold">SIGNATURE<br />Product</h1>
        </div>
        <div className="text-right text-black">
          <p className="text-lg">Special Offers<br />May 3 - 25</p>
          <button className="mt-2 bg-black text-white px-6 py-2 text-sm font-semibold">Off Until 25%</button>
        </div>
      </section>

      {/* Gender Categories */}
      <section className="flex w-full h-[300px]">
        <div className="w-1/2 h-full relative overflow-hidden">
          <img src="https://yourdomain.com/men.jpg" alt="Men" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <h2 className="text-white text-3xl font-semibold">Men</h2>
          </div>
        </div>
        <div className="w-1/2 h-full relative overflow-hidden">
          <img src="https://yourdomain.com/women.jpg" alt="Women" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <h2 className="text-white text-3xl font-semibold">Women</h2>
          </div>
        </div>
      </section>

      {/* Product Lineup */}
      <section className="text-center py-14">
        <h2 className="text-3xl font-bold mb-4">BICYCLE HUB PRODUCTS LINEUP</h2>

<hr className='my-10' />

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-6 md:px-16">
          {/* Product Card 1 */}
          <div className="text-left">
            <div className="relative">
              <span className="absolute top-2 left-2 text-xs bg-black text-white px-2 py-1">SAVE 25% TODAY</span>
              <img src="https://yourdomain.com/product1.jpg" alt="BONNER JACKET" className="w-full object-cover" />
            </div>
            <p className="mt-2 font-semibold text-sm">BONNER JACKET</p>
            <p className="text-xs text-gray-600">$320</p>
          </div>

          {/* Product Card 2 */}
          <div className="text-left">
            <img src="https://yourdomain.com/product2.jpg" alt="VANECO CARDIGAN" className="w-full object-cover" />
            <p className="mt-2 font-semibold text-sm">VANECO CARDIGAN</p>
            <p className="text-xs text-gray-600">$260</p>
          </div>

          {/* Product Card 3 */}
          <div className="text-left">
            <img src="https://yourdomain.com/product3.jpg" alt="FLYN COAT" className="w-full object-cover" />
            <p className="mt-2 font-semibold text-sm">FLYN COAT</p>
            <p className="text-xs text-gray-600">$390</p>
          </div>

          {/* Product Card 4 */}
          <div className="text-left">
            <img src="https://yourdomain.com/product4.jpg" alt="SWEET SWEATER" className="w-full object-cover" />
            <p className="mt-2 font-semibold text-sm">SWEET SWEATER</p>
            <p className="text-xs text-gray-600">$240</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products