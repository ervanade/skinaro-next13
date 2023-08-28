"use client"
import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

const Modal = () => {
    const [openModal, setOpenModal] = useState(true)
  return (
    <div className={`${!openModal ? "hidden" : ''} text-gray-700 fixed flex items-center justify-center w-screen h-screen top-0 z-50 p-6  transition-all duration-300 shadow-md`}>
        <div className={`overlay w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-20 z-[2] transition-all duration-300 lg:hidden ${openModal ? "block" : "hidden"} `} onClick={() => setOpenModal(false)}></div>
        <div className="modal-wrapper transition-all duration-300 w-full max-w-lg bg-white p-6 h-max relative flex items-center justify-center shadow-md rounded-lg z-10">
            <div className="close-button absolute text-orange-500 right-1 top-2 cursor-pointer" onClick={() => setOpenModal(false)}>
                <AiFillCloseCircle className='text-xl'/>
            </div>
            <div className="image-wrapper w-full h-full flex items-center justify-center cursor-pointer">
                <img src="/assets/hero/hero-bg-4.png" alt="Popup Skinaro" className='w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Modal