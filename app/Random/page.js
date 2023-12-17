import Body from '@/Components/Body'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className=''>
        <Body
          baseURL="https://api.jikan.moe/v4"
          endpoint="anime?q=${search}&order_by=title&sort=asc&limit=10"
          titleClass='w-64'
        />
      </div>
    </div>
  )
}

export default page
