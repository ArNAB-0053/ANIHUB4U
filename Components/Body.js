"use client"
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import '../styles/indexanime.css'
import '../styles/viewmoreani.css'
import Image from 'next/image'
// import { ThemeProvider } from 'next-themes'

const Body = ({
    baseURL,
    endpoint,
    slicingStart = 0,
    numItems,
    styleClassName = "imgContainer",
    styleClass = "grid grid-rows-5 grid-cols-5 my-16 mx-10 pt-12 px-2 gap-y-6",
    linkClassName = 'flex flex-col items-center',
    linkWH = "w-64 h-96",
    styleRounded = "rounded-xl",
    styleMargin = "",
    titleClass = "text-center",
    btnClassname = 'hidden',
    viewMoreClassname = 'hidden',
    viewmorePage = '',
    styleinfo = 'w-[100%] h-[80%] rounded-[0.8rem] rounded-t-[3rem] overflow-hidden',
    titletxt = 'text-sm leading-4',
    synopsistxt = 'text-[0.7rem]',
    alltxt = 'text-[0.77rem]',
    txt = 'text-[0.8rem]',
    jpTitle = 'text-[0.7rem]',
    wh = '16'
}) => {
    const [anime, setAnime] = useState([]);
    const [loading, setLoading] = useState(false)

    const getAnime = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${baseURL}/${endpoint}`);
            const data = res.data;
            // console.log("context", data.data);
            setAnime(data.data.slice(slicingStart, numItems));
        }
        catch (error) {
            if (axios.isCancel(error)) {
                // Check if the request was canceled due to unmounting
                if (error.message !== "Component unmounted") {
                    console.log('Request canceled:', error.message);
                }
            } else {
                console.error("Error fetching anime:", error);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAnime();

        // return () => {
        //     if (!source.token.reason?.message || source.token.reason.message !== "Component unmounted") {
        //         source.cancel("Component unmounted");
        //     }
        // };


    }, []);



    // // Rating, fav and others
    // const getInfo = async (id) => {
    //     const res = await axios.get(`${baseURL}/anime/${id}/full`);
    //     const data = res.data.data;
    //     console.log("Rating",data.score);
    // }

    // useEffect(() => {
    //     getInfo(20);
    // }, []);


    // Scrolling 
    const scrollRef = useRef(null); // useRef is used to target scroll bar

    const handleScrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 200;
        }
    };
    const handleScrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 200;
        }
    };

    // useEffect(() => {
    //     console.clear();
    // }, []);

    return (
        <div id='animeConID'>
            {/* Render data when anime length is greater than 0 means when data is fetched then only show view more option */}
            {anime.length > 0 && (
                <div className={`${styleClassName} ${styleClass}`} ref={scrollRef}>
                    {anime.map((anime, i) => {
                        return <Link className={`${linkClassName} ${linkWH} ${styleRounded} ${styleMargin}`} id='linkcontainer' href={`/${anime.mal_id}`} >
                            <div className='w-[90%] h-[90%] flex items-center justify-center relative overflow-hidden'>
                                <img
                                    key={i}
                                    src={anime.images.jpg.large_image_url} alt={anime.title_english !== null ? anime.title_english : anime.title}
                                    className={`animeimage object-cover block w-full h-full scale-90 shadow-none ${styleRounded} `}
                                    id='animeimg'
                                />

                                <div className={`info dark:bg-[#3d3d3da5] bg-[#dadadaa5] text-white ${styleinfo}`} id='info' href={`/${anime.mal_id}`} >
                                    <h1 className={`flex items-center justify-center gap-2 text-black dark:text-white w-[90%] ${titletxt} font-bold break-words text-center mb-4`}>
                                        {anime.title_english !== null ? anime.title_english : anime.title}
                                        <div className='gap-[1px] flex items-center justify-center'>
                                            <div className='block p-1 bg-purple-500 rounded-l-[0.2rem]'>
                                                {anime.type}
                                            </div>
                                            {anime.episodes !== null && (
                                                <div className='block p-1 bg-[#5f39da] rounded-r-[0.2rem]'>
                                                    {anime.episodes}
                                                </div>
                                            )}
                                        </div>
                                    </h1>
                                    <div className={`flex items-center justify-center gap-y-[0.4rem] w-full flex-col ${alltxt}`}>
                                        <div className={`flex items-center justify-center gap-[0.2rem] w-full ${txt}`}>
                                            <div className='flex items-center justify-center gap-2 bg-blue-500 py-1 px-2 w-[36%] rounded-l-xl'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={wh}
                                                    height={wh}
                                                    fill="currentColor"
                                                    className="bi bi-star-fill text-yellow-400 w-3"
                                                    viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>

                                                {anime.score !== null
                                                    ? anime.score
                                                    : 'N/A'}
                                            </div>
                                            <div className='bg-yellow-600 py-1 px-2 w-[34%] text-center'>
                                                {anime.rating !== null
                                                    ? anime.rating && anime.rating.slice().replace(/\s/g, '').substring(0, 5)
                                                    : 'N/A'}
                                            </div>
                                            <div className='bg-green-600 py-1 px-2 w-[34%] text-center rounded-r-xl'>
                                                {anime.duration !== 'Unknown' && anime.duration !== null
                                                    ? anime.duration && anime.duration.substring(0, 7)
                                                    : 'N/A'}
                                            </div>
                                        </div>
                                        <div className={`w-full text-start leading-3 ${synopsistxt} text-[#3d3d3d] dark:text-[#dadadae1]`}>
                                            {anime.synopsis && anime.synopsis.substring(0, 100) + '...'}
                                        </div>

                                        {anime.title_japanese !== null && (
                                            <div className='flex items-start justify-start gap-2 w-full text-start leading-3 text-black dark:text-white'>
                                                <p className='text-[#3d3d3d] dark:text-[#dadadae1]'>
                                                    Japanese:
                                                </p>
                                                <p className={`block ${jpTitle}`} >
                                                    {anime.title_japanese}
                                                </p>
                                            </div>
                                        )}

                                        {anime.title_synonyms.length > 0 && (
                                            <div className='flex items-start justify-start gap-2 w-full text-start leading-3 text-black dark:text-white'>
                                                <p className='text-[#3d3d3d] dark:text-[#dadadae1]'>
                                                    Synonyms:
                                                </p>
                                                <p className='block'>
                                                    {anime.title_synonyms[0] && anime.title_synonyms[0].substring(0, 10)}
                                                </p>

                                            </div>
                                        )}

                                        {anime.genres.length > 0 && (
                                            <div className='w-full flex items-start justify-start gap-2 text-start leading-3 text-black dark:text-white'>
                                                <p className='text-[#3d3d3d] dark:text-[#dadadae1]'>
                                                    Genre:
                                                </p>
                                                <p className='block'>
                                                    {anime.genres.map((genre, index) => (
                                                        <span key={index}>
                                                            {genre.name}
                                                            {index < anime.genres.length - 1 && ', '}
                                                        </span>
                                                    ))}
                                                </p>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>

                            <h1 className={`text-black dark:text-white  mt-[-0.2rem] text-sm tracking-normal leading-4 text-center font-bold py-2 px-8 whitespace-nowrap overflow-hidden overflow-ellipsis ${titleClass}`}>{anime.title_english !== null ? anime.title_english : anime.title}
                            </h1>


                        </Link>
                    })}



                    <Link id='viewmorelink' className={`bg-zinc-300 dark:bg-slate-200 ${viewMoreClassname}`} href={`/${viewmorePage}`}>
                        <button id='viewmorebtn' class="learn-more">
                            <span className="circle bg-[#282936] dark:bg-[#5b65db]" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">View More</span>
                        </button>
                    </Link>
                </div>
            )}

            <button className={`scroll-right dark:bg-[#ffffff4d] ${btnClassname}`} id='scrollleft' onClick={handleScrollRight}>
                <Image
                    src='/Images/nextArrow.svg'
                    width="1920"
                    height="200"
                    id='nxtimg'
                    className='nextArrow'>
                </Image>
            </button>

            <button className={`scroll-left dark:bg-[#ffffff4d] ${btnClassname}`} id='prevbtn' onClick={handleScrollLeft}>
                <Image
                    src='/Images/nextArrow.svg'
                    width="1920"
                    height="200"
                    id='previmg'
                    className='prevArrow'>
                </Image>
            </button>
        </div>
    );
};

export default Body;
