import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

// 2. Take in our data for each song, and set state of likedSong to an object containing the following data...

const SongCard = ({ song }) => {

    const [likedSong, setLikedSong] = useState({
        song_id: song.track.id,
        song_name: song.track.name,
        song_link: song.track.external_urls.spotify,
        artists_id: song.track.artists[0].id,
        artists: song.track.artists[0].name,
        artists_link: song.track.artists[0].external_urls.spotify,
        album_id: song.track.album.id,
        album_name: song.track.album.name,
        album_link: song.track.album.external_urls.spotify,
        images: song.track.album.images,
        popularity: song.track.popularity,
        preview_url: song.track.preview_url
    })

    const songUrl = song.track.preview_url;

// 3. Take whichever song we clicked on and make a post request to our JSON server based on the likedSong state.
// Check db.JSON file for confirmation

    const handleClick = () => {
        console.log(song)
        fetch("http://localhost:8000/likes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(likedSong)
        })
        .then((response => response.json()))
        .then((likedSong) => console.log(likedSong))
    }

// 1. Add onclick event listener to button component & point back to handleClick function

    return (
    <Card>
        <Card.Body>
        <Card.Img src={song.track.album.images[0].url} />
            <Card.Title>{song.track.name}</Card.Title>
            <Card.Text>{song.track.artists[0].name}</Card.Text>
        </Card.Body>
        <Button onClick={handleClick}>Like Song</Button>
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

