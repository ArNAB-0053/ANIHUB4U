import Image from 'next/image'
import React from 'react'

const Drawer = () => {
  return (
    <button className='drawer-container'>
        <Image
            src='/Images/drawer.svg'
            width="1920"
            height="200"
            id='drawerImg'
            className='drawer invert-0 dark:invert'>
          </Image>
    </button>
  )
}

export default Drawer
