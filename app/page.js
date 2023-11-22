"use client"

import Footer from '@/Components/Footer'
import React, { useEffect } from 'react'
import Indexscroll from '@/Components/Indexscroll'
import Indexpopular from '@/Components/Indexpopular'
import Indexupcoming from '@/Components/Indexupcoming'
import Indexairing from '@/Components/Indexairing'

const page = () => {
  return (
    <div>
      <Indexscroll />
      <Indexpopular />
      <Indexairing />
      <Indexupcoming />
      <Footer />
    </div>
  )
}

export default page
