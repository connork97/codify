import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { BsSpotify } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";

// Take in our data for each song.

const SongCard = ({ song, handleLikedSong }) => {

    const [isLiked, setIsLiked] = useState(false);

    const likedSong = {
        song_id: song.track.id,
        song_name: song.track.name,
        song_link: song.track.external_urls.spotify,
        artists_id: song.track.artists[0].id,
        artists: song.track.artists[0].name,
        artists_link: song.track.artists[0].external_urls.spotify,
        album_id: song.track.album.id,
        album_name: song.track.album.name,
        album_link: song.track.album.external_urls.spotify,
        image: song.track.album.images[0].url,
        popularity: song.track.popularity,
        preview_url: song.track.preview_url
    }

    const songUrl = song.track.preview_url;

    const onLikeButtonClick = () => {
        setIsLiked(!isLiked)
        console.log(song)
        handleLikedSong(likedSong)
    }

// Add onclick event listener to button component & point back to handleLikedSong function which lives in App
// Render the details of the song cards with 
    return (
        <Card style={{position:"relative"}}>
            <Card.Body>
            <Card.Img src={song.track.album.images[0].url} />
                <Card.Title>{song.track.name}</Card.Title>
                <Card.Text>{song.track.artists[0].name}</Card.Text>
            </Card.Body>
            <span style={{display:"block", marginTop:"25px", marginBottom:"-25px", zIndex:"10"}}>
                {isLiked ? 
                <FaHeart onClick={() => window.alert("You've already liked this post!")} style={{cursor:"pointer", marginRight:"125px", scale:"2.5", color:"#E31B23"}} />            
                : <FaRegHeart onClick={onLikeButtonClick} style={{cursor:"pointer", marginRight:"125px", color:"#E31B23", scale:"2.5"}} />
                }
                <a href={song.track.external_urls.spotify} target="_blank">
                    <BsSpotify onClick={() => console.log(song.track.external_urls.spotify)} style={{cursor:"pointer", color:"#1DB954", scale:"2.5"}} />
                </a>            
            </span>
            <video controls name="media" style={{marginBottom:"15px"}}>
                <source src={songUrl} alt="no preview available" type="audio/mp3" />
            </video>
            {/* <Button onClick={() => handleLikedSong(likedSong)}>Like Song</Button> */}
        </Card>
    )
}

export default SongCard;

