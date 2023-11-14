import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'
import Indexscroll from '@/Components/Indexscroll'
import Indexpopular from '@/Components/Indexpopular'
import Indexupcoming from '@/Components/Indexupcoming'
import Indexairing from '@/Components/Indexairing'

const page = () => {
  return (
    <div>
      <Header />
      <Indexscroll />
      <Indexpopular />
      <Indexairing />
      <Indexupcoming />
      <Footer />
    </div>
  )
}

export default page
