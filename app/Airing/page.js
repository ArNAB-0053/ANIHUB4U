import Toptenholder from '@/Components/Toptenholder'
import React from 'react'

const page = () => {
  return (
    <Toptenholder
      baseURL="https://api.jikan.moe/v4"
      endpoint="top/anime?filter=airing"
      type='Airing'
    />
  )
}

export default page