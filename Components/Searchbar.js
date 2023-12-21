"use client";
import axios from "axios";
import React, { useState } from 'react';
import '../styles/searchbar.css';

const Searchbar = ({style}) => {
    const [animeList, setAnimeList] = useState([]);
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmittion = (e) => {
        e.preventDefault();
        setSearch("");
    }

    const searchAnimeFunc = async () => {
        try {
            const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${search}&order_by=title&sort=asc&limit=10`);
            const data = res.data;
            setAnimeList(data.data);
        } catch (error) {
            console.error("Error fetching anime:", error);
            setAnimeList([]); // Clear the list in case of an error
        }
    }

    return (
        <div>
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

            {animeList.length > 0 && (
                <div className={`${style}`}>
                    {animeList.map(anime => (
                        <p>{anime.title}</p>
                    )) }
                </div>
            )}
        </div>
    );
}

export default Searchbar;
