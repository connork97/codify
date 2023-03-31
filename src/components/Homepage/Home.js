import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { VscArrowCircleRight } from "react-icons/vsc";
import TopSongs from "./TopSongs"
import LikedSongs from "./LikedSongs";
import NewSongs from "./NewSongs";


function Home({ 
    allNewSongs, setAllNewSongs, allLikedSongs, 
    setAllLikedSongs, allTopSongs, setAllTopSongs, 
    handleLikedSong, handleRemovedLike, allPlaylists, 
    setAllPlaylists, generalToggle, setGeneralToggle, accessToken 
}) {

    // Within home, return LikedSongs, with the allLikedSongs and setAllSongs states as props
    // Return TopSongs with the allTopSongs and setAllTopSongs states as props as well as the handleLikedSong
    // function which adds our newLikedSong to our json file
    // Return NewSongs with all the allNewSongs and setAllNewSongs states as props as well as the handleLikedSong
    // function which adds our newLikedSong to our json file
    return (
        <>
            <h1 style={{paddingTop:"50px", paddingBottom:"50px", fontSize:"3.5rem"}}>Welcome to Codify!</h1>
            <h2 className="homeDivTitle" style={{position:"relative", marginTop:"50px", display:"flex", alignItems:"center", justifyContent:"space-between"}}><span style={{margin:"auto"}}>Your Likes</span></h2>
            <Carousel>
                <Carousel.Item interval={10000}>
                    <LikedSongs 
                        allLikedSongs={allLikedSongs} 
                        handleRemovedLike={handleRemovedLike}
                        allPlaylists={allPlaylists}
                        setAllPlaylists={setAllPlaylists}
                        generalToggle={generalToggle}
                        setGeneralToggle={setGeneralToggle}
                        startingIndex={0}
                        key={"likedSongs1"}
                    />
                </Carousel.Item>
                <Carousel.Item interval={20000}>
                    <LikedSongs 
                        allLikedSongs={allLikedSongs} 
                        handleRemovedLike={handleRemovedLike}
                        allPlaylists={allPlaylists}
                        setAllPlaylists={setAllPlaylists}
                        generalToggle={generalToggle}
                        setGeneralToggle={setGeneralToggle}
                        startingIndex={5}
                        key={"likedSongs2"}
                    />
                </Carousel.Item>
            </Carousel>
            <h2 
                className="homeDivTitle" 
                style={{position:"relative", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <span style={{margin:"auto"}}>
                    Top Songs
                </span>
            </h2>
            <Carousel>
                <Carousel.Item interval={7500}>
                    <TopSongs 
                        handleLikedSong={handleLikedSong} 
                        allTopSongs={allTopSongs} 
                        allPlaylists={allPlaylists}
                        setAllPlaylists={setAllPlaylists}
                        generalToggle={generalToggle}
                        setGeneralToggle={setGeneralToggle}
                        startingIndex={0}
                        key={"topSongs1"}
                    />
                </Carousel.Item>
                <Carousel.Item interval={12500}>
                    <TopSongs 
                        handleLikedSong={handleLikedSong} 
                        allTopSongs={allTopSongs} 
                        allPlaylists={allPlaylists}
                        setAllPlaylists={setAllPlaylists}
                        generalToggle={generalToggle}
                        setGeneralToggle={setGeneralToggle}
                        startingIndex={5}
                        key={"topSongs2"}
                    />
                </Carousel.Item>
                <Carousel.Item interval={17500}>
                    <TopSongs 
                        handleLikedSong={handleLikedSong} 
                        allTopSongs={allTopSongs} 
                        allPlaylists={allPlaylists}
                        setAllPlaylists={setAllPlaylists}
                        generalToggle={generalToggle}
                        setGeneralToggle={setGeneralToggle}
                        startingIndex={10}
                        key={"topSongs3"}
                    />
                </Carousel.Item>
            </Carousel>
            <h2 
                className="homeDivTitle" 
                style={{position:"relative", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <span style={{margin:"auto"}}>
                    New Songs
                </span>
            </h2>
            <Carousel>
                <Carousel.Item interval={7500}>
                    <NewSongs 
                        handleLikedSong={handleLikedSong} 
                        allNewSongs={allNewSongs} 
                        allPlaylists={allPlaylists}
                        setAllPlaylists={setAllPlaylists}
                        generalToggle={generalToggle}
                        setGeneralToggle={setGeneralToggle}
                        startingIndex={0}
                        key={"newSongs1"}
                    />
                </Carousel.Item>
                <Carousel.Item interval={12500}>
                    <NewSongs 
                        handleLikedSong={handleLikedSong} 
                        allNewSongs={allNewSongs} 
                        allPlaylists={allPlaylists}
                        setAllPlaylists={setAllPlaylists}
                        generalToggle={generalToggle}
                        setGeneralToggle={setGeneralToggle}
                        startingIndex={5}
                        key={"newSongs2"}
                    />
                </Carousel.Item>
                <Carousel.Item interval={17500}>
                    <NewSongs 
                        handleLikedSong={handleLikedSong} 
                        allNewSongs={allNewSongs} 
                        allPlaylists={allPlaylists}
                        setAllPlaylists={setAllPlaylists}
                        generalToggle={generalToggle}
                        setGeneralToggle={setGeneralToggle}
                        startingIndex={10}
                        key={"newSongs3"}
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Home;