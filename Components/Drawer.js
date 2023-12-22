"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import '../styles/drawer.css'
import Link from 'next/link';

const Drawer = ({click}) => {
  const [draweropen, setDraweropen] = useState(false)
  const [drawerclose, setDrawerclose] = useState(false)
  const [isBlur, setisBlur] = useState(false)

  const handleOpenDrawer = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setDraweropen(true);
    setisBlur(true);
    setDrawerclose(false); // Reset drawerclose state
  }

  const handleCloseDrawer = () => {
    setDrawerclose(true);
    setisBlur(false);
    setDraweropen(false); // Reset draweropen state
  }

  return (
    <>
      <button className="drawer-container " onClick={handleOpenDrawer}>
        <Image
          src='/Images/drawer3.svg'
          width="1920"
          height="200"
          id='drawerImg'
          className='drawer invert-0 dark:invert'>
        </Image>
      </button>
      
      <div className={`drawer-content dark:bg-[#484848a6] dark:text-white  ${draweropen ? 'opened' : ''} ${drawerclose ? 'closed' : ''}`}>
        <span className="closebtn bg-[#00000022] dark:bg-[#ffffff22] flex items-center justify-center gap-2 px-2 py-2" onClick={handleCloseDrawer} >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg>
          Close
        </span>
        <div className="link-container flex items-start flex-col justify-center mt-8">
          <Link onClick={click} className='animes text-black dark:text-white font-semibold' href="/">Home</Link>
          <div className="line"></div>
          <Link onClick={click} className='animes text-black dark:text-white font-semibold' href="/Populer">Populer Anime</Link>
          <div className="line"></div>
          <Link onClick={click} className='animes text-black dark:text-white font-semibold' href="/Airing">Airing Anime</Link>
          <div className="line"></div>
          <Link onClick={click} className='animes text-black dark:text-white font-semibold' href="/Top">Top Anime</Link>
          <div className="line"></div>
          <Link onClick={click} className='animes text-black dark:text-white font-semibold' href="/Upcoming">Upcoming Anime</Link>
          <div className="line"></div>
          <Link onClick={click} className='animes text-black dark:text-white font-semibold' href="/Random">Random Anime</Link>
        </div>
      </div>

      <div className={`add-blur bg-opacity-20 dark:bg-[#00000066] ${isBlur ? 'blured' : ''}`}></div>
    </>
  );
}

export default Drawer;
