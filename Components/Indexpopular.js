import React from 'react'
import Body from './Body'
import '../styles/indexanime.css'

const Indexpopular = () => {
  return (
    <div className='index-anime-main'>
      <div className='index-anime-container '>
        <h1 className='text-white '>Popular Animes</h1>
        <Body
          baseURL="https://api.jikan.moe/v4"
          endpoint="top/anime?filter=bypopularity"
          numItems={10}
          styleClassName='index-anime-content'
          styleClass="grid py-2"
          linkClassName='link-container'
          linkWH='w-44 h-56'
          styleRounded='rounded'
          styleMargin=''
        />
      </div>
    </div>
  )
}

export default Indexpopular
