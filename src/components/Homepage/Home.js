import React, { useState } from "react";
import TopSongs from "./TopSongs"
import LikedSongs from "./LikedSongs";
import NewSongs from "./NewSongs";


function Home({ allNewSongs, setAllNewSongs, allLikedSongs, setAllLikedSongs, allTopSongs, setAllTopSongs, handleLikedSong, handleRemovedLike, allPlaylists, setAllPlaylists, handleAddToPlaylist, generalToggle, setGeneralToggle, accessToken }) {

    // Within home, return LikedSongs, with the allLikedSongs and setAllSongs states as props
    // Return TopSongs with the allTopSongs and setAllTopSongs states as props as well as the handleLikedSong
    // function which adds our newLikedSong to our json file
    // Return NewSongs with all the allNewSongs and setAllNewSongs states as props as well as the handleLikedSong
    // function which adds our newLikedSong to our json file
    return (
        <>
            <LikedSongs 
                accessToken={accessToken} 
                allLikedSongs={allLikedSongs} 
                setAllLikedSongs={setAllLikedSongs}
                handleRemovedLike={handleRemovedLike}
            />
            <TopSongs 
                handleLikedSong={handleLikedSong} 
                allTopSongs={allTopSongs} 
                setAllTopSongs={setAllTopSongs} 
                accessToken={accessToken} 
                allPlaylists={allPlaylists}
                setAllPlaylists={setAllPlaylists}
                handleAddToPlaylist={handleAddToPlaylist}
                generalToggle={generalToggle}
                setGeneralToggle={setGeneralToggle}
            />
            <NewSongs 
                handleLikedSong={handleLikedSong} 
                allNewSongs={allNewSongs} 
                setAllNewSongs={setAllNewSongs} 
                accessToken={accessToken} 
                allPlaylists={allPlaylists}
                setAllPlaylists={setAllPlaylists}
                handleAddToPlaylist={handleAddToPlaylist}
                generalToggle={generalToggle}
                setGeneralToggle={setGeneralToggle}
            />
        </>
    )
}

export default Home;