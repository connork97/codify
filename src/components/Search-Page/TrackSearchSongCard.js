import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { BsSpotify } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const TrackSearchSongCard = ({ track, handleLikedSong }) => {

    const [isLiked, setIsLiked] = useState(false);

    const likedSong = {
        song_id: track.id,
        song_name: track.name,
        song_link: track.external_urls.spotify,
        artists_id: track.artists[0].id,
        artists: track.artists[0].name,
        artists_link: track.artists[0].external_urls.spotify,
        album_id: track.album.id,
        album_name: track.album.name,
        album_link: track.album.external_urls.spotify,
        image: track.album.images[0].url,
        popularity: track.popularity,
        preview_url: track.preview_url
    }
    const onLikeButtonClick = () => {
        setIsLiked(!isLiked)
        console.log(track)
        handleLikedSong(likedSong)
    }

    return (
        <Card>
        <br></br>
        <Card.Img src={track.album.images[0]?.url || process.env.PUBLIC_URL + "logo192.png"} />         
        <Card.Body>
            <Card.Title>{track.name}</Card.Title>
            <Card.Text>{track.artists[0].name}</Card.Text>
        </Card.Body>
        {/* <Button onClick={() => handleLikedSong(likedSong)}>Like Song</Button> */}
        <span style={{display:"block", marginTop:"25px", marginBottom:"-5px", zIndex:"10"}}>
            {isLiked ? 
            <FaHeart onClick={() => window.alert("You've already liked this post!")} style={{cursor:"pointer", marginRight:"125px", scale:"2.5", color:"#E31B23"}} />            
            : <FaRegHeart onClick={onLikeButtonClick} style={{cursor:"pointer", marginRight:"125px", color:"#E31B23", scale:"2.5"}} />
            }
            <a href={track.external_urls.spotify} target="_blank">
                <BsSpotify onClick={() => console.log(track.external_urls.spotify)} style={{cursor:"pointer", color:"#1DB954", scale:"2.5"}} />
            </a>
        </span>
        <video controls name="media" style={{marginBottom:"15px"}}>
            <source src={track.preview_url} alt="no preview available" type="audio/mp3" />
        </video>
        </Card>
    )
}

export default TrackSearchSongCard;