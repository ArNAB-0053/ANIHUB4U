import Toptenholder from '@/Components/Toptenholder'
import React from 'react'

const page = () => {
  return (
    <Toptenholder
      baseURL="https://api.jikan.moe/v4"
      endpoint="top/anime?filter=bypopularity"
      type="Most Popular"
    />
  )
}

export default page
