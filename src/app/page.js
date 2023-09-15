import Image from 'next/image'
import Navbar from '../components/navbar/Navbar'
import { BsFillChatDotsFill } from 'react-icons/bs'
import Hero from '@/components/hero/Hero'
import About from '@/components/about/About'
import Product from '@/components/product/Product'
import Benefit from '@/components/benefit/Benefit'
import Contact from '@/components/contact/Contact'
import Footer from '@/components/footer/Footer'
import Modal from '@/components/modal/Modal'
// import fetch from 'node-fetch';

const https = require('https');

export const revalidate = 60

async function getData() {
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_API_KEY}/home`, { next: { revalidate: 30 }, method: 'GET', agent: agent })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return (
      <h1 className="text-gray-700 font-luxyna text-center">
        Something Went Wrong With Data !!!
      </h1>
    )
  }

  return res.json()
}


export default async function Home() {
  const { data } = await getData()
  return (
    <>
      <Navbar />
      <Modal data={data?.banner} />
      {/* Hero Seection */}
      <Hero data={data?.banner} />
      {/* <Hero data={data.data[0].hero} /> */}
      <a href={`https://wa.me/${data?.setting?.contact_phone}` || "https://wa.me"} target="_blank" aria-label="whatsapp_skinaro" aria-labelledby="whatsapp_skinaro" className="items-center justify-center py-3 px-3 sm:px-8 bg-[#94AF78] fixed bottom-6 right-5 sm:right-10 z-50 rounded-full flex flex-row space-x-2 hover:bg-white hover:text-[#6B826F]">
        <BsFillChatDotsFill className="text-2xl" />
        <span className="hidden sm:block">Talk With Us</span>
      </a>

      <About data={data?.section[0]} />



      {/* Section Benefit */}
      <div className="points-skinaro w-full flex flex-wrap justify-center items-center py-8 lg:my-16 container mx-auto max-w-7xl gap-12 bg-cover bg-no-repeat">

        <img src="assets/Icon/Icon-1.png" alt="Skinaro Ingridients" className="w-2/6 sm:w-auto sm:max-w-[150px] " />
        <img src="assets/Icon/Icon-2.png" alt="Skinaro Ingridients" className="w-2/6 sm:w-auto sm:max-w-[150px]" />
        <img src="assets/Icon/Icon-4.png" alt="Skinaro Ingridients" className="w-2/6 sm:w-auto sm:max-w-[150px]" />
        <img src="assets/Icon/Icon-5.png" alt="Skinaro Ingridients" className="w-2/6 sm:w-auto sm:max-w-[150px]" />
      </div>

      <Product data={data?.product} />
      <Benefit data={data?.section} />


      {/* Section Contact */}

      <Contact />
      {/* Section Footer */}
      <Footer data={data?.setting} />
    </>
  )
}
