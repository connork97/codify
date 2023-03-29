import React, { useEffect, useState } from "react";
import { Row, Container, Card } from 'react-bootstrap';
import { VscArrowCircleRight } from "react-icons/vsc";
import SongCard from "./SongCard";

function TopSongs({ allTopSongs, setAllTopSongs, accessToken, handleLikedSong }) {


    // RenderTopCharts, 1. Make fetch request to the Global Top Charts Playlist with a specific spotify playlist ID
    // RenderTopCharts, 2. For each individual song, (data.tracks.items), return a new array of songs that include a 
    // preview URL that is not null
    // RenderTopCharts, 3. Set the state of (topFive) to the first 5 songs of that filtered array
    
    // RenderTopCharts, 4. Make a new function, eachTrack, to map through each song from state you just set, 
    // and then render a SonCard component for each song, and pass in that data to the song card

    const eachTrack = () => {
        const onlyFiveTopSongs = allTopSongs.slice(0, 5);
        return onlyFiveTopSongs.map((song) => {
            return <SongCard song={song} handleLikedSong={handleLikedSong} key={song.track.id} />
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