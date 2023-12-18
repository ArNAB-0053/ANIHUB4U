'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Rank from './Rank'


const Topten = ({ baseURL, endpoint, slicingStart, numItems, rankingStyle }) => {
    const [anime, setAnime] = useState([])
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
            console.log("There is an error")
        }

        finally {
            setLoading(false); // Set loading to false after data is fetched (success or error)
        }
    }

    // Modifying the rating, making it short
    const getShortenedRating = (fullRating) => {
        switch (fullRating) {
            case 'G - All Ages':
                return 'G';
            case 'PG - Children':
                return 'PG';
            case 'PG-13 - Teens 13 or older':
                return 'PG-13';
            case 'R - 17+ (violence & profanity)':
                return 'R-17+';
            case 'R+ - Mild Nudity':
                return 'R+';
            case 'Rx - Hentai':
                return 'RX';
            default:
                return fullRating;
        }
    };

    useEffect(() => {
        getAnime();
    }, []);
    return (
        <div>
            {loading || anime==0 ? (
                <div className='p-20'>
                    <div id='spinner' className="spinner"></div>
                </div>
            ) : (
                anime.map((anime, i) => {
                    return <Link className="relative bg-[#dadada] hover:bg-[#e7e7e7] dark:bg-[#3d3d3d4d] rounded-md dark:hover:bg-[#3d3d3d92] flex w-[90%] items-center justify-center h-[12rem] p-2 my-4 overflow-visible gap-y-4" id='linkcontainer' href={`/${anime.mal_id}`} >
                        <Rank rankingStyle="block" rank={i + 1} />
                        <div className="relative flex items-center justify-center gap-4">
                            <img
                                key={i}
                                src={anime.images.jpg.large_image_url} alt={anime.title_english !== null ? anime.title_english : anime.title}
                                className="w-28 h-40 m-6 object-cover rounded"
                            />

                            {/* {['R-17+', 'R+', 'RX'].includes(getShortenedRating(anime.rating)) && (
                                <div className={`block bg-red-600 absolute px-2 py-1 text-[0.7rem] top-0 right-0`}>
                                    18+
                                </div>
                            )} */}
                        </div>

                        <div className="w-[80%] flex items-start justify-start flex-col h-full py-6 pr-2 ml-2 text-zinc-500" href={`/${anime.mal_id}`} >
                            <h1 className="text-[1.1em] leading-6 mb-2">
                                {anime.title_english !== null ? anime.title_english : anime.title}
                            </h1>
                            <div className='gap-2 flex items-center justify-center text-[0.8rem]'>
                                <div className=''>
                                    {anime.type}
                                </div>
                                {anime.episodes !== null && (
                                    <div className='flex items-center justify-cente'>
                                        <p className='dark:bg-zinc-700 bg-zinc-200 py-[1px] px-2 rounded-l-md'>Ep</p>
                                        <p className='dark:bg-zinc-800 bg-zinc-300 py-[1px] px-2 rounded-r-md'>{anime.episodes}</p>
                                    </div>
                                )}
                                <div className=''>
                                    {anime.duration !== 'Unknown' && anime.duration !== null
                                        ? anime.duration && anime.duration.substring(0, 7)
                                        : 'N/A'}
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-start gap-x-6 text-[0.8rem]">
                                <div className='flex items-center justify-center gap-2'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={36}
                                        height={36}
                                        fill="currentColor"
                                        className="bi bi-star-fill text-yellow-400 w-4"
                                        viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>

                                    {anime.score !== null
                                        ? anime.score
                                        : 'N/A'}
                                </div>
                                <div className="">
                                    {anime.rating !== null
                                        ? getShortenedRating(anime.rating)
                                        : 'N/A'}
                                </div>
                            </div>
                            {anime.genres.length > 0 && (
                                <div className='w-full flex items-start justify-start gap-x-2 text-start leading-4 text-[0.8rem]'>
                                    <p className=''>
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
                    </Link>
                })
            )}
        </div>
    )
}

export default Topten
