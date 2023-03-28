import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const SongCard = ({ song }) => {

    const [playMusic, setPlayMusic] = useState(false)

    const songUrl = song.track.preview_url;
    console.log(songUrl)

    const playSong = () => playMusic === true ? new Audio(songUrl).play() : new Audio(songUrl).pause()

    const handlePlaySong = () => {
        setPlayMusic(!playMusic)
        playSong()
    }

    return (
    <Card>
        <Card.Body>
        <Card.Img src={song.track.album.images[0].url} />
            <Card.Title>{song.track.name}</Card.Title>
            <Card.Text>{song.track.artists[0].name}</Card.Text>
        </Card.Body>
        <Button onClick={handlePlaySong}>Like Song</Button> {/*Doesnt do anything yet*/}
        <br></br>
        {songUrl == null ? <Card.Text>"No Preview Available"</Card.Text> : 
            <video controls name="media">
                <source src={songUrl} alt="no preview available" type="audio/mp3" />
            </video>
        }

    </Card>
    )
}

export default SongCard;