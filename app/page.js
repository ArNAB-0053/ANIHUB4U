"use client"
import React, { useEffect } from 'react'
import Indexscroll from '@/Components/Indexscroll'
import Indexpopular from '@/Components/Indexpopular'
import Indexupcoming from '@/Components/Indexupcoming'
import Indexairing from '@/Components/Indexairing'
import { ThemeProvider } from 'next-themes'

const page = () => {
  // useEffect(() => {
  //   console.clear();
  // }, []);
  return (
    <ThemeProvider attribute="class">
      <Indexscroll />
      <Indexpopular />
      <Indexairing />
      <Indexupcoming />
    </ThemeProvider>
  )
}

export default page
