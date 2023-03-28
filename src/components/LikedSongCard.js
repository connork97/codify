import { Card, Button } from "react-bootstrap";

const LikedSongCard = ({ song }) => {

    return (
        <Card>
            <Card.Body>
            <Card.Img src={song.images[0].url} />
                <Card.Title>{song.song_name}</Card.Title>
                <Card.Text>{song.artists}</Card.Text>
            </Card.Body>
            <Button>Like Song</Button>
            <br></br>
            <video controls name="media">
                <source src={song.preview_url} alt="no preview available" type="audio/mp3" />
            </video>
        </Card>
        )
}

export default LikedSongCard;