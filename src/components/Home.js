import React, { useState } from "react";
import TopCharts from "./TopCharts"
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
            <TopCharts handleLikedSong = {handleLikedSong} accessToken={accessToken} />
            <NewSongs handleLikedSong = {handleLikedSong} accessToken={accessToken} />
        </>
    )
}

export default Home;