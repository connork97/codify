import { Card, Button } from "react-bootstrap";
import { BsSpotify } from "react-icons/bs";


const LikedSongCard = ({ song, handleRemovedLike }) => {


// Render a LikedSongCard component (image, song name, artist, and song preview url)
// Render a Remove from likes component with an onclick that is passed to a function
// handleRemoveLike in the LikedSong component which sends a delete request to our JSON
    return (
        <Card>
            <Card.Body>
            <Card.Img src={song.image} />
                <Card.Title>{song.song_name}</Card.Title>
                <Card.Text>{song.artists}</Card.Text>
            </Card.Body>
            <span style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
            <Button onClick={() => handleRemovedLike(song)}>Remove From Likes</Button>
            <a href={song.song_link} target="_blank">
                <BsSpotify style={{cursor:"pointer", color:"#1DB954", scale:"2.5"}} />
            </a>
            </span>
            <video controls name="media" style={{marginBottom:"15px"}}>
                <source src={song.preview_url} alt="no preview available" type="audio/mp3" />
            </video>
        </Card>
        )
}

export default LikedSongCard;