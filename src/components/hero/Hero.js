'use client'
import React from "react";
import { BsCart } from "react-icons/bs";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Hero = ({data}) => {
  const sliderItem = [
    { id: 1, image: 'hero-skinaro.png' },
    { id: 2, image: 'bg-1-skinaro.jpg' },
    { id: 3, image: 'bg-2-skinaro.png' }
    // { id: 4, image: 'assets/hero/hero-bg-3.png' },
    // { id: 4, image: 'assets/hero/hero-bg-mobile-1.png' }
  ]
  // const [slider, setSlider] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => setSlider((prev) => (prev === (sliderItem.length - 1) ? 0 : prev + 1)), 3000)
  //   return () => clearInterval(interval)
  // }, [])
  const settings = {
    dots: false,       // Menampilkan dots
    infinite: true,   // Carousel berputar terus-menerus
    speed: 500,       // Kecepatan perubahan slide (ms)
    slidesToShow: 1,  // Jumlah slide yang ditampilkan sekaligus
    slidesToScroll: 1 // Jumlah slide yang di-scroll sekaligus
  };


  return (
    <div className="hero relative w-screen h-auto overflow-hidden pt-0 md:pt-0 lg:pt-0" id="hero">
      {/* <div className="overlay w-full h-full absolute top-0 left-0 bg-black bg-opacity-20 z-[2]"></div> */}
      <div className="mx-auto w-full h-full hidden md:block">
        <Slider {...settings}>
          <div>
            <img src="assets/hero/hero-bg-4.png" alt="Slide 1" className="w-full" />
          </div>
          <div>
            <img src="assets/hero/hero-banner-desktop.jpg" alt="Slide 2" className="w-full" />
          </div>
          {/* <div>
          <img src="assets/hero/hero-bg-mobile-1.png" alt="Slide 3" className="w-full" />
        </div> */}
        </Slider>
      </div>
      <div className="mx-auto w-full h-full md:hidden">
      <Slider {...settings}>
        <div>
          <img src="assets/hero/hero-mobile.png" alt="Slide 3" className="w-full" />
        </div>
        <div>
          <img src="assets/hero/hero-banner-mobile.jpg" alt="Slide 3" className="w-full" />
        </div>
        {/* <div>
          <img src="assets/hero/hero-mobile-size2.png" alt="Slide 3" className="w-full" />
        </div> */}
      </Slider>
    </div>
      {/* <img src="assets/hero/hero-bg-3.png" alt="" className="w-full hidden sm:block" />
      <img src="assets/hero/hero-bg-mobile-1.png" alt="" className="w-full sm:hidden" /> */}

      {/* <div className="container mx-auto max-w-7xl px-6 md:px-10 lg:px-24 py-4 w-full h-full relative bg-transparent z-10" >
        <div className="text absolute top-36 sm:left-16 left-10 lg:left-40  left-50 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col space-y-10">
          <div className="text flex flex-col space-y-8">
            <h1 className="text-4xl tracking-[4px] leading-[40px] lg:text-5xl font-bold lg:tracking-[12px] lg:leading-[60px]">
              SKINARO TEA BRIGHTENING CLEANSER
            </h1>
            <p className="text-lg tracking-[2px] font-normal">
              Facial cleansing soap containing Tea Extract & Glycolic Acid helps
              brighten and cleanse dead skin while calming the skin.
            </p>
          </div>
          <div className="cta">
            <button className="items-center justify-center py-5 px-8 bg-[#6B826F] rounded-full flex flex-row space-x-2 hover:bg-white hover:text-[#6B826F] transition-all duration-200">
              <BsCart className="text-xl" /> <span>Shop Now</span>
            </button>
          </div>
        </div>
      </div> */}
      {/* <div className="hero-image w-full h-full absolute top-0 left-0 duration-500 transition-all bg-cover bg-no-repeat bg-center sm:bg-cover" style={{ backgroundImage: `url(${sliderItem[slider].image})` }}>
      </div> */}
      {/* <img
        src={sliderItem[slider]?.image}
        className="h-full lg:w-full object-cover absolute top-0 left-0 transition-all ease-in "
        alt="Hero Banner"
      /> */}
      {/* <div className="controller absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex gap-2">

        {
          sliderItem.map((item, index) => {
            return (
              <div key={item.id} className={`h-3 w-3 rounded-full cursor-pointer ${slider === index ? 'bg-[#6B826F]' : 'bg-[#d3d8d3]'}`} onClick={() => setSlider(index)}></div>
            )
          })
        }
      </div> */}
    </div>
  );
};

export default Hero;
