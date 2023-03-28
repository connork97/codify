import React, { useState, useEffect } from "react";
import { Row, Container, Card } from 'react-bootstrap';
import LikedSongCard from "./LikedSongCard";

// const handleLikedSongs = (likedSong) => {
//    setTopFive([...topFive, likedSong])
// }

function LikedSongs({ accessToken }) {

    const [topFive, setTopFive] = useState("")

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
            setTopFive(likedSongs)
        })
    }, [])

    const renderLikedSongs = () => {
        return topFive.map((song) => {
            // console.log(song)
            return <LikedSongCard song={song} key={song.song_id} />
        })
    }

    return (
        <Container className="homePageDiv">
            <h2 className="homeDivTitle">Likes</h2>
            <Row className="mx-2 row row-cols-5">
                {topFive !== "" ? renderLikedSongs() : null}
                <Card>
                    <Card.Body>
                    <Card.Img src="https://imgs.goldradiouk.com/images/67343?width=1480&crop=1_1&signature=FelJjffMewZta_5ioShiDdPQ95U=" />
                        <Card.Title>Test</Card.Title>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default LikedSongs;