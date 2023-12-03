"use client"
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import '../styles/indexanime.css'
import '../styles/viewmoreani.css'
import Image from 'next/image'
import { ThemeProvider } from 'next-themes'

const Body = ({
    baseURL,
    endpoint,
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
    viewMoreSVGWH = '16'
}) => {
    // const baseURL = "https://api.jikan.moe/v4";

    const [anime, setAnime] = useState([]);
    // const [upcomingAnime, setUpcomingAnime] = useState([]);
    // const [airingAnime, setAiringAnime] = useState([]);
    // const [pictures, setPictures] = useState([]);
    // const [isSearch, setIsSearch] = useState(false);
    // const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false)

    const getAnime = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${baseURL}/${endpoint}`);
            const data = res.data;
            // console.log("context", data.data);
            setAnime(data.data.slice(0, numItems));
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

    return (
        <ThemeProvider attribute="class">
            {/* Render data when anime length is greater than 0 means when data is fetched then only show view more option */}
            {anime.length > 0 && (
                <div className={`${styleClassName} ${styleClass}`} ref={scrollRef}>
                    {anime.map((anime, i) => {
                        return <Link className={`${linkClassName} ${linkWH} ${styleRounded} ${styleMargin}`} href={`/${anime.mal_id}`} >
                            <img
                                key={i}
                                src={anime.images.jpg.large_image_url} alt=""
                                className={`object-cover block ml-1 w-[90%] h-[90%] scale-90 hover:scale-100 ${styleRounded} `}
                                id='animeimg'
                            />
                            <h1 className={`text-black dark:text-white  mt-[-0.2rem] text-sm tracking-normal leading-4 text-center font-bold py-2 px-8 whitespace-nowrap overflow-hidden overflow-ellipsis ${titleClass}`}>{anime.title}</h1>
                        </Link>
                    })}

                    <Link className={`bg-zinc-300 dark:bg-slate-200 ${viewMoreClassname}`} href={`/${viewmorePage}`}>
                        <button class="learn-more">
                            <span class="circle bg-[#282936] dark:bg-[#5b65db]" aria-hidden="true">
                                <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">View More</span>
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
        </ThemeProvider>
    );
};

export default Body;
