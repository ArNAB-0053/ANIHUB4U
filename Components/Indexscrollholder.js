import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import '../styles/viewmoreani.css'

const Indexscrollholder = ({animeID, heading, h1head = 'text-[5rem]', desc, linkPath, imgPath}) => {
    return (
        <div className='animeItem flex items-center justify-between' id={animeID}>
            <div className="texts text-white z-10 px-8 pt-40">
                <h1 className={`mt-16 ${h1head}`}>{heading}</h1>
                <h2 className='w-5/6'>{desc}...</h2>
                <Link id='viewmorelink' className={`bg-zinc-300 dark:bg-slate-200`} href={`./${linkPath}`}>
                            <button id='viewmorebtn' class="learn-more">
                                <span className="circle bg-[#3D30CB] dark:bg-[#ff0000]" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Details</span>
                            </button>
                        </Link>
            </div>
            <div className="indexImgContainer flex justify-end mr-20">
                <Image
                    src={`/Images/${imgPath}.jpg`}
                    width="1920"
                    height="200"
                    className='index-img'>
                </Image>
            </div>
        </div>
    )
}

export default Indexscrollholder
