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
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Product = ({ data }) => {
  const productData = [
    {
      id: 3,
      image: "/assets/prod-1.png",
      name: "Skinaro Tea Brightening Moisturizer Gel",
      category: "BRIGHTENING CLEANSER",
      description:
        "Merupakan krim pelembap pagi & malam dengan tekstur gel yang ringan. Kombinasi Ekstrak Teh dan Squalane membantu meningkatkan hidrasi serta menyamarkan noda hitam. Niacinamide 4% dan Vitamin E membantu mencerahkan serta menutrisi kulit.",
      ingridients: [
        {
          title: "Camellia Sinensis Leaf Extract",
          dexc: "Merupakan kandungan dengan tinggi antioksidan dapat bantu melindungi kerusakan sel akibat radikal bebas. Sehingga dapat mencegah inflamasi, hingga merawat kesehatan kulit.",
        },
        {
          title: "Niacinamide 4%",
          dexc: "Kandungan yang dapat membantu mengatasi permasalahan wajah yang kusam dengan membantu mencerahkan kulit, sehingga wajah terlihat lebih sehat tanpa memberikan efek samping. Serta dapat membantu mengatasi permasalahan kulit yang berjerawat.",
        },
        {
          title: "Squalane",
          dexc: "Bantu meningkatkan hidrasi kulit dan membantu kulit terlihat lebih sehat. Kaya akan antioksidan bisa melawan kerusakan kulit serta radikal bebas, sehingga dapat menunda proses penuaan.",
        },
        {
          title: "Peptide",
          dexc: "sejenis peptide yang merupakan asam amino, yang berfungsi mendorong proses pembuatan protein, seperti kolagen dan elastin. Yang membantu mengatasi permasalahan kerutan dan kurangnya elastisitas pada wajah",
        },
      ],
      benefit: [
        {
          img: "prodDesc1.png",
          desc: "Brightens with high antioxidant",
        },
        {
          img: "prodDesc3.png",
          desc: "Natural Calming  TeaScent",
        },
        {
          img: "prodDesc4.png",
          desc: "Suitable for  most skin types",
        },
        {
          img: "uv.png",
          desc: "UV- Protection",
        },
        {
          img: "anti-aging.png",
          desc: "Prevent anti-aging",
        },
      ],
    },
    {
      id: 1,
      image: "prod-4.png",
      name: "Skinaro Tea Brightening Cleanser",
      category: "BRIGHTENING CLEANSER",
      description:
        "Merupakan pembersih wajah dengan kandungan Ekstrak Teh & Glycolic Acid yang dapat membantu mencerahkan dan membersihkan kulit mati sekaligus menenangkan kulit.",
      ingridients: [
        {
          title: "Camellia Sinensis Leaf Extract",
          dexc: "Merupakan kandungan dengan tinggi antioksidan dapat bantu melindungi kerusakan sel akibat radikal bebas. Sehingga dapat mencegah inflamasi, hingga merawat kesehatan kulit.",
        },
        {
          title: "Glycolic Acid",
          dexc: "Merupakan AHA yang bersifat mengeksfoliasi dan juga menarik kelembaban di saat yang bersamaan. Dengan  kandungan anti-bacterial dan anti-oksidan, yang  dapat membantu memperbaiki tekstur kulit, dan juga  memperbaiki skin barrier dengan  membantu produksi kolagen alami kulit. Gunakan pada  malam hari untuk kulit tampak lebih sehat bercahaya di pagi hari. ",
        },
        {
          title: "Hyaluronic Acid",
          dexc: "Merupakan micronized Hyaluronic  Acid (molekul jauh lebih kecil sehingga lebih mudah diserap kulit), yang menjaga kelembaban alami kulit serta memberikan efek tampilan yang lebih  glowing",
        },
      ],
      benefit: [
        {
          img: "prodDesc1.png",
          desc: "Brightens with high antioxidant",
        },
        {
          img: "prodDesc2.png",
          desc: "Exfoliate Gently",
        },
        {
          img: "prodDesc3.png",
          desc: "Natural Calming  TeaScent",
        },
        {
          img: "prodDesc4.png",
          desc: "Suitable for  most skin types",
        },
      ],
    },
    {
      id: 4,
      image: "serum.jpeg",
      name: "Skinaro Tea Brightening Serum",
      category: "BRIGHTENING CLEANSER",
      description:
        "Merupakan toner essence dengan tekstur sangat ringan berfungsi untuk menyeimbangkan pH kulit wajah sekaligus mengembalikan kelembapan kulit. mengandung Ekstrak Teh & Niacinamide 2% yang dapat membantu meningkatkan kecerahan dan menjaga barrier kulit wajah.",
      ingridients: [
        {
          title: "Camellia Sinensis Leaf Extract",
          dexc: "Merupakan kandungan dengan tinggi antioksidan dapat bantu melindungi kerusakan sel akibat radikal bebas. Sehingga dapat mencegah inflamasi, hingga merawat kesehatan kulit.",
        },
        {
          title: "Niacinamide 4%",
          dexc: "Kandungan yang dapat membantu mengatasi permasalahan wajah yang kusam dengan membantu mencerahkan kulit, sehingga wajah terlihat lebih sehat tanpa memberikan efek samping. Serta dapat membantu mengatasi permasalahan kulit yang berjerawat.",
        },
        {
          title: "Peptide",
          dexc: "sejenis peptide yang merupakan asam amino, yang berfungsi mendorong proses pembuatan protein, seperti kolagen dan elastin. Yang membantu mengatasi permasalahan kerutan dan kurangnya elastisitas pada wajah",
        },
      ],
      benefit: [
        {
          img: "prodDesc1.png",
          desc: "Brightens with high antioxidant",
        },
        {
          img: "anti-aging.png",
          desc: "Prevent anti-aging",
        },
        {
          img: "prodDesc3.png",
          desc: "Natural Calming  TeaScent",
        },
        {
          img: "prodDesc4.png",
          desc: "Suitable for  most skin types",
        },
      ],
    },
    {
      id: 2,
      image: "toner.jpeg",
      name: "Skinaro Tea Brightening Essence Toner",
      category: "BRIGHTENING CLEANSER",
      description:
        "Merupakan toner essence dengan tekstur sangat ringan berfungsi untuk menyeimbangkan pH kulit wajah sekaligus mengembalikan kelembapan kulit. mengandung Ekstrak Teh & Niacinamide 2% yang dapat membantu meningkatkan kecerahan dan menjaga barrier kulit wajah.",
      ingridients: [
        {
          title: "Camellia Sinensis Leaf Extract",
          dexc: "Merupakan kandungan dengan tinggi antioksidan dapat bantu melindungi kerusakan sel akibat radikal bebas. Sehingga dapat mencegah inflamasi, hingga merawat kesehatan kulit.",
        },
        {
          title: "Niacinamide 2%",
          dexc: "Kandungan yang dapat membantu mengatasi permasalahan wajah yang kusam dengan membantu mencerahkan kulit, sehingga wajah terlihat lebih sehat tanpa memberikan efek samping. Serta dapat membantu mengatasi permasalahan kulit yang berjerawat.",
        },
        {
          title: "Ceramide",
          dexc: "Bantu mencegah hilangnya kelembaban dan melindungi kulit dari radikal bebas",
        },
      ],
      benefit: [
        {
          img: "prodDesc1.png",
          desc: "Brightens with high antioxidant",
        },
        {
          img: "ph-b.png",
          desc: "pH Balance",
        },
        {
          img: "prodDesc3.png",
          desc: "Natural Calming  TeaScent",
        },
        {
          img: "prodDesc4.png",
          desc: "Suitable for  most skin types",
        },
      ],
    },
  ];
  const [slider, setSlider] = useState(0);
  const [prodImage, setProdImage] = useState(0);
  const [productDesc, setProductDesc] = useState("about");

  // useEffect(() => {
  //     const interval = setInterval(() => setSlider((prev) => (prev === (productData.length - 1) ? 0 : prev + 1)), 3000)
  //     return () => clearInterval(interval)
  // }, [])
  const prevOnClick = () => {
    setSlider((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    setProdImage(0)
  };
  const nextOnClick = () => {
    setSlider((prev) => (prev === data.length - 1 ? 0 : prev + 1));
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
      <h2 className="font-luxyna text-black text-center mb-16 text-4xl md:text-7xl">
        Our Product
      </h2>
      <div className="container mx-auto max-w-7xl px-6 md:px-10 lg:px-24 text-black flex flex-col md:flex-row h-full justify-around gap-6 md:gap-0 group relative">
        <div
          onClick={prevOnClick}
          className="prev-arrow z-10 hidden group-hover:block absolute top-[200px] sm:top-[200px] md:top-[200px] left-0 xs:left-5 md:left-10  cursor-pointer duration-500 bg-white border shadow-md p-1 md:p-2 rounded-md"
        >
          <FaChevronLeft size={32} className="font-bold text-[#FC7F66]" />
        </div>
        <div
          onClick={nextOnClick}
          className="next-arrow z-10 hidden group-hover:block absolute top-[200px] sm:top-[200px] md:top-[200px] right-0 xs:right-5 md:right-10 lg:right-10  cursor-pointer bg-white border shadow-md p-1 md:p-2 rounded-md"
        >
          <FaChevronRight size={32} className="font-bold text-[#FC7F66]" />
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
                <Image src={`${process.env.NEXT_PUBLIC_APP_API_PUBLIC}/${data[slider].product_images[prodImage].image_default}`} fill className="object-contain px-4 pt-4 md:px-6 md:pt-6 transition-all duration-500" alt={data[slider].overview_title || "Skinaro Product"} />
              </div>
              {/* <img src={`${process.env.NEXT_PUBLIC_APP_API_PUBLIC}/${data[slider].product_images[prodImage].image_default}`} alt="" className="md:w-full h-full md:h-auto object-cover duration-500 px-8 md:px-12 justify-center self-center"  /> */}
            </div> : <div
              className={`w-full bg-contain md:bg-contain bg-center image h-[350px] md:h-[450px] md:w-2/3 flex justify-center items-center self-center md:p-8 duration-500 transition-all bg-no-repeat`}
              style={{ backgroundImage: `url(${productData[slider].image})` }}
            ></div>
          }
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
          <h3 className="text-3xl lg:text-5xl font-luxyna text-[black] self-start transition-all duration-300">
            {data[slider].overview_title || productData[slider].name}
          </h3>
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
          <div className="description text-gray-700 transition-all duration-300">

            {
              productDesc === "about" ?
                data[slider].overview_desc ? parse(data[slider].overview_desc) : ""
                : productDesc === "how" ? data[slider].how_to_use ? parse(data[slider].how_to_use) : ""
                  : productDesc === "ingridients" ? data[slider].ingredients ? parse(data[slider].ingredients) : ""
                    : ""
            }
          </div>

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
