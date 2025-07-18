import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
  {/* Left Side */}
  <div className="bg-[#111] text-white flex flex-col justify-center items-center px-6 py-10">
    <h2 className="text-4xl md:text-7xl font-light font-light text-center leading-snug">
      We’d love to<br /> hear from you
    </h2>
    <div className="mt-12 flex space-x-4">
      <div className="w-[400px] h-[400px] border-[1px] border-gray-500 rounded-full" />
      <div className="w-[400px] h-[400px] border-[1px] border-dashed border-gray-500 rounded-full" />
      <div className="w-[400px] h-[400px] border-[1px] border-gray-500 rounded-full" />
    </div>

  </div>

  {/* Right Side */}
  <div className="bg-[#f5f5f5] text-black px-10 py-16 flex flex-col justify-center">
    <h3 className="text-2xl md:text-6xl font-light mb-8">Contact us</h3>
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Enter your first name"
          className="border-b border-gray-400 bg-transparent focus:outline-none pb-2"
        />
        <input
          type="text"
          placeholder="Enter your last name"
          className="border-b border-gray-400 bg-transparent focus:outline-none pb-2"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="email"
          placeholder="Enter your email"
          className="border-b border-gray-400 bg-transparent focus:outline-none pb-2"
        />
        <input
          type="text"
          placeholder="Enter your phone number"
          className="border-b border-gray-400 bg-transparent focus:outline-none pb-2"
        />
      </div>
      <textarea
        rows="4"
        placeholder="Enter your message"
        className="w-full border-b border-gray-400 bg-transparent focus:outline-none pb-2"
      />
      <button
        type="submit"
        className="text-black border-b border-black pb-1 w-fit hover:opacity-70"
      >
        Submit →
      </button>
    </form>

    {/* Email Section */}
    <div className="mt-12 text-sm">
      <p className="mb-2 text-gray-600">EMAIL US</p>
      <Link to="mailto:pranitworkspace@gmail.com" className="text-black font-medium">
        pranitworkspace@gmail.com
      </Link>
    </div>

    {/* Footer Links */}
    <div className="mt-10 text-xs text-gray-500 space-x-4">
      <span>pranitworkspace@gmail.com</span>
      <span><Link to="https://www.instagram.com/pranit.daphale/" target='blank'> Instagram</Link></span>
      <span><Link to="https://in.linkedin.com/in/pranitdaphale" target='blank'> Linkdin</Link></span>
    </div>
  </div>
</div>

  )
}

export default Contact