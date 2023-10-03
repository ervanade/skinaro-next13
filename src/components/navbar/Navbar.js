'use client'
import React from 'react'
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from 'next/image';
const Navbar = () => {
  const [color, setColor] = useState(false);
  const [menuButton, setMenuButton] = useState(false)

  const buttonOnChangeBars = () => {
    setMenuButton(prev => !prev)
  }
  const buttonOnChangeClose = () => {
    setMenuButton(false)
  }
  useEffect(() => {
    const changeColor = () => {
      if (typeof window !== "undefined") {
        // Client-side-only code
        if (window.scrollY > 5) {
          setColor(true);
        } else {
          setColor(false);
        }
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeColor);
    }
  }, [])

  const changeColor = () => {
    if (typeof window !== "undefined") {
      // Client-side-only code
      if (window.scrollY > 5) {
        setColor(true);
      } else {
        setColor(false);
      }
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeColor);
  }

  const navbarMenu = [
    { id: 1, name: "Home", link: "#hero" },
    { id: 2, name: "Why Aro ?", link: "#why-aro" },
    { id: 3, name: "Our Product", link: "#product" },
    { id: 4, name: "Talk With Bestea", link: "#contact", icon: "yes" },
  ]
  return (
    <div
      className={`${color ? "!bg-white text-[#6B826F] shadow-md" : ""
        } navbar-fixed fixed top-0 left-0 w-full z-50`}
    >
      <div className="container relative mx-auto max-w-7xl px-6 md:px-10 lg:px-24 py-4 flex justify-between items-center">
        <div className="left-navbar">
          {color ? (
            <a href='#hero'>
              <div className='w-[112px] md:w-[155px] h-[calc(112px/2.775)] md:h-[calc(155px/2.775)] aspect-[2.775] relative'>
                <Image src="/logo-hitam.png" alt="Logo Skinaro" fill sizes='100vw' className="w-full h-auto object-contain" />
              </div>
            </a>
          ) : (
            <a href='#hero'>
              {/* <img src="/logo-hitam.png" alt="Logo Skinaro" className="w-28 h-10 md:w-[155px] md:h-14" /> */}
              <div className='w-[112px] md:w-[155px] h-[calc(112px/2.775)] md:h-[calc(155px/2.775)] aspect-[2.775] relative'>
                <Image src="/logo-hitam.png" alt="Logo Skinaro" fill sizes='100vw' className="w-full h-auto object-contain" />
              </div>
            </a>
          )}
        </div>
        <div className='flex lg:hidden'>
          <button className="lg:hidden" onClick={buttonOnChangeBars} aria-label="menu bar button">
            <GiHamburgerMenu className={`text-2xl ${color ? 'text-[#5F8171] hover:text-[#5e8a65]' : 'text-gray-700 hover:text-gray-900'} `} />
          </button>
        </div>
        <div className="right-navbar lg:flex space-x-6 hidden lg:block items-center">
          {navbarMenu.map(item => {
            return (
              <a key={item.id} href={item.link} className={`${color ? 'text-gray-700 hover:text-gray-900' : 'text-gray-700 hover:text-gray-900 '} text-xl ${item.name === 'Home' ? 'font-normal' : ''} ${item.name === 'Home' && !color ? '!text-gray-700' : ''}`}>

                {item.icon ? <div className='flex items-center gap-1'>{item.name}<div className='w-[40px] md:w-[40px] h-[calc(40px)] md:h-[calc(40px)] aspect-square relative'>
                  <Image src="/assets/mascot-2.png" alt="Logo Skinaro" fill sizes='100vw' className="w-full h-auto object-contain" />
                </div></div> : item.name}
              </a>
            )
          })}
        </div>

        {/* <a href='#hero' className='absolute right-5 hidden lg:block'>
              <div className='w-[40px] md:w-[53px] h-[calc(40px/0.8)] md:h-[calc(53px/0.8)] aspect-[0.8] relative'>
              <Image src="/assets/mascot-3.png" alt="Logo Skinaro" fill sizes='100vw' className="w-full h-auto object-contain" />
              </div>
            </a> */}
        <div className={`right-navbar z-50 space-y-4 flex flex-col fixed top-0 ${menuButton ? 'right-0' : '-right-[350px]'} lg:hidden w-2/3 xs:w-[350px] py-10 xs:py-16 px-8 xs:px-14 bg-[#5F8171] text-white h-full duration-200 transition-all ease-in`}>
          <button className='absolute top-5 right-6' onClick={buttonOnChangeClose}><GiHamburgerMenu className='text-3xl text-gray-200 hover:text-white ' aria-label="close menu bar button" /></button>
          {navbarMenu.map(item => {
            return (
              <a key={item.id} href={item.link} className={`text-xl text-gray-200 hover:text-white font-medium flex items-center`}>
                {item.name}
                {item.icon ? <div className='w-[50px] md:w-[50px] h-[calc(50px)] md:h-[calc(50px)] aspect-square relative'>
                  <Image src="/assets/mascot-2.png" alt="Logo Skinaro" fill sizes='100vw' className="w-full h-auto object-contain" />
                </div> : ""}
              </a>
            )
          })}
        </div>
      </div>
      <div className={`overlay w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-20 z-[2] transition-all duration-300 lg:hidden ${menuButton ? "block" : "hidden"} `} onClick={() => setMenuButton(false)}></div>
    </div>
  )
}

export default Navbar