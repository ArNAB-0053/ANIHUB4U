import Body from '@/Components/Body'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='pt-12'>
        <Body baseURL="https://api.jikan.moe/v4" endpoint="seasons/upcoming" />
      </div>
    </div>
  )
}

export default page
