import Image from 'next/image'
import React from 'react'

const Footer = ({data}) => {
  return (
    <div className="footer w-full bg-[#FC7F66] py-10">
    <div className="container mx-auto max-w-7xl  px-6 md:px-10 lg:px-16 flex justify-between lg:flex-row flex-col space-y-12 lg:space-y-0 mb-16 lg:mb-0">
      <div className="logo"><Image width={211} height={100} src="/assets/logo-tagline.png" alt="Logo Skinaro White" className='max-h-[100px]' /></div>

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

      <div className="connect flex flex-col">
      <h2 className="tracking-[2px] mb-3 font-luxyna text-xl  ">Official Store</h2>
         <div className="socmed flex gap-4 mb-3">
          <a href={data.shopee || "https://shopee.co.id/skinaroofficial"} target="_blank" ><Image width={30} height={30} src="/shopee-icon.png" alt="Shopee Icon" /></a>
          <a href={data.tokopedia || "https://www.tokopedia.com/"} target="_blank" ><Image width={30} height={30} src="/tokped-icon.png" alt="Tokopedia Icon" /></a>
          <a href={data.tiktok || "https://www.tiktok.com/"} target="_blank" ><Image width={30} height={30} src="/tiktokshop-icon.png" alt="Tiktok Shop' Icon" /></a>
          {/* <a href="#"><img src="/twitter-icon.png" alt="Facebook Icon" /></a> */}
        </div>
        <h2 className="tracking-[2px] mb-3 font-luxyna text-xl  ">Connect With Us</h2>
        <div className="socmed flex gap-4 mb-5">
          <a href={data.facebook || "https://www.facebook.com"} target="_blank" ><Image width={30} height={30} src="/fb-icon.png" alt="Facebook Icon" /></a>
          <a href={data.tiktok || "https://www.tiktok.com/"} target="_blank" ><Image width={30} height={30} src="/icon-tiktok.png" alt="Tiktok Icon" /></a>
          <a href={data.instagram || "https://www.instagram.com/"} target="_blank" ><Image width={30} height={30} src="/ig-icon.png" alt="Instagram Icon" /></a>
          {/* <a href="#"><img src="/twitter-icon.png" alt="Facebook Icon" /></a> */}
        </div>
        
      </div>

      <div className="connect ">
        <h2 className="tracking-[2px] mb-3 font-luxyna text-xl">Subscribe Newsletter</h2>
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