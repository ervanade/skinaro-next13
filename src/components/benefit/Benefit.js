import Image from 'next/image'
import React from 'react'
import parse from 'html-react-parser';

const Benefit = ({ data }) => {
  return (
    <div className="arotea w-full md:mb-16 relative py-8 md:pb-24 bg-cover bg-no-repeat" >

      <Image src={"/assets/leaf-orange-2.png"} width={139} height={122} className='absolute bottom-0 right-5 md:block hidden' alt='Leaf Skinaro' />
      <Image src={"/assets/Vector.png"} width={24} height={24} className='absolute bottom-3 right-48 md:block hidden' alt='Leaf Skinaro' />


      <div className="container mx-auto max-w-7xl gap-4 xs:gap-6 md:gap-10 px-6 md:px-10 lg:px-24 flex justify-center flex-col md:flex-row relative ">
        <Image src={"/assets/Vector.png"} width={32} height={32} className='absolute bottom-5 left-0 lg:left-5 md:block hidden' alt='Leaf Skinaro' />
        <div className="flex flex-col gap-3 sm:gap-6 w-full">
          <div className="description flex flex-col gap-2 sm:gap-4">
            <h2 className="text-black font-luxyna  text-xl sm:text-3xl">
              {data[1].title || "Benefits using Aro Tea"}
            </h2>
            <div className="text-[#5C5858] font-light text-sm sm:text-base sm:pr-12">
              {parse(data[1].content) || "Aro Tea has antioxidants that help remove toxins from your body, and start the healing process. Applying antioxidant rich products helps to protect our skin cells from damage and maintain healthy, smooth, and supple skin."}
            </div>
          </div>
          <div className="image w-full h-[280px] xs:h-[320px] lg:h-[400px] border-lg relative">
            <Image src={data[2].image_default || "assets/benefit-2.png"} alt="benefit skinaro" fill className="w-full h-full object-contain border-lg" />
            {/* <img src={data[2].image_default ||"assets/benefit-2.png"} alt="benefit skinaro" className="w-full h-full object-cover border-lg" /> */}
          </div>

        </div>
        <div className="flex flex-col-reverse gap-3 sm:gap-6 w-full md:relative">
          {/* <div className="image w-full md:h-[300px] lg:h-[400px] border-lg md:absolute md:top-0 md:-left-[72px]">
            <img src={data[1].image_default || "assets/benefit-1.png"} alt="benefit skinaro" className="w-full h-full object-cover border-lg" />
          </div> */}
          <div className="image w-full h-[280px] xs:h-[320px] lg:h-[400px] border-lg relative md:absolute md:top-0 md:-left-[72px]">
            <Image src={data[1].image_default || "assets/benefit-1.png"} alt="benefit skinaro" fill className="w-full h-full object-contain border-lg" />
            {/* <img src={data[2].image_default ||"assets/benefit-2.png"} alt="benefit skinaro" className="w-full h-full object-cover border-lg" /> */}
          </div>
          <div className="description flex flex-col gap-2 sm:gap-4 md:list-disc text-black font-light text-sm sm:text-base">
            {data[2].content ? parse(data[2].content) : <ul className='md:list-disc text-black font-light text-sm sm:text-base'>
              <li>Giving the body enough ammunition to fight infections and skin blemishes</li>
              <li>Helps delay aging and reduces puffiness</li>
              <li>Promote skin cell rejuvenation</li>
              <li>Brightens skin and boost collagen</li>
            </ul>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefit