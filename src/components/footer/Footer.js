import React from 'react'

const Footer = () => {
  return (
    <div className="footer w-full bg-[#FC7F66] py-10">
      <div className="container mx-auto max-w-7xl  px-6 md:px-10 lg:px-16 flex justify-between lg:flex-row flex-col space-y-12 lg:space-y-0 mb-16 lg:mb-0">
        <div className="logo"><img src="/skinaro_white.png" alt="Logo Skinaro White" /></div>

        <div className="nav-menu flex flex-col gap-4">
          <a href="#hero" className="text-base text-gray-200 hover:text-white">
            Home
          </a>
          <a href="#why-aro" className="text-base text-gray-200 hover:text-white">
            Why Aro ?
          </a>
          <a href="#product" className="text-base text-gray-200 hover:text-white">
            Our Product
          </a>
          <a href="#contact" className="text-base text-gray-200 hover:text-white">
            Talk With Us
          </a>
        </div>

        <div className="connect">
          <h1 className="tracking-[2px] mb-3 font-luxyna text-xl  ">Connect With Us</h1>
          <div className="socmed flex gap-4">
            <a href="#"><img src="/fb-icon.png" alt="Facebook Icon" /></a>
            <a href="#"><img src="/ig-icon.png" alt="Facebook Icon" /></a>
            <a href="#"><img src="/linkdin-icon.png" alt="Facebook Icon" /></a>
            <a href="#"><img src="/twitter-icon.png" alt="Facebook Icon" /></a>
          </div>
        </div>

        <div className="connect ">
          <h1 className="tracking-[2px] mb-3 font-luxyna text-xl">Subscribe Newsletter</h1>
          <div className="socmed flex gap-0">
            <input type="text" className="focus:outline-none px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 text-sm rounded-tl-lg rounded-bl-lg focus:ring-green-800 focus:border-greenring-green-800 block w-full p-2.5 " placeholder="Type Your Email Here" />
            <a href="send" className="px-4 py-3 bg-[#f36549] hover:bg-white hover:text-[#f36549] transition-all duration-200">
              Send
            </a>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Footer