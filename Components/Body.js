"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

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
    titleClass = "text-white text-center"
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


    return (
        <>
            <div className={`${styleClassName} ${styleClass}`}>
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
            </div>
        </>
    );
};

export default Body;
