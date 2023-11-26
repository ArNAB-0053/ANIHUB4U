"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Searchbar from './Searchbar'
import Drawer from './Drawer'
import Profile from './Profile'
import Mode from './Mode'
import { ThemeProvider } from 'next-themes'


const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const scrollThreshold = 50;

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(document.body.scrollTop >= scrollThreshold);
    };

    document.body.addEventListener('scroll', handleScroll);

    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <ThemeProvider attribute="class">
      <div className={`header-con py-3 ${isFixed ? 'fixed opacity-100 text-white  dark:bg-[#00000066]' : ''}`} >
        <header className="header text-black">
          <div className="leftside flex items-center gap-8">
            <Drawer />
            <Link href="/">
              <Image
                src='/Images/logo.png'
                width="1920"
                height="200"
                id='logoImg'
                className='logo'>
              </Image>
            </Link>
            <Searchbar />
          </div>
          <div className="anime-container">
            <Link className='animes text-black dark:text-white ' href="/Populer">Populer Anime</Link>
            <Link className='animes text-black dark:text-white' href="/Airing">Airing Anime</Link>
            <Link className='animes text-black dark:text-white' href="/Upcoming">Upcoming Anime</Link>
          </div>
          <Mode />
          <Profile />
        </header>
      </div>
    </ThemeProvider>
  )
}

export default Header
