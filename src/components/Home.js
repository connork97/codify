import React, { useState } from "react";
import TopSongs from "./TopSongs"
import LikedSongs from "./LikedSongs";
import NewSongs from "./NewSongs";


function Home({ allNewSongs, setAllNewSongs, allLikedSongs, setAllLikedSongs, allTopSongs, setAllTopSongs, handleLikedSong, accessToken }) {

    
    return (
        <>
            <LikedSongs 
                accessToken={accessToken} 
                allLikedSongs={allLikedSongs} 
                setAllLikedSongs={setAllLikedSongs} 
            />
            <TopSongs 
                handleLikedSong={handleLikedSong} 
                allTopSongs={allTopSongs} 
                setAllTopSongs={setAllTopSongs} 
                accessToken={accessToken} 
            />
            <NewSongs 
                handleLikedSong={handleLikedSong} 
                allNewSongs={allNewSongs} 
                setAllNewSongs={setAllNewSongs} 
                accessToken={accessToken} 
            />
        </>
    )
}

export default Home;