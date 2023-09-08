'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  BsCart,
  BsChevronBarLeft,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import parse from 'html-react-parser';
import useSWR, { SWRConfig } from 'swr'

const Product = ({ data }) => {
  const [slider, setSlider] = useState(0);
  const [prodImage, setProdImage] = useState(0);
  const [productDesc, setProductDesc] = useState("about");

  // const fetchApiArticle = async (url) => {
  //   try {
  //     const response = await axios.get(url);
  //     return response.data.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const swrConfig = {
  //   fetcher: fetchApiArticle,
  //   revalidateOnFocus: false, // menonaktifkan refresh otomatis saat aplikasi di-fokuskan
  //   dedupingInterval: 5000, // mencegah pengambilan data ganda dalam interval 5 detik
  // };
  // const { dataTest: article, error } = useSWR(
  //   `${process.env.NEXT_PUBLIC_APP_API_KEY}/home`,
  //   swrConfig
  // );
  // console.log(dataTest);

  // useEffect(() => {
  //     const interval = setInterval(() => setSlider((prev) => (prev === (productData.length - 1) ? 0 : prev + 1)), 3000)
  //     return () => clearInterval(interval)
  // }, [])
  const prevOnClick = () => {
    setSlider((prev) => (prev === 0 ? productData.length - 1 : prev - 1));
    setProdImage(0)
  };
  const nextOnClick = () => {
    setSlider((prev) => (prev === productData.length - 1 ? 0 : prev + 1));
    setProdImage(0)
  };

  const changeProdSlider = (index) => {
    setSlider(index)
    setProdImage(0)
  }
  useEffect(() => {
    setProdImage(0)
  }, [setSlider, slider])

  return (
    <div
      className="product w-full md:my-16 flex flex-col justify-center items-center py-8 md:py-24 bg-cover bg-no-repeat relative"
      id="product"
    // style={{ backgroundImage: `url(assets/about/about-bg.png)` }}
    >
      <Image
        src={"/assets/product/leaf-orange-prod.png"}
        width={180}
        height={190}
        className="absolute top-0 md:top-3 left-0 md:left-10 lg:w-[160px] lg:h-[170px] w-20 h-20 sm:w-24 sm:h-24"
        alt="Leaf Orange"
      />
      <Image
        src={"/assets/product/star-prod.png"}
        width={76}
        height={50}
        className="absolute bottom-5 right-12 md:block hidden"
        alt="Leaf Orange"
      />
      <h1 className="font-luxyna text-black text-center mb-16 text-4xl md:text-7xl">
        Our Product
      </h1>
      <div className="container mx-auto max-w-7xl px-6 md:px-10 lg:px-24 text-black flex flex-col md:flex-row h-full justify-around gap-6 md:gap-0 group relative">
        <div
          onClick={prevOnClick}
          className="prev-arrow z-10 hidden group-hover:block absolute top-[200px] sm:top-[200px] md:top-[200px] left-6 md:left-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer duration-500"
        >
          <BsChevronLeft size={32} className="font-bold text-[#FC7F66]" />
        </div>
        <div
          onClick={nextOnClick}
          className="next-arrow z-10 hidden group-hover:block absolute top-[200px] sm:top-[200px] md:top-[200px] right-0 md:right-0 lg:right-3 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        >
          <BsChevronRight size={32} className="font-bold text-[#FC7F66]" />
        </div>
        {/* <div className="next-arrow"></div> */}
        <div className="image w-full flex flex-col gap-4">
          {/* <div className="image h-[350px] md:h-[450px] md:w-1/2 flex justify-center items-center self-center p-12 md:p-16" > */}
          {data[slider].product_images[prodImage].image_default ?
            <div className="transition-all duration-500 flex justify-center"
            // className={`w-full bg-contain md:bg-contain bg-center image h-[350px] md:h-[450px] md:w-2/3 flex justify-center items-center self-center md:p-8 duration-500 transition-all bg-no-repeat`}
            // style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_APP_API_PUBLIC}/${data[slider].main_image[0].image_default})` }}
            >
              <div className="w-full relative h-[350px] md:h-[450px] transition-all duration-500">
                <Image src={`${process.env.NEXT_PUBLIC_APP_API_PUBLIC}/${data[slider].product_images[prodImage].image_default}`} fill className="object-contain px-4 pt-4 md:px-6 md:pt-6 transition-all duration-500" />
              </div>
              {/* <img src={`${process.env.NEXT_PUBLIC_APP_API_PUBLIC}/${data[slider].product_images[prodImage].image_default}`} alt="" className="md:w-full h-full md:h-auto object-cover duration-500 px-8 md:px-12 justify-center self-center"  /> */}
            </div> : <div
              className={`w-full bg-contain md:bg-contain bg-center image h-[350px] md:h-[450px] md:w-2/3 flex justify-center items-center self-center md:p-8 duration-500 transition-all bg-no-repeat`}
              style={{ backgroundImage: `url(${productData[slider].image})` }}
            ></div>
          }


          {/* <img src={productData[slider].image} alt="" className="md:w-full h-full md:h-auto object-cover duration-500" /> */}
          {/* </div> */}
          {/* <div className="img-thumbnail flex gap-4 justify-center w-full">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setSlider(index)}
                  className={`img-box transition-all duration-200 h-16 w-16 border flex justify-center items-center cursor-pointer p-3 border-gray-300 rounded relative ${slider === index ? "" : "opacity-60"
                    }`}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_APP_API_PUBLIC}/${item.main_image[0].image_default}`}
                    alt="thumbnail"
                    fill
                    className="md:w-full h-full md:h-auto object-contain p-2"
                  />
                </div>
              );
            })}
          </div> */}
          <div className="img-thumbnail flex gap-4 justify-center w-full">
            {data[slider].product_images.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setProdImage(index)}
                  className={`img-box transition-all duration-200 h-16 w-16 border flex justify-center items-center cursor-pointer p-3 border-gray-300 rounded relative ${prodImage === index ? "" : "opacity-60"
                    }`}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_APP_API_PUBLIC}/${item.image_default}`}
                    alt="thumbnail"
                    fill
                    className="md:w-full h-full md:h-auto object-contain p-2"
                  />
                  {/* <img
                    src={`${process.env.NEXT_PUBLIC_APP_API_PUBLIC}/${item.image_default}`}
                    alt="thumbnail"
                    className="md:w-full h-full md:h-auto object-contain"
                  /> */}
                </div>
              );
            })}
          </div>
          <div className="controller flex gap-2 justify-center w-full">
            {data?.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`h-2 rounded-lg cursor-pointer transition-all duration-200 ${slider === index ? "bg-[#D9D9D9] w-20" : "bg-[#FC7F66] w-12"
                    }`}
                  onClick={() => changeProdSlider(index)}
                ></div>
              );
            })}
          </div>
        </div>

        <div className="text_container flex flex-col gap-4 md:w-full transition-all duration-300 relative">
          <Image
            src={"/assets/Vector.png"}
            width={24}
            height={24}
            className="absolute top-0 -left-12 md:block hidden"
            alt="Star Skinaro"
          />
          <h1 className="text-3xl lg:text-5xl font-luxyna text-[black] self-start transition-all duration-300">
            {data[slider].overview_title || productData[slider].name}
          </h1>
          <div className="tab justify-start self-start py-2">
            <div className="tab-header flex gap-2">
              <button
                onClick={() => setProductDesc("about")}
                className={`${productDesc === "about" ? "bg-[#D9D9D9] text-black" : "bg-[#5F8171] text-white"} font-luxyna px-6 text-sm xs:text-base xs:px-8 py-3 xs:py-2 shadow-sm transition-all duration-300 rounded-xl`}
              >
                About
              </button>
              <button
                onClick={() => setProductDesc("how")}
                className={`${productDesc === "how" ? "bg-[#D9D9D9] text-black" : "bg-[#5F8171] text-white"}  font-luxyna px-6 text-sm xs:text-base xs:px-8 py-3 xs:py-2 shadow-sm transition-all duration-300 rounded-xl hover:bg-[#D9D9D9] hover:text-black`}
              >
                How To Use
              </button>
              <button
                onClick={() => setProductDesc("ingridients")}
                className={` ${productDesc === "ingridients" ? "bg-[#D9D9D9] text-black" : "bg-[#5F8171] text-white"} font-luxyna px-6 text-sm xs:text-base xs:px-8 py-3 xs:py-2 shadow-sm transition-all duration-300 rounded-xl hover:bg-[#D9D9D9] hover:text-black`}
              >
                Ingredients
              </button>
            </div>
          </div>
          {/* <div className={`deskripsi text-gray-700 transition-all duration-300 ${productDesc === "about" ? "block" : "opacity-0 hidden"} transition-all duration-300`}>
            <p className="font-semibold text-2xl text-black font-luxyna">Description : </p>
            <p className="font-light text-black text-sm">{productData[slider].description}</p>
          </div>

          <div className={`ingridients self-start transition-all duration-300 ${productDesc === "ingridients" ? "block" : "opacity-0 hidden"}`}>
            <p className="font-semibold text-2xl text-black font-luxyna">Active Ingridients : </p>

            {
              productData[slider].ingridients.map((item, index) => (
                <div className="mb-3" key={index}>
                  <p className="text-sm font-normal">{item.title}</p>
                  <p className="text-sm font-light">{item.dexc}</p>
                </div>
              ))
            }
          </div> */}
          {/* {productDesc === "about" ?
          <>
          <div className="deskripsi text-gray-700 transition-all duration-300">
            <p className="font-semibold text-2xl text-black font-luxyna">Description : </p>
            <p className="font-light text-black text-sm">{productData[slider].description}</p>
          </div>
          <div className="flex self-start flex-wrap">

          {
          productData[slider].benefit.map((item, index) => (
            <div key={index} className={`img-box transition-all duration-200 h-24 w-28 flex flex-col gap-1 justify-center items-center cursor-pointer p-3`}
          >
            <img
              src={item.img}
              alt={item.desc}
              className="md:w-full h-full md:h-auto object-cover px-3"
            />
            <p className="text-[10px] text-center">{item.desc}</p>
          </div>
          ))
          }

          </div>
          </>
          : productDesc === "how" ?
          <><div className="ingridients self-start transition-all duration-300">
          <p className="font-semibold text-2xl text-black font-luxyna">How To Use : </p>

          {
            productData[slider].ingridients.map((item, index) => (
              <div className="mb-3" key={index}>
                <p className="text-sm font-normal">{item.title}</p>
                <p className="text-sm font-light">{item.dexc}</p>
              </div>
            ))
          }
        </div></>
          : productDesc === "ingridients" ? 
          <>
          <div className="ingridients self-start transition-all duration-300">
            <p className="font-semibold text-2xl text-black font-luxyna">Active Ingridients : </p>

            {
              productData[slider].ingridients.map((item, index) => (
                <div className="mb-3" key={index}>
                  <p className="text-sm font-normal">{item.title}</p>
                  <p className="text-sm font-light">{item.dexc}</p>
                </div>
              ))
            }
          </div>
          </>
          : null  
        } */}
          <div className="description text-gray-700 transition-all duration-300">

            {
              productDesc === "about" ?
                data[slider].overview_desc ? parse(data[slider].overview_desc) : ""
                : productDesc === "how" ? data[slider].how_to_use ? parse(data[slider].how_to_use) : ""
                  : productDesc === "ingridients" ? data[slider].ingredients ? parse(data[slider].ingredients) : ""
                    : ""
            }
          </div>

          {/* <div className="deskripsi text-gray-700 transition-all duration-300">
            <p className="font-semibold text-2xl text-black font-luxyna">Description : </p>
            <p className="font-light text-black text-sm">{productData[slider].description}</p>
          </div>
          <div className="ingridients self-start transition-all duration-300">
            <p className="font-semibold text-2xl text-black font-luxyna">Active Ingridients : </p>

            {
              productData[slider].ingridients.map((item, index) => (
                <div className="mb-3" key={index}>
                  <p className="text-sm font-normal">{item.title}</p>
                  <p className="text-sm font-light">{item.dexc}</p>
                </div>
              ))
            }
          </div>
          <div className="flex self-start flex-wrap">

            {
              productData[slider].benefit.map((item, index) => (
                <div key={index} className={`img-box transition-all duration-200 h-24 w-28 flex flex-col gap-1 justify-center items-center cursor-pointer p-3`}
                >
                  <img
                    src={item.img}
                    alt={item.desc}
                    className="md:w-full h-full md:h-auto object-cover px-3"
                  />
                  <p className="text-[10px] text-center">{item.desc}</p>
                </div>
              ))
            }

          </div> */}

          <div className="flex place-items-end self-end my-5">
            <a href={data[slider].link || "https://shopee.co.id/skinaroofficial"} target="_blank" className="items-center justify-center py-3 px-8 text-white bg-[#FC7F66] rounded-xl flex flex-row space-x-2 hover:bg-white hover:text-[#FC7F66] border hover:border-[#FC7F66] transition-all duration-200">
              <BsCart className="text-xl" /> <span>Shop Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
