import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
  <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

    <div>
      <h1 className="text-3xl font-bold text-white">
        Bicycle<span className="text-red-500">Hub</span>
      </h1>
      <p className="mt-3 text-gray-400 text-sm">
        HERO is the largest online bike store, bringing you high-quality & powerful bikes.
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold text-white mb-2">Quick Links</h2>
      <ul className="space-y-2 text-gray-400">
        <li><a href="#" className="transition-colors">Bicycle</a></li>
        <li><a href="#" className="transition-colors">About</a></li>
        <li><a href="#" className="transition-colors">Login</a></li>
      </ul>
    </div>

 
    <div>
      <h2 className="text-lg font-semibold text-white mb-2">Contact</h2>
      <p className="text-gray-400 text-sm">pranitworkspace@gmail.com</p>
      <p className="text-gray-400 text-sm mb-4">+000 000 0000</p>
   
    </div>
  </div>


  <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center px-6">
    <p className="text-sm text-gray-500">© 2025 Hero. All rights reserved.- Design and Developed by Pranit Daphale</p>
    <div className="flex space-x-4 mt-4 md:mt-0">
      <a href="#" className="text-gray-400  text-sm">Privacy Policy</a>
      <a href="#" className="text-gray-400  text-sm">Terms & Conditions</a>
    </div>
  </div>
</footer>

  )
}

export default Footer