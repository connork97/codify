import React, { useState, useEffect } from "react";
import { Row, Container, Card } from 'react-bootstrap';
import { VscArrowCircleRight } from "react-icons/vsc";
import LikedSongCard from "./LikedSongCard";


function LikedSongs({ accessToken, topFiveLikes, setTopFiveLikes }) {

    useEffect(() => {
        fetch('http://localhost:8000/likes', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            }
        })
        .then(response => response.json())
        .then(likedSongs => {
            console.log(likedSongs)
            // debugger;
            setTopFiveLikes(likedSongs)
        })
    }, [])

    const renderLikedSongs = () => {
        const onlyFiveLikes = topFiveLikes.slice(0, 5);
        return onlyFiveLikes.map((song) => {
            // console.log(song)
            return <LikedSongCard song={song} key={song.song_id} />
        })
    }

    return (
        <Container className="homePageDiv">
            <h2 className="homeDivTitle" style={{position:"relative", display:"flex", alignItems:"center", justifyContent:"space-between", fontFamily: "Arial Rounded MT Bold"}}><span style={{margin:"auto"}}>Likes</span><span style={{position:"absolute", right:"15px"}}><VscArrowCircleRight style={{scale:"1.5"}} /></span></h2>
            <Row className="mx-2 row row-cols-5">
                {topFiveLikes !== "" ? renderLikedSongs() : null}
            </Row>
        </Container>
    )
}

export default LikedSongs;