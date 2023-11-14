import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='header-con py-6'>
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
