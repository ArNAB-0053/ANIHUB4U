"use client";
import axios from "axios";
import React, { useState } from 'react';
import '../styles/searchbar.css';
import Footer from "./Footer";
import Link from "next/link";


const Searchbar = ({style, click}) => {
    const [animeList, setAnimeList] = useState([]);
    const [search, setSearch] = useState('');
    const [searchCon, setSearchCon] = useState(false)

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmittion = (e) => {
        e.preventDefault();
        setSearchCon(true);
        setSearch("");
        click();
    }

    const searchAnimeFunc = async () => {
        try {
            const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${search}&order_by=title&sort=asc`);
            const data = res.data;
            setAnimeList(data.data);
        } catch (error) {
            console.error("Error fetching anime:", error);
            setAnimeList([]); // Clear the list in case of an error
        }
    }

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
    //             setSearchCon(false);
    //         }
    //     };

    //     document.addEventListener('mousedown', handleClickOutside);

    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, []);

    return (
        <div className="relative" >
            <form className='scrollbar-container dark:bg-[#5e5e5e54] hover:bg-[#3d3d3d] dark:hover:bg-[#747474a0]' onSubmit={handleSubmittion}>
                <div className="searchbardiv">
                    <input
                        type="search"
                        placeholder='Search anime...'
                        className='searchbarinput text-white placeholder:text-gray-200 placeholder:dark:text-gray-400'
                        onChange={handleChange}
                        required
                        value={search}
                    />
                </div>
                <button className='text-white' onClick={searchAnimeFunc}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </button>
            </form>

            <div className={`relative ${style}`}>
                {searchCon && (
                    animeList.length > 0 && (
                        <div className="absolute text-white top-[-10vh] left-[-18vw] px-[10vw] pt-[20vh] pb-[8vh] bg-[#f4f4f4] dark:bg-[#1d1d1f] w-[100vw] h-[108vh] overflow-y-auto overflow-x-hidden flex flex-col" id="searchCont">
                            <div className='grid grid-rows-auto grid-cols-5  ' >
                                {animeList.map((anime, index) => (
                                    <a href={`/${anime.mal_id}`} onClick={click} className="flex w-[15vw] flex-col min-h-[40vh]" key={index}>
                                        <img
                                            key={index}
                                            src={anime.images.jpg.large_image_url} alt={anime.title_english !== null ? anime.title_english : anime.title}
                                            className='w-48 h-64 object-cover rounded-lg z-[9999]'
                                            id=''
                                        />
                                        <p className=" w-48 whitespace-nowrap overflow-hidden overflow-ellipsis z-[9999]">{anime.title}</p>
                                    </a>
                                ))}

                                <div className="fixed h-[10vh] left-0 top-0 z-[9999999999] dark:bg-[#00000066]" id="headerBar"></div>
                            </div>
                            <div className=" ml-[-11vw] w-screen bg-transparent">
                                    <Footer />
                                </div>
                        </div>
                    )
                )}
            </div>


        </div>
    );
}

export default Searchbar;
