import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Container, Row, Card, ListGroup, Header, Button } from "react-bootstrap";

const PlaylistDetails = ({ accessToken }) => {

    const [playlistTracks, setPlaylistTracks] = useState([]);

    const location = useLocation();
    console.log(location.state);

    const playlistData = location.state;

    useEffect(() => {
        fetch(`https://api.spotify.com/v1/playlists/${location.state.id}/tracks`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("PLAYLIST TRACK DATA:", data.items)
            setPlaylistTracks(data.items)
        })
    }, [])

    const renderPlaylistTracks = playlistTracks.map((item) => {
        console.log(item.track)
        return (
            <ListGroup.Item style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <img style={{height:"50px", borderRadius:"7.5px"}} src={item.track.album.images[0]?.url || process.env.PUBLIC_URL + "logo192.png"}></img>
                {item.track.name}
                {item.track.preview_url !== null ?
                    <video controls name="media" style={{right:"0", height:"50px", width:"350px", alignItems:"center", justifyContent:"flex-end"}}>
                        <source src={item.track.preview_url} alt="no preview available" type="audio/mp3" />
                    </video>
                : <span>Preview Not Available</span>}
            </ListGroup.Item>
        )
    })

    return (
        <div style={{marginBottom:"100px"}}>
            <Container>
            <br></br><br></br>
                <Row className="mx-2 row row-cols-4">
                    <Card style={{margin:"auto"}}>
                        <Card.Body>
                        <Card.Img src={playlistData.images[0]?.url || process.env.PUBLIC_URL + "logo192.png"} />
                            <br></br><br></br>
                            <Card.Title>{playlistData.name}</Card.Title>
                            <Card.Text>Released: {playlistData.release_date}</Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            <br></br><br></br>
            <h2>Top Songs</h2>
            <br></br>
            <Container>
                <ListGroup>
                    {renderPlaylistTracks}
                </ListGroup>
            </Container>
        </div>    )
}

export default PlaylistDetails;