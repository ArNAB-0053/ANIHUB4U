import React from 'react'
import Body from './Body'
import '../styles/indexanime.css'

const Indexairing = () => {
  return (
    <div className='index-anime-main'>
      <div className='index-anime-container '>
        <h1 className='text-white '>Airing Animes</h1>
        <Body
          baseURL="https://api.jikan.moe/v4"
          endpoint="top/anime"
          numItems={10}
          styleClassName='index-anime-content'
          styleClass="grid py-2"
          linkWH='w-40 h-52'
          styleRounded='rounded'
          styleMargin=''
        />
      </div>
    </div>
  )
}

export default Indexairing
