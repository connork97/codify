import React, { useState, useEffect } from "react";
import { Row, Container, Card } from 'react-bootstrap';
import { VscArrowCircleRight } from "react-icons/vsc";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import LikedSongCard from "./LikedSongCard";


function LikedSongs({ accessToken, allLikedSongs, setAllLikedSongs }) {

    const handleRemoveLike = (song) => {
        console.log(song.id)
        fetch("http://localhost:8000/likes/" + song.id, {
            method: "DELETE"
        })
    }
// Render the LikedSongs container by taking in the first 5 songs of allLikedSongs, mapping over them, and passing
// down their props to the LikedSongCard component
    const renderLikedSongs = () => {
        const onlyFiveLikes = allLikedSongs.slice(0, 5);
        return onlyFiveLikes.map((song) => {
            // console.log(song)
            return <LikedSongCard song={song} handleRemoveLike={handleRemoveLike} key={song.song_id} />
        })
    }

// If allLikedSongs is not equal to an empty string, renderLikedSongs, if not, render null
    return (
        <Container className="homePageDiv">
            <h2 className="homeDivTitle" style={{position:"relative", display:"flex", alignItems:"center", justifyContent:"space-between", fontFamily: "Arial Rounded MT Bold"}}><span style={{margin:"auto"}}>Likes</span><span style={{position:"absolute", right:"15px"}}><VscArrowCircleRight style={{scale:"1.5"}} /></span></h2>
            <Row className="mx-2 row row-cols-5" style={{overflow:"hidden"}}>
                {allLikedSongs !== "" ? renderLikedSongs() : null}
            </Row>
        </Container>
    )
}

export default LikedSongs;