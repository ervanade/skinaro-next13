import Image from 'next/image'
import React from 'react'

const About = () => {
  const whyAro = {
    description: "Apart from spices to coffee, Indonesia is also famous as the best black tea exporter in the world. One of the best known is Kayu Aro Black Tea. Kayu Aro Tea is the best in terms of quality because the production process is still very traditional so that the taste of the tea is maintained. Not surprisingly, this tea, which has a strong aroma, is said to be a favorite of world royalty. From Queen Elizabeth in England to Queen Wilhelmina, Queen Juliana and Queen Beatrix in the Netherlands. The traditional Kayu Aro Tea production process starts from the planting process without using any chemicals, preservatives or coloring agents. In addition, tea production workers are also prohibited from using cosmetics while processing tea so that the quality of tea remains natural and good. Production using the orthodox method or still in the form of leaves makes Kayu Aro plantations able to produce the best orthodox tea in the world. Apart from having a strong aroma, this tea also has a thick taste on the tongue and is orange in color. In addition to the orthodox method, Kayu Aro tea is also processed using the CTC or crush-tear-curl method, which means squeezing-crushing and the end result is in the form of small crystal-like grains. Now the Kayu Aro tea plantation produces 5,500 tons of tea annually and is exported to Asian countries, European countries, to the United States."
  }
  return (
    <div className="about bg-cover bg-no-repeat pt-16 pb-8 md:py-24 relative" id='why-aro' style={{ backgroundImage: `url(assets/about/about-bg.png)` }}>
      <Image src={"/assets/leaf-orange.png"} width={244} height={359} className='absolute top-0 right-0 w-24 h-32 lg:w-36 lg:h-48 xl:w-48 xl:h-64' />
      <div className="relative container mx-auto max-w-7xl gap-10 px-6 md:px-10 lg:px-24 flex justify-center flex-col md:flex-row ">
      <div className="left-about w-full object-cover relative">
      <h1 className="font-luxyna text-black absolute -top-7 left-16 text-5xl md:text-7xl">Why Aro?</h1>
        <img src="assets/about-img.png" alt="" className="w-full h-full object-cover px-6 md:px-0" />
        
      </div>
      <div className="right-about flex flex-col justify-center px-6 w-full">
        <div className="about-description py-8 space-y-8 sm:space-y-14">
          {/* <div className="title">
            <h1 className="font-normal text-3xl sm:text-[40px] text-[#6B826F]">
              Why Aro ?
            </h1>
            <div className="line w-[150px] sm:w-[226px] h-1 sm:h-2 bg-[#6B826F]"></div>
          </div> */}
          <p className="sm:text-base text-sm font-normal text-gray-700 lg:max-w-md">
            Apart from spices to coffee, Indonesia is also famous as the best
            black tea exporter in the world. One of the best known is Kayu Aro
            Black Tea. Kayu Aro Tea is the best in terms of quality because
            the production process is still very traditional so that the taste
            of the tea is maintained. Not surprisingly, this tea, which has a
            strong aroma, is said to be a favorite of world royalty. From
            Queen Elizabeth in England to Queen Wilhelmina, Queen Juliana and
            Queen Beatrix in the Netherlands.
          </p>

          <div>
            <a href="shop" className="px-8 py-3 transition-all duration-200 bg-[#FC7F66] rounded-lg hover:bg-white hover:text-[#FC7F66] border hover:border-[#FC7F66]">
              Shop Now
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About