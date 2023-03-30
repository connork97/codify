import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Container, Row, Card, ListGroup, Header, Button } from "react-bootstrap";

const AlbumDetails = ({ accessToken }) => {

    const [albumTracks, setAlbumTracks] = useState([]);

    const location = useLocation();
    console.log(location.state);

    const albumData = location.state;

    useEffect(() => {
        fetch("https://api.spotify.com/v1/albums/4SZko61aMnmgvNhfhgTuD3/tracks", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("ALBUM TRACK DATA:", data.items)
            setAlbumTracks(data.items)
        })
    }, [])

    const renderAlbumTracks = albumTracks.map((track) => {
        return (
            <ListGroup.Item style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <img style={{height:"50px", borderRadius:"7.5px"}} src={albumData.images[0]?.url || process.env.PUBLIC_URL + "logo192.png"}></img>
                {track.name}
                {track.preview_url !== null ?
                    <video controls name="media" style={{right:"0", height:"50px", width:"350px", alignItems:"center", justifyContent:"flex-end"}}>
                        <source src={track.preview_url} alt="no preview available" type="audio/mp3" />
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
                        <Card.Img src={albumData.images[0]?.url || process.env.PUBLIC_URL + "logo192.png"} />
                            <br></br><br></br>
                            <Card.Title>{albumData.name}</Card.Title>
                            <Card.Text>Released: {albumData.release_date}</Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            <br></br><br></br>
            <h2>Top Songs</h2>
            <br></br>
            <Container>
                <ListGroup>
                    {renderAlbumTracks}
                </ListGroup>
            </Container>
        </div>
    )
}

export default AlbumDetails;