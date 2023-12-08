import React from 'react'
import Body from './Body'
import '../styles/indexanime.css'

const Indexupcoming = () => {
  return (
    <div className='index-anime-main'>
      <div className='index-anime-container'>
        <h1 id='animeheading' className='ml-12 '>Upcoming Animes</h1>
        <Body
          baseURL="https://api.jikan.moe/v4"
          endpoint="seasons/upcoming"
          numItems={10}
          styleClassName='index-anime-content'
          styleClass="grid py-2 gap-2"
          linkClassName='link-container'
          linkWH='w-52 h-64'
          styleRounded='rounded'
          styleMargin=''
          btnClassname ='flex items-center justify-center'
          viewMoreClassname='viewmore flex items-center justify-center text-white flex-col'
          viewMoreSVGWH = '22'
          viewmorePage='Upcoming'
          titleClass='w-48'
        />
      </div>
    </div>
  )
}

export default Indexupcoming
