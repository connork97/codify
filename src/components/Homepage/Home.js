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
        <h2 className="homeDivTitle" style={{position:"relative", marginTop:"50px", display:"flex", alignItems:"center", justifyContent:"space-between", fontFamily: "Arial Rounded MT Bold"}}><span style={{margin:"auto"}}>Likes</span></h2>
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
                />
            </Carousel.Item>
        </Carousel>
        <h2 className="homeDivTitle" style={{position:"relative", display:"flex", alignItems:"center", justifyContent:"space-between", fontFamily: "Arial Rounded MT Bold"}}><span style={{margin:"auto"}}>{accessToken === "" ? "Loading " : null}Top Songs</span></h2>
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
                />
            </Carousel.Item>
        </Carousel>
        <h2 className="homeDivTitle" style={{position:"relative", display:"flex", alignItems:"center", justifyContent:"space-between", fontFamily: "Arial Rounded MT Bold"}}><span style={{margin:"auto"}}>{accessToken === "" ? "Loading " : null}New Songs</span></h2>
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
                />
            </Carousel.Item>
        </Carousel>
        </>
    )
}

export default Home;