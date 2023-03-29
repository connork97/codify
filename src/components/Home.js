import React, { useState } from "react";
import TopSongs from "./TopSongs"
import LikedSongs from "./LikedSongs";
import NewSongs from "./NewSongs";


function Home({ accessToken }) {

    const [topFiveLikes, setTopFiveLikes] = useState("")

    const handleLikedSong = (likedSong) => {
        setTopFiveLikes([...topFiveLikes, likedSong])
    }
    
    return (
        <>
            <LikedSongs accessToken={accessToken} topFiveLikes={topFiveLikes} setTopFiveLikes={setTopFiveLikes} />
            <TopSongs handleLikedSong = {handleLikedSong} accessToken={accessToken} />
            <NewSongs handleLikedSong = {handleLikedSong} accessToken={accessToken} />
        </>
    )
}

export default Home;