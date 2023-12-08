"use client";
import axios from "axios";
import React, { useEffect, useState } from 'react'
import '../styles/searchbar.css'

const Searchbar = () => {
    const [search, setSearch] = useState('');
    const [searchAnime, setSearchAnime] = useState(false)

    //handle change
    const handleChange = (e) => {
        setSearch(e.target.value);
        if (e.target.value === '') {
            state.isSearch = false;
        }
    }

    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (search) {
            searchAnime(search);
            state.isSearch = true;
        } else {
            state.isSearch = false;
            alert('Please enter a search term')
        }
    }

    const searchAnimeFunc = async (anime) => {
        try {
            const res = await axios(`https://api.jikan.moe/v4/anime?q=${anime}&order_by=popularity&sort=asc&sfw`);
            const data = res.data;
            // console.log("context", data.data);
            setSearchAnime(data.data);
        }

        catch (error) {
            console.log(error)
        }
    }

    return (
        <form className='scrollbar-container dark:bg-[#5e5e5e54]'>
            <div className="searchbardiv">
                <input type="search"
                    placeholder='Search anime...'
                    className='searchbarinput text-white  placeholder:text-gray-200 placeholder:dark:text-gray-400'
                    onChange={handleChange} />
            </div>
            <button className='text-white' onClick={searchAnimeFunc}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </button>
        </form>
    )
}

export default Searchbar
