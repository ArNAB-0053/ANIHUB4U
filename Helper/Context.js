// "use client"
// import React, { createContext, useEffect, useState } from 'react';
// import axios from 'axios';

// export const AnimeContext = createContext();

// const Context = ({ children }) => {
//     const baseURL = "https://api.jikan.moe/v4";

//     const [popularAnime, setPopulerAnime] = useState([]);
//     const [upcomingAnime, setUpcomingAnime] = useState([]);
//     const [airingAnime, setAiringAnime] = useState([]);
//     const [pictures, setPictures] = useState([]);
//     const [isSearch, setIsSearch] = useState(false);
//     const [searchResult, setSearchResult] = useState([]);
//     const [loading, setLoading] = useState(false)

//     // const getPopularAnime = async () => {
//     //     try {
//     //         // get populer anime
//     //         setLoading(true);
//     //         const res = await axios.get(`${baseURL}/top/anime?filter=bypopularity`);
//     //         const data = res.data;
//     //         console.log("context", data.data);

//     //         // // printing baseURL
//     //         // const res2 = await axios.get(`${baseURL}`)
//     //         // const data2 = res2.data;
//     //         // console.log("BaseURL:", data2)
//     //         // setPopulerAnime(data.data);
//     //     } catch (error) {
//     //         if (axios.isCancel(error)) {
//     //             console.log('Request canceled:', error.message);
//     //         } else {
//     //             console.error("Error fetching popular anime:", error);
//     //         }
//     //     }
//     //     finally {
//     //         setLoading(false);
//     //     }
//     // };

//     useEffect(() => {
//         console.log('useEffect in Context component is running.');
//         const source = axios.CancelToken.source();
    
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const res = await axios.get(`${baseURL}/top/anime?filter=bypopularity`, {
//                     cancelToken: source.token,
//                 });
//                 const data = res.data;
//                 console.log("context", data.data);
//             } catch (error) {
//                 if (axios.isCancel(error)) {
//                     // Check if the request was canceled due to unmounting
//                     if (error.message !== "Component unmounted") {
//                         console.log('Request canceled:', error.message);
//                     }
//                 } else {
//                     console.error("Error fetching popular anime:", error);
//                 }
//             } finally {
//                 setLoading(false);
//             }
            
//         };
    
//         fetchData();
    
//         return () => {
//             if (!source.token.reason?.message || source.token.reason.message !== "Component unmounted") {
//                 source.cancel("Component unmounted");
//             }
//         };
        
//     }, []);
    

//     return (
//         <AnimeContext.Provider value={[popularAnime, upcomingAnime, airingAnime, pictures, isSearch, searchResult, loading]}>
//             {children}
//         </AnimeContext.Provider>

//     );
// };

// export default Context;
