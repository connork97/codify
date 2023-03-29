import { Card, Button } from "react-bootstrap";

const TrackSearchSongCard = ({ track, handleLikedSong }) => {

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

    return (
        <Card>
        <Card.Img src={track.album.images[0]?.url || process.env.PUBLIC_URL + "logo192.png"} />         
        <Card.Body>
            <Card.Title>{track.name}</Card.Title>
            <Card.Text>{track.artists[0].name}</Card.Text>
        </Card.Body>
        <Button onClick={() => handleLikedSong(likedSong)}>Like Song</Button>
        <video controls name="media">
            <source src={track.preview_url} alt="no preview available" type="audio/mp3" />
        </video>
        </Card>
    )
}

export default TrackSearchSongCard;