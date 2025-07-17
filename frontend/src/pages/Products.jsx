import React from 'react'

const Products = () => {
  return (
<div class="w-full bg-white text-black font-sans">
  <section class="text-center py-12 px-4">
    <h2 class="text-xl font-semibold uppercase tracking-widest">New Style 2017</h2>
    <h1 class="text-4xl font-bold mt-2 mb-4">Black</h1>
    <p class="text-gray-500 max-w-xl mx-auto">
      It is a long established fact that a reader will be distracted by the readable
      content of a page when looking at its layout.
    </p>
  </section>

  <div class="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-t border-b">
    <div class="items-center gap-3 mb-4 md:mb-0">

      <select class="border px-3 py-2 text-sm">
        <option>Default sorting</option>
        <option>Sort by price</option>
        <option>Sort by popularity</option>
      </select>
    </div>
    <p class="text-sm uppercase text-gray-600">Showing 1–12 of 30 results</p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
    <div class="text-center relative">
      <div class="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 uppercase">Hot</div>
      <img src="https://via.placeholder.com/300x300" class="mx-auto mb-4" />
      <h3 class="text-sm text-gray-600 uppercase">Water Repellent Parka</h3>
      <div class="text-yellow-400 text-sm">★★★★★</div>
      <p class="mt-2 font-bold text-lg">$229.9</p>
      <button class="mt-2 bg-black text-white px-4 py-2 text-xs uppercase">Add to Cart</button>
    </div>

 
  </div>

  <div class="flex justify-between items-center p-6 border-t text-sm text-gray-600">
    <div class="flex gap-2">
      <button class="px-3 py-1 bg-black text-white">01</button>
      <button class="px-3 py-1 border">02</button>
      <button class="px-3 py-1 border">03</button>
      <button class="px-3 py-1 border">&lt;</button>
      <button class="px-3 py-1 border">&gt;</button>
    </div>
    <p>Showing 1–12 of 30 results</p>
  </div>
</div>
  )
}

export default Products