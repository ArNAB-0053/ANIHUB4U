"use client"
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import '../styles/indexanime.css'
import Image from 'next/image'

const Body = ({
    baseURL,
    endpoint,
    numItems,
    styleClassName = "imgContainer",
    styleClass = "grid grid-rows-5 grid-cols-5 gap-12 p-8",
    linkClassName = '',
    linkWH = "w-64 h-96",
    styleRounded = "rounded-xl",
    styleMargin = "",
    titleClass = "text-white text-center",
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
        <>
            {/* Render data when anime length is greater than 0 means when data is fetched then only show view more option */}
            {anime.length > 0 && (
                <div className={`${styleClassName} ${styleClass}`} ref={scrollRef}>
                    {anime.map((anime, i) => {
                        return <Link className={`${linkClassName} ${linkWH} place-self-center ${styleRounded} ${styleMargin}`} href={`/${anime.mal_id}`} >
                            <img
                                key={i}
                                src={anime.images.jpg.large_image_url} alt=""
                                className={`object-cover block w-full h-full ${styleRounded} `}
                            />
                            <h1 className={`${titleClass}`}>{anime.title}</h1>
                        </Link>
                    })}

                    <Link className={`${viewMoreClassname}`} href={`/${viewmorePage}`}>
                        <h1>View more</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width={`${viewMoreSVGWH}`} height={`${viewMoreSVGWH}`} fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                        </svg>
                    </Link>
                </div>
            )}

            <button className={`scroll-right ${btnClassname}`} id='scrollleft' onClick={handleScrollRight}>
                <Image
                    src='/Images/nextArrow.svg'
                    width="1920"
                    height="200"
                    id='nxtimg'
                    className='nextArrow'>
                </Image>
            </button>

            <button className={`scroll-left ${btnClassname}`} id='prevbtn' onClick={handleScrollLeft}>
                <Image
                    src='/Images/nextArrow.svg'
                    width="1920"
                    height="200"
                    id='previmg'
                    className='prevArrow'>
                </Image>
            </button>
        </>
    );
};

export default Body;
