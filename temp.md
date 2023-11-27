"use state"
import Image from 'next/image'
import React, { useState } from 'react'
import '../styles/drawer.css'

const Drawer = () => {
  const [draweropen, setDraweropen] = useState(false)
  const [drawerclose, setDrawerclose] = useState(false)

  const handleOpenDrawer = () => {
    setDraweropen(true);
  }

  const handleCloseDrawer = () => {
    setDrawerclose(true);
  }

  return (
    <>
      <button className="drawer-container" onClick={handleOpenDrawer}>
        <Image
          src='/Images/drawer.svg'
          width="1920"
          height="200"
          id='drawerImg'
          className='drawer invert-0 dark:invert'>
        </Image>
      </button>
      <div className={`drawer-content z-40 dark:bg-[#00000088]  ${draweropen ? 'opened' : ''} ${drawerclose ? 'closed' : ''}`}>
        <span className="closebtn bg-[#00000022] flex items-center justify-between px-4 py-2" onClick={handleCloseDrawer} >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg>
          Close
        </span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis quo quidem, explicabo repellat sit accusantium nostrum obcaecati, est sapiente ex temporibus! Tempore, mollitia repellendus amet aperiam possimus quas eos animi praesentium repellat. Magni enim quod quam maxime consequatur, deserunt officia maiores facilis esse quis!
      </div>
    </>
  )
}

export default Drawer
