import React, { useEffect, useState } from "react";
import { Row, Container, Card } from 'react-bootstrap';
import { VscArrowCircleRight } from "react-icons/vsc";
import SongCard from "./SongCard";

function TopSongs({ allTopSongs, setAllTopSongs, accessToken, handleLikedSong, allPlaylists, setAllPlaylists, generalToggle, setGeneralToggle }) {



    // Take our allTopSongs state and return a new array of 5 songs 
    // Map through each of the 5 songs and send down the song to our songCard

    const eachTrack = () => {
        const onlyFiveTopSongs = allTopSongs.slice(0, 5);
        return onlyFiveTopSongs.map((song) => {
            return <SongCard song={song} handleLikedSong={handleLikedSong} allPlaylists={allPlaylists} setAllPlaylists={setAllPlaylists} generalToggle={generalToggle} setGeneralToggle={setGeneralToggle} key={song.track.id} />
        })
    }

    // RenderTopCharts, 5. Create an inline function to fix the asynch issue: If top 5 is not equal to an empty
    // string, run eachTrack function, else do nothing. We believe that React/JS was trying to run our slice 
    // before it was able to complete the fetch and set the topFive state. With this inline function, it will 
    // not run until the fetch completes and the state is set

    return (
        <Container className="homePageDiv">
            <h2 className="homeDivTitle" style={{position:"relative", display:"flex", alignItems:"center", justifyContent:"space-between", fontFamily: "Arial Rounded MT Bold"}}><span style={{margin:"auto"}}>{accessToken === "" ? "Loading " : null}Top Songs</span><span style={{position:"absolute", right:"15px"}}><VscArrowCircleRight style={{scale:"1.5"}} /></span></h2>
            <Row className="mx-2 row row-cols-5">
                {allTopSongs !== "" ? eachTrack() : null}
            </Row>
        </Container>
    )
}

export default TopSongs;