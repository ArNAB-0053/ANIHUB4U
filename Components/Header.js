"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Searchbar from './Searchbar'
import Drawer from './Drawer'
import Profile from './Profile'
import Mode from './Mode'
import { ThemeProvider } from 'next-themes'
import '../styles/mode.css'


const Header = () => {

  const [isFixed, setIsFixed] = useState(false);
  const scrollThreshold = 20;

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(document.body.scrollTop >= scrollThreshold);
    };

    document.body.addEventListener('scroll', handleScroll);

    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, []);

// Function to hide Searchbar
const [searchbarStyle, setSearchbarStyle] = useState('');
  const handleLinkClick = () => {
    setSearchbarStyle('hidden');
  };

  const handleSearchbarClick = () => {
    setSearchbarStyle('');
  };

  return (
    <ThemeProvider attribute="class">
      <div className={`header-con py-3 ${isFixed ? 'fixed opacity-100 text-white  dark:bg-[#00000066]' : ''}`} >
        <header className="header text-black">
          <div className="leftside flex items-center gap-8">
            <Drawer click={handleLinkClick} />
            <Link onClick={handleLinkClick} href="/">
              <Image
                src='/Images/logo.png'
                width="1920"
                height="200"
                id='logoImg'
                className='logo'>
              </Image>
            </Link>
            <Searchbar style={searchbarStyle} click={handleSearchbarClick} />
          </div>
          <div className="anime-container">
            <Link onClick={handleLinkClick} className='animes text-black dark:text-white font-semibold' id='by' href="/Populer">Popular</Link>
            <Link onClick={handleLinkClick} className='animes text-black dark:text-white font-semibold' id='by' href="/Airing">Airing</Link>
            <Link onClick={handleLinkClick} className='animes text-black dark:text-white font-semibold' id='by' href="/Upcoming">Upcoming</Link>
          </div>
          <div className='flex items-center justify-end gap-4'>
            <Mode />
            <Profile />
          </div>
        </header>
      </div>
    </ThemeProvider>
  )
}

export default Header
