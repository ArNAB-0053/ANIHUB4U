import React from 'react'
import Body from './Body'
import '../styles/indexanime.css'


const Indexbody = ({ starting = "https://api.jikan.moe/v4", ending, animeHeading }) => {    
    return (
        <div className="index-anime-container my-6">
            <h1 id='animeheading' className='ml-12 '>{animeHeading}</h1>
            <Body
                baseURL={starting}
                endpoint={ending}
                slicingStart={0}
                numItems={10}
                styleClassName='index-anime-content'
                styleClass="grid py-2 gap-2"
                linkClassName='link-container'
                linkWH='w-52 h-64'
                styleRounded='rounded'
                styleMargin=''
                btnClassname='flex items-center justify-center'
                viewMoreClassname='viewmore flex items-center justify-center text-white flex-col'
                viewmorePage='Populer'
                titleClass='w-48'
                styleinfo='w-[100%] h-[100%] rounded text-[0.5rem]'
                titletxt='text-[0.7rem] leading-[0.65rem]'
                synopsistxt='text-[0.5rem]'
                txt='text-[0.55rem]'
                alltxt='text-[0.65rem]'
                jpTitle='text-[0.4rem]'
                wh='8'
            />
        </div>
    )
}

export default Indexbody
