"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import '../../styles/id.css'
import '../../styles/showmore.css'

const page = ({ params }) => {
    const baseURL = "https://api.jikan.moe/v4";
    const { id } = params;
    // const [populer, setPopuler] = useState([]);
    const [anime, setAnime] = useState({});
    const [showMore, setShowMore] = useState(false);

    const { title, synopsis, trailer, duration, aired, season, images, rank, score, scored_by, popularity, status, rating, source } = anime

    const getAnime = async (animeID) => {
        try {
            const res = await axios.get(`https://api.jikan.moe/v4/anime/${animeID}`);
            const data = res.data;
            setAnime(data.data)
        }

        catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getAnime(id);
    }, []);

    //get characters
    const [numChar, setNumChar] = useState(20)
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters(id, numChar);
    }, []);

    const handleCharacters = () => {
        setNumChar(prevNumChar => prevNumChar + 20);
        getCharacters(id, numChar + 20);
    };

    const getCharacters = async (animeID, newNumChar) => {
        try {
            const response = await axios.get(`https://api.jikan.moe/v4/anime/${animeID}/characters`)
            const data = response.data;
            setCharacters(data.data.slice(0, newNumChar))
        }

        catch (error) {
            console.log(error)
        }

    }


    //get staff
    const [numStaff, setNumStaff] = useState(12);
    const [staffs, setStaffs] = useState([]);

    useEffect(() => {
        getStaff(id, numStaff);
    }, []);

    const handleStaff = () => {
        setNumStaff(prevNumStaff => prevNumStaff + 12);
        // Fetch data with the updated numStaff
        getStaff(id, numStaff + 12);
    };

    const getStaff = async (animeID, newNumStaff) => {
        try {
            const response = await axios.get(`https://api.jikan.moe/v4/anime/${animeID}/staff`);
            const data = response.data;
            // Update staffs state with the new data
            setStaffs(data.data.slice(0, newNumStaff));
        }

        catch (error) {
            console.log(error);
        }
    };



    // get Recommendation
    const [numRecommendation, setNumRecommendation] = useState(12);
    const [recommendation, setRecommendation] = useState([]);

    useEffect(() => {
        getRecommendation(id, numRecommendation);
    }, []);

    const handleRecommendation = () => {
        setNumRecommendation(prevNumRecommendation => prevNumRecommendation + 12);
        // Fetch data with the updated numStaff
        getRecommendation(id, numRecommendation + 12);
    };

    const getRecommendation = async (animeID, newNumRecommendation) => {
        try {
            const response = await axios.get(`https://api.jikan.moe/v4/anime/${animeID}/recommendations`);
            const data = response.data;
            setRecommendation(data.data.slice(0, newNumRecommendation));
        }

        catch (error) {
            console.log(error);
        }
    };


    // useEffect(() => {
    //     console.clear();
    // }, []);
    return (
        <div>
            <div className="mainContainer p-10 flex flex-col items-center justify-center min-h-screen text-white">
                <h1 className="titleHead text-black dark:text-white text-center">{title}</h1>

                <div className="animeDetails rounded-xl flex items-center justify-center flex-col px-10 py-8">
                    <div className="container flex items-start justify-between">
                        <div className="imageContainer">
                            <img className="rounded-xl object-cover" src={images?.jpg.large_image_url} alt="" />
                        </div>
                        <div className="details mt-8 h-60 gap-4 flex items-start justify-start">
                            <div className="detailDesc flex flex-col">
                                <span>Aired</span>
                                <span>Rating</span>
                                <span>Rank</span>
                                <span>Score</span>
                                <span>Scored By</span>
                                <span>Popularity</span>
                                <span>Status</span>
                                <span>Source</span>
                                <span>Season</span>
                                <span>Duration</span>
                            </div>
                            <div className="detailDesc flex flex-col">
                                <span>:</span>
                                <span>:</span>
                                <span>:</span>
                                <span>:</span>
                                <span>:</span>
                                <span>:</span>
                                <span>:</span>
                                <span>:</span>
                                <span>:</span>
                                <span>:</span>
                            </div>
                            <div className="detailDesc flex flex-col">
                                <span>{aired?.string}</span>
                                <span>{rating}</span>
                                <span>{rank}</span>
                                <span>{score}</span>
                                <span>{scored_by}</span>
                                <span>{popularity}</span>
                                <span>{status}</span>
                                <span>{source}</span>
                                <span>{season}</span>
                                <span>{duration}</span>
                            </div>
                        </div>
                    </div>

                    <div className="description">
                        {showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
                        <button onClick={() => {
                            setShowMore(!showMore)
                        }}>{showMore ? 'Show Less' : 'Read More'}</button>
                    </div>
                </div>

                {/* Trailer */}
                <div className="trailer">
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
                    <div className="characterContainer mt-20">
                        <h1 className="title  text-black dark:text-white">Characters</h1>
                        <div id="charstaff" className="w-full dark:bg-white bg-zinc-800"></div>
                        <div className="characters h-full grid grid-rows-10 grid-cols-10 gap-y-20">
                            {characters?.map((character, index) => {
                                const { role } = character
                                const { images, name, mal_id } = character.character
                                return <Link className='w-24 h-48 place-self-center rounded-xl' href={`/character/${mal_id}`} key={index}>
                                    <div className="character">
                                        <img id="charimg" className="h-36 scale-90 rounded-xl hover:scale-100" src={images?.jpg.image_url} alt="" />
                                        <h4 className="char-name  text-black dark:text-white">{name}</h4>
                                        <p className="char-role text-sm text-green-700 dark:text-green-500">{role}</p>
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
                ) : null}

                {/* Staffs */}
                {staffs.length > 0 ? (
                    <div className="staffContainer mt-8">
                        <h1 id='staffhead' className="title  text-black dark:text-white">staffs</h1>
                        <div id="linestaff" className="w-full bg-zinc-800 dark:bg-white"></div>
                        <div className="staffs h-full grid auto-rows-max grid-cols-4 gap-x-2">
                            {staffs?.map((staff, index) => {
                                const { positions } = staff
                                const { images, name, mal_id } = staff.person
                                return <Link className='staff-link h-40 flex items-center justify-center gap-x-2 place-self-center rounded-xl' href={`/character/${mal_id}`} key={index}>
                                    <img className="w-20 h-20 object-cover object-start rounded-full" id="staffimg" src={images?.jpg.image_url} alt="" />
                                    <div className="staff ">
                                        <h4 className="staff-name  text-black dark:text-white">{name}</h4>
                                        <p className="staff-role text-sm w-44 break-words text-green-700 dark:text-green-500">{positions}</p>
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
                ) : null}

                {/* Recommendations */}
                {recommendation.length > 0 ? (
                    <div className="recomContainer w-[79vw] mt-6">
                        <h1 id="staffhead" className="title  text-black dark:text-white mt-10">Recommended for you</h1>
                        <div id="linestaff" className=" bg-zinc-800 dark:bg-white w-full"></div>
                        <div className="recommendation w-full ml-0 grid grid-cols-6 gap-x-4 grid-rows-auto items-center justify-items-center mt-10">
                            {recommendation.map((anime, i) => {
                                return <Link href={`/${anime.entry.mal_id}`} className="w-[100%] h-[100%] flex items-center justify-center flex-col my-6" >
                                    <img
                                        key={i}
                                        src={anime.entry.images.jpg.large_image_url} alt={anime.entry.title}
                                        className={`object-cover block ml-1 w-[12vw] h-[36vh] scale-100 mb-2 hover:scale-110 rounded-xl`}
                                        id='recomimg'
                                    />
                                    <h1 className={`text-black dark:text-white  mt-[-0.2rem] text-sm tracking-normal leading-4 text-center font-bold py-2 px-8 whitespace-nowrap overflow-hidden overflow-ellipsis w-48`}>{anime.entry.title}</h1>
                                </Link>
                            })}
                        </div>

                        {recommendation.length > 11 && (
                            <button
                                class="button"
                                type="button"
                                onClick={handleRecommendation}
                                style={{ display: recommendation.length === 48 ? 'none' : 'flex' }}
                            >
                                <span class="button__text">Show more</span>
                                <span class="button__icon">
                                    <svg className=" text-[#282936]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </span>
                            </button>
                        )}
                    </div>
                ) : null}
            </div>

        </div>
    );
};

export default page;
