import { Card, Button } from "react-bootstrap";

const LikedSongCard = ({ song, handleRemoveLike }) => {


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
            <Button onClick={() => handleRemoveLike(song)}>Remove From Likes</Button>
            <video controls name="media">
                <source src={song.preview_url} alt="no preview available" type="audio/mp3" />
            </video>
        </Card>
        )
}

export default LikedSongCard;