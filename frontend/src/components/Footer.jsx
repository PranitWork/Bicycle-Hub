import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-black text-gray-300 py-10">
  <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

    <div>
      <h1 class="text-3xl font-bold text-white">
        Bicycle<span class="text-red-500">Hub</span>
      </h1>
      <p class="mt-3 text-gray-400 text-sm">
        HERO is the largest online bike store, bringing you high-quality & powerful bikes.
      </p>
    </div>

    <div>
      <h2 class="text-lg font-semibold text-white mb-2">Quick Links</h2>
      <ul class="space-y-2 text-gray-400">
        <li><a href="#" class="transition-colors">Bicycle</a></li>
        <li><a href="#" class="transition-colors">About</a></li>
        <li><a href="#" class="transition-colors">Login</a></li>
      </ul>
    </div>

 
    <div>
      <h2 class="text-lg font-semibold text-white mb-2">Contact</h2>
      <p class="text-gray-400 text-sm">info@bicyclehub.com</p>
      <p class="text-gray-400 text-sm mb-4">+000 000 0000</p>
   
    </div>
  </div>


  <div class="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center px-6">
    <p class="text-sm text-gray-500">© 2025 Hero. All rights reserved.- Design and Developed by Pranit Daphale</p>
    <div class="flex space-x-4 mt-4 md:mt-0">
      <a href="#" class="text-gray-400  text-sm">Privacy Policy</a>
      <a href="#" class="text-gray-400  text-sm">Terms & Conditions</a>
    </div>
  </div>
</footer>

  )
}

export default Footer