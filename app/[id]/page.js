"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import '../../styles/popular.css'

const page = ({ params }) => {
    const baseURL = "https://api.jikan.moe/v4";
    const { id } = params;
    // const [populer, setPopuler] = useState([]);
    const [anime, setAnime] = useState({});
    const [characters, setCharacters] = React.useState([]);
    const [showMore, setShowMore] = React.useState(false);

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

    //get characters
    const getCharacters = async (animeID) => {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${animeID}/characters`)
        const data = response.data;
        setCharacters(data.data)
    }

    useEffect(() => {
        getAnime(id);
        getCharacters(id);
    }, []);



    return (
        <div>
            <div className="mainContainer p-10 flex flex-col items-center justify-center min-h-screen text-white">
                <h1 className="titleHead">{title}</h1>

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

                <div className="trailer">
                    <h3 className="title mt-8">Trailer</h3>
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
                            <h3>Trailer not available</h3>
                        }
                    </div>
                </div>

                <div className="characterContainer mt-20">
                    <h1 className="title">Characters</h1>
                    <div className="characters h-full grid grid-rows-10 grid-cols-10 gap-y-20">
                        {characters?.map((character, index) => {
                            const { role } = character
                            const { images, name, mal_id } = character.character
                            return <Link className='w-24 h-48 place-self-center rounded-xl' href={`/character/${mal_id}`} key={index}>
                                <div className="character">
                                    <img className="h-36 w-24" src={images?.jpg.image_url} alt="" />
                                    <h4 className="char-name">{name}</h4>
                                    <p className="char-role">({role})</p>
                                </div>
                            </Link>
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default page;
