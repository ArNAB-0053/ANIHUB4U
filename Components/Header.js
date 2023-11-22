"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

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
    <div className={`header-con py-6 ${isFixed ? 'fixed' : ''}`}>
      <div className="header text-white grid grid-rows-1 grid-cols-4 place-items-center">
        <Link href="/">ANIHUB</Link>
        <Link className='z-10' href="/Populer">Populer Anime</Link>
        <Link className='z-10' href="/Airing">Airing Anime</Link>
        <Link className='z-10' href="/Upcoming">Upcoming Anime</Link>
      </div>
    </div>
  )
}

export default Header
