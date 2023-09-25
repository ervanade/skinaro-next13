"use client";
import React, { useState } from "react";
import { BsCart } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Hero = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0); // Definisikan state untuk currentSlide

  const sliderItem = [
    { id: 1, image: "hero-skinaro.png" },
    { id: 2, image: "bg-1-skinaro.jpg" },
    { id: 3, image: "bg-2-skinaro.png" },
    // { id: 4, image: 'assets/hero/hero-bg-3.png' },
    // { id: 4, image: 'assets/hero/hero-bg-mobile-1.png' }
  ];
  const settings = {
    dots: true, // Menampilkan dots
    infinite: true, // Carousel berputar terus-menerus
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 7000, // Kecepatan perubahan slide (ms)
    slidesToShow: 1, // Jumlah slide yang ditampilkan sekaligus
    slidesToScroll: 1, // Jumlah slide yang di-scroll sekaligus
    appendDots: (dots) => (
      <div style={{ textAlign: "center", marginTop: "-0px" }}>
        <ul style={{ margin: "15px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          // width: "12px", // Sesuaikan dengan lebar dots
          // height: "12px", // Sesuaikan dengan tinggi dots
          background: i === currentSlide ? "#FF5722" : "#C9C9C9", // Warna dots aktif dan non-aktif
          borderRadius: "10px", // Bentuk dots
          margin: "0 5px", // Jarak antar dots
          cursor: "pointer",
        }}
        className="w-[10px] h-[10px] sm:w-3 sm:h-3"
      />
    ),
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex); // Mengupdate currentSlide saat slide berubah
    },
  };
  if (!data) {
    return (
      <h1 className="text-gray-700 font-luxyna text-center">
        Data Hero Not Found
      </h1>
    );
  }
  return (
    <div
      className="hero relative w-screen h-auto overflow-hidden pt-0 md:pt-0 lg:pt-0"
      id="hero"
    >
      {/* <div className="overlay w-full h-full absolute top-0 left-0 bg-black bg-opacity-20 z-[2]"></div> */}
      <div className="mx-auto w-full h-full hidden md:block">
        <Slider {...settings}>
          {data
            ? data.map((item) => (
                <div key={item.id} className="w-full">
                  {/* <a href="https://shopee.co.id/skinaroofficial" target="_blank">

              <img src={`${process.env.NEXT_PUBLIC_APP_API_PUBLIC}/${item.image_default}` || "assets/hero/hero-bg-4.png"} alt="Banner Skinaro" className="w-full" />
              </a> */}
                  <a
                    href="https://shopee.co.id/skinaroofficial"
                    target="_blank"
                  >
                    <div className="!w-full !aspect-[2/1] relative !h-[calc(100vw/2)]">
                      <Image
                        fill
                        alt="Banner Skinaro"
                        src={
                          `${process.env.NEXT_PUBLIC_APP_API_PUBLIC}/${item.image_default}` ||
                          "assets/hero/hero-bg-4.png"
                        }
                        sizes="100vw"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </a>
                </div>
              ))
            : ""}
          {/* <div>
            <img src={"assets/hero/hero-bg-4.png"} alt="Slide 1" className="w-full" />
          </div>
          <div>
            <img src="assets/hero/hero-banner-desktop.jpg" alt="Slide 2" className="w-full" />
          </div> */}
          {/* <div>
          <img src="assets/hero/hero-bg-mobile-1.png" alt="Slide 3" className="w-full" />
        </div> */}
        </Slider>
      </div>
      <div className="mx-auto w-full h-full md:hidden">
        <Slider {...settings}>
          {data
            ? data.map((item) => (
                <div key={item.id}>
                  {/* <a href="https://shopee.co.id/skinaroofficial" target="_blank">
              <img src={`${process.env.NEXT_PUBLIC_APP_API_PUBLIC}/${item.image_mobile}` || "assets/hero/hero-mobile.png"} alt="Banner Skinaro" className="w-full" />
              </a> */}
                  <a
                    href="https://shopee.co.id/skinaroofficial"
                    target="_blank"
                  >
                    <div className="w-full aspect-square relative !h-[calc(100vw/1)]">
                      <Image
                        fill
                        alt="Banner Skinaro"
                        src={
                          `${process.env.NEXT_PUBLIC_APP_API_PUBLIC}/${item.image_mobile}` ||
                          "assets/hero/hero-mobile.png"
                        }
                        sizes="100vw"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </a>
                </div>
              ))
            : ""}
          {/* <div>
          <img src="assets/hero/hero-mobile.png" alt="Slide 3" className="w-full" />
        </div>
        <div>
          <img src="assets/hero/hero-banner-mobile.jpg" alt="Slide 3" className="w-full" />
        </div> */}
          {/* <div>
          <img src="assets/hero/hero-mobile-size2.png" alt="Slide 3" className="w-full" />
        </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
