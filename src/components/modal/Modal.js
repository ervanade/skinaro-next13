"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({ data, link }) => {
  const [openModal, setOpenModal] = useState(true);
  return (
    <div
      className={`${
        !openModal ? "hidden" : ""
      } text-gray-700 fixed flex items-center justify-center w-screen h-screen top-0 z-50 p-6  transition-all duration-300 shadow-md`}
    >
      <div
        className={`overlay w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-20 z-[2] transition-all duration-300 ${
          openModal ? "block" : "hidden"
        } `}
        onClick={() => setOpenModal(false)}
      ></div>
      <div className="modal-wrapper transition-all duration-300 w-full max-w-[400px] md:max-w-md p-6 h-max relative flex items-center justify-center z-10">
        <div
          className="close-button absolute text-orange-500 right-1 top-2 cursor-pointer"
          onClick={() => setOpenModal(false)}
        >
          <AiFillCloseCircle className="text-2xl bg-white rounded-full" />
        </div>
        {/* <div className="image-wrapper w-full h-full flex items-center justify-center cursor-pointer relative">
                    <img src={`${process.env.NEXT_PUBLIC_APP_API_PUBLIC}/${data[0].image_popup}` || "/assets/hero/hero-bg-4.png"} alt="Popup Skinaro" className='w-full' />
                  </div> */}

        <div className="image-wrapper w-full aspect-[1.5] flex items-center justify-center cursor-pointer relative shadow-md rounded-lg">
                  <a
                     href={link?.shopee || "https://shopee.co.id/skinaroofficial"}
                     target="_blank"
                   >
          <Image
            src={
              `${process.env.NEXT_PUBLIC_APP_API_PUBLIC}/${data[0].image_popup}` ||
              "/assets/popup.jpg"
            }
            alt="Popup Skinaro"
            fill
            className="w-full h-auto object-contain shadow-md rounded-lg"
            />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
