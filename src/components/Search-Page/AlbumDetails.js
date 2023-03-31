import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Container, Row, Card, ListGroup, Header, Button } from "react-bootstrap";
import { BsSpotify } from "react-icons/bs";
import TrackListItem from "./TrackListItem";

const AlbumDetails = ({ accessToken }) => {

    const [albumTracks, setAlbumTracks] = useState([]);

    const location = useLocation();
    // console.log(location.state);

    const albumData = location.state;
    // console.log("ALBUM DATA", albumData.artists[0].name)

    useEffect(() => {
        fetch(`https://api.spotify.com/v1/albums/${location.state.id}/tracks`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((response) => response.json())
        .then((data) => {
            // console.log("ALBUM TRACK DATA:", data.items)
            setAlbumTracks(data.items)
        })
    }, [])

    {/* <span style={{position:"absolute", right:"160px"}}>Preview Not Available</span>} */}

    const [backupPreviewUrl, setBackupPreviewUrl] = useState("");

    // console.log(albumData)
    
    const renderAlbumTracks = albumTracks.map((track) => {
        return (
            <ListGroup.Item style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <img style={{height:"50px", borderRadius:"7.5px"}} src={albumData.images[0]?.url || process.env.PUBLIC_URL + "logo192.png"}></img>
                <span style={{position:"absolute", left:"100px"}} >{track.name}</span>
                {/* // console.log(track); */}
                <TrackListItem track={track} accessToken={accessToken} artistName={albumData.artists[0].name} />
                <a href={track.external_urls.spotify} target="_blank">
                    <BsSpotify onClick={() => console.log(track.external_urls.spotify)} style={{cursor:"pointer", color:"#1DB954", scale:"2.5"}} />
                </a>   
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