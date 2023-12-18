"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import '../../styles/id.css'
import '../../styles/showmore.css'
import Topten from "@/Components/Topten";
import dynamic from "next/dynamic";


const page = ({ params }) => {
    const baseURL = "https://api.jikan.moe/v4";
    const { id } = params;
    const [loading, setLoading] = useState(false)
    const [anime, setAnime] = useState({});
    const [showMore, setShowMore] = useState(false);

    const { title, synopsis, trailer, duration, aired, season, images, rank, score, scored_by, popularity, status, rating, source } = anime

    const getAnime = async (animeID) => {
        try {
            setLoading(true);
            const res = await axios.get(`https://api.jikan.moe/v4/anime/${animeID}`);
            const data = res.data;
            setAnime(data.data)
        }

        catch (error) {
            console.log(error)
        }

        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAnime(id);
    }, []);

    //get characters
    const [numChar, setNumChar] = useState(24)
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters(id, numChar);
    }, []);

    const handleCharacters = () => {
        setNumChar(prevNumChar => prevNumChar + 24);
        getCharacters(id, numChar + 24);
    };

    const getCharacters = async (animeID, newNumChar) => {
        try {
            setLoading(true);
            const response = await axios.get(`https://api.jikan.moe/v4/anime/${animeID}/characters`)
            const data = response.data;
            setCharacters(data.data.slice(0, newNumChar))
        }

        catch (error) {
            console.log(error)
        }

        finally {
            setLoading(false);
        }
    }


    //get staff
    const [numStaff, setNumStaff] = useState(9);
    const [staffs, setStaffs] = useState([]);

    useEffect(() => {
        getStaff(id, numStaff);
    }, []);

    const handleStaff = () => {
        setNumStaff(prevNumStaff => prevNumStaff + 9);
        // Fetch data with the updated numStaff
        getStaff(id, numStaff + 9);
    };

    const getStaff = async (animeID, newNumStaff) => {
        try {
            setLoading(true);
            const response = await axios.get(`https://api.jikan.moe/v4/anime/${animeID}/staff`);
            const data = response.data;
            // Update staffs state with the new data
            setStaffs(data.data.slice(0, newNumStaff));
        }

        catch (error) {
            console.log(error);
        }

        finally {
            setLoading(false);
        }
    };



    // get Recommendation
    const [numRecommendation, setNumRecommendation] = useState(12);
    const [recommendation, setRecommendation] = useState([]);

    useEffect(() => {
        getRecommendation(id, numRecommendation);
    }, []);

    const getRecommendation = async (animeID, newNumRecommendation) => {
        try {
            setLoading(true);
            const response = await axios.get(`https://api.jikan.moe/v4/anime/${animeID}/recommendations`);
            const data = response.data;
            setRecommendation(data.data.slice(0, newNumRecommendation));
        }

        catch (error) {
            console.log(error);
        }

        finally {
            setLoading(false);
        }
    };

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


    // useEffect(() => {
    //     console.clear();
    // }, []);
    return (
        <div>
            {loading ? (
                <div className='p-20'>
                    <div id='spinner' className="spinner"></div>
                </div>
            ) : (
                <div className="mainContainer flex flex-col items-center justify-center min-h-screen text-white w-screen mt-20">
                    <div className="animeDetails flex items-start justify-start w-full h-[70vh] 
                    bg-[url('/Images/TG/1.jpg')]">
                        <div className="__animeDetails dark:bg-[#4e4e51c6] bg-[#dadadac4] w-[70%] px-12 h-full">
                            <div className="flex items-start justify-start gap-x-12 px-6 py-16">
                                <div className="w-[12rem] h-[18rem] bg-black">
                                    <img className="rounded-xl object-cover w-full h-full" src={images?.jpg.large_image_url} alt="" />
                                </div>
                                <div className="w-[70%] h-[70vh] text-[0.8rem] ">
                                    <h2 id="rank" className="text-lg dark:text-white text-black"># {anime.rank}</h2>
                                    <h1 className="titleHead text-[3rem] text-black dark:text-white text-start">{title}</h1>
                                    <div className="flex items-center justify-start gap-2 text-[1rem] my-4">
                                        <span className="flex items-center justify-center gap-2 bg-blue-500 px-2 w-20 h-8 rounded-l-[0.3rem]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={36}
                                                height={36}
                                                fill="currentColor"
                                                className="bi bi-star-fill text-yellow-400 w-4"
                                                viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            {score !== null
                                                ? score
                                                : 'N/A'}
                                        </span>
                                        <span className="flex items-center justify-center px-2 bg-yellow-500 w-20 h-8 ">
                                            {rating !== null
                                                ? getShortenedRating(rating)
                                                : 'N/A'}
                                        </span>
                                        <span className="flex items-center justify-center px-2 bg-green-600 w-20 h-8 rounded-r-[0.3rem]">
                                            {duration !== 'Unknown' && anime.duration !== null
                                                ? duration && duration.substring(0, 7)
                                                : 'N/A'}
                                        </span>
                                        <span className="dark:text-white text-black font-bold">
                                            {anime.type}
                                        </span>
                                    </div>
                                    <p id="desc" className="text-black dark:text-white font-normal">
                                        {showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
                                        <button className="font-bold" onClick={() => {
                                            setShowMore(!showMore)
                                        }}>{showMore ? 'Show Less' : 'Read More'}</button>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="details gap-4 flex items-start justify-start dark:bg-[#6B6B6E9d] bg-[#d0d0d0d8] w-[30%] h-full px-12 pt-20 pb-12 text-[0.8rem]">
                            <div className="detailDesc flex flex-col text-black dark:text-white gap-4">
                                <span className="flex items-start justify-start gap-2">
                                    <p className="font-bold">Japanese:</p>
                                    <p className="font-thin">{anime.title_japanese}</p>
                                </span>
                                <span className="flex items-start justify-start gap-2">
                                    <p className="font-bold">Aired:</p>
                                    <p className="font-thin">{aired?.string}</p>
                                </span>
                                <span className="flex items-start justify-start gap-2">
                                    <p className="font-bold">Status:</p>
                                    <p className="font-thin">{anime.status}</p>
                                </span>
                                <span className="flex items-start justify-start gap-2">
                                    <p className="font-bold">Synonyms:</p>
                                    <p className="gap-2 font-thin">{anime.title_synonyms ? anime.title_synonyms.join(', ') : ''}</p>
                                </span>
                                <div className="bg-black dark:bg-white w-full h-[0.5px]"></div>
                                <span className="flex items-start justify-start flex-col">
                                    <p className="font-bold">Genre:</p>
                                    <p className="break-words flex font-thin">
                                        {anime.genres && anime.genres.length > 0
                                            ? anime.genres.map((genre, index) => (
                                                <span id="genre" className="flex border-solid border-black dark:border-white border-[1px]" key={index}>
                                                    {genre.name}
                                                    {index < anime.genres.length - 1 && ''}
                                                </span>
                                            ))
                                            : ''
                                        }
                                    </p>
                                </span>
                                <div className="bg-black dark:bg-white w-full h-[0.5px]"></div>
                                <span className="flex items-start justify-start gap-2">
                                    <p className="font-bold">Studios:</p>
                                    <p className="gap-2 font-thin">
                                        {anime.studios && anime.studios.length > 0 && anime.studios[0].name ? anime.studios[0].name : ''}
                                    </p>
                                </span>
                                <span className="flex items-start justify-start gap-2">
                                    <p className="font-bold">Producer:</p>
                                    <p className="gap-2 font-thin">
                                        {anime.producers && anime.producers.length > 0
                                            ? anime.producers.map((producer, index) => (
                                                <span key={index}>
                                                    {producer.name}
                                                    {index < anime.producers.length - 1 && ', '}
                                                </span>
                                            ))
                                            : ''
                                        }
                                    </p>
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-between w-[100vw] px-16">
                        <div>
                            <div className="trailer w-[58vw]">
                                <h3 className="title mt-8  text-black dark:text-white">Trailer</h3>
                                <div className="trailer-con flex place-content-center">
                                    {trailer?.embed_url ?
                                        <iframe
                                            src={trailer?.embed_url}
                                            title="Inline Frame Example"
                                            width="1120"
                                            height="auto"
                                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen>
                                        </iframe> :
                                        <h3 className="text-black dark:text-white">Trailer not available</h3>
                                    }
                                </div>
                            </div>

                            {/* Characters */}
                            {characters.length > 0 ? (
                                <div className="characterContainer mt-20 w-[58vw]">
                                    <h1 className="title  text-black dark:text-white">Characters</h1>
                                    <div id="charstaff" className="dark:bg-white bg-zinc-800"></div>
                                    <div className="characters h-full w-full grid grid-rows-10 grid-cols-8 place-items-start gap-y-4">
                                        {characters?.map((character, index) => {
                                            const { role } = character
                                            const { images, name, mal_id } = character.character
                                            return <Link className='w-24 h-48 place-self-center rounded-xl' href={`/character/${mal_id}`} key={index}>
                                                <div className="">
                                                    <img id="charimg" className="h-36 scale-90 rounded-xl hover:scale-100 object-cover ml-[-0.5rem]" src={images?.jpg.image_url} alt="" />
                                                    <h4 className="w-[5rem] char-name text-black dark:text-white text-ellipsis overflow-hidden text-[0.74rem]">{name}</h4>
                                                    <p className=" char-role text-sm text-green-700 dark:text-green-500 text-[0.68rem]">{role}</p>
                                                </div>
                                            </Link>
                                        })}
                                    </div>

                                    {characters.length >= 20 && characters.length < 80 ? (
                                        <button id="viewmoreChar" class="button" type="button" onClick={handleCharacters}>
                                            <span class="button__text">Show more</span>
                                            <span class="button__icon">
                                                <svg className="text-[#282936]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                    <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </span>
                                        </button>
                                    ) : null}
                                </div>
                            ) : null
                            }


                            {/* Staffs */}
                            {staffs.length > 0 ? (
                                <div className="staffContainer mt-8 w-[58vw]">
                                    <h1 id='staffhead' className="title  text-black dark:text-white">staffs</h1>
                                    <div id="linestaff" className="w-full bg-zinc-800 dark:bg-white"></div>
                                    <div className="staffs h-full grid auto-rows-max grid-cols-3 gap-x-2 w-full">
                                        {staffs?.map((staff, index) => {
                                            const { positions } = staff
                                            const { images, name, mal_id } = staff.person
                                            return <Link className='staff-link h-40 flex items-center justify-center gap-x-2 place-self-center rounded-xl' href={`/character/${mal_id}`} key={index}>
                                                <img className="w-20 h-20 object-cover object-start rounded-full" id="staffimg" src={images?.jpg.image_url} alt="" />
                                                <div className="staff ">
                                                    <h4 className="staff-name  text-black dark:text-white text-[0.74rem]">{name}</h4>
                                                    <p className="staff-role text-sm w-44 break-words text-green-700 dark:text-green-500 text-[0.68rem]">{positions}</p>
                                                </div>
                                            </Link>
                                        })}
                                    </div>
                                    {staffs.length >= 12 && staffs.length < 48 ? (
                                        <button class="button" type="button" onClick={handleStaff}>
                                            <span class="button__text">Show more</span>
                                            <span class="button__icon">
                                                <svg className=" text-[#282936]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                    <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </span>
                                        </button>
                                    ) : null}
                                </div>
                            ) : null
                            }


                            {/* Recommendations */}
                            {recommendation.length > 0 ? (
                                <div className="recomContainer w-[58vw] mt-6">
                                    <h1 id="staffhead" className="title  text-black dark:text-white mt-10">Recommended for you</h1>
                                    <div id="linestaff" className=" bg-zinc-800 dark:bg-white w-full"></div>
                                    <div className="recommendation w-full ml-0 grid grid-cols-6 gap-x-4 grid-rows-auto items-center justify-items-center mt-10">
                                        {recommendation.map((anime, i) => {
                                            return <Link href={`/${anime.entry.mal_id}`} className="w-[100%] h-[100%] flex items-center justify-center flex-col my-6" >
                                                <img
                                                    key={i}
                                                    src={anime.entry.images.jpg.large_image_url} alt={anime.entry.title}
                                                    className={`object-cover block ml-1 w-[12vw] h-[24vh] scale-100 mb-2 hover:scale-110 rounded-xl`}
                                                    id='recomimg'
                                                />
                                                <h1 className={`text-black dark:text-white  mt-[-0.2rem] text-sm tracking-normal leading-4 text-center font-bold py-2 px-8 whitespace-nowrap overflow-hidden overflow-ellipsis w-48`}>{anime.entry.title}</h1>
                                            </Link>
                                        })}
                                    </div>
                                </div>
                            ) : null
                            }
                        </div>

                        <div className='flex mr-[-2vw] w-[28vw] items-start flex-col justify-center h-full mt-32'>
                            <h1 id='top5' className='text-[2rem] dark:text-[#ff0000] text-[#89889c]'>Top 10</h1>
                            <div className="w-[70%] h-[1px] dark:bg-red-500 bg-[#3d30cb]"></div>
                            <Topten
                                baseURL="https://api.jikan.moe/v4"
                                endpoint="top/anime"
                                slicingStart={0}
                                numItems={10}
                                rankingStyle="block"
                            />
                        </div>
                    </div>

                </div>
            )}

        </div>
    );
};

export default dynamic(() => Promise.resolve(page), { ssr: false })
