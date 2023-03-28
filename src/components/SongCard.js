import { Card } from "react-bootstrap";

const SongCard = ({ track }) => {
    return (
    <Card>
        <Card.Body>
        <Card.Img src={track.track.album.images[0].url} />
            <Card.Title>{track.track.name}</Card.Title>
        </Card.Body>
    </Card>
    )
}

export default SongCard;