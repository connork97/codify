import React, { useState } from "react";
import { Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap';

const ArtistAlbumSearch = ({ accessToken }) => {
    
    const [searchInput, setSearchInput] = useState("");
    const [albums, setAlbums] = useState([]);

    async function search() {

    console.log("Search for " + searchInput);

    // Get request using search to get the Artist ID
    let searchParameters = {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
        }
    }
    let artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
        .then(response => response.json())
        .then(data => { return data.artists.items[0].id })

        console.log("Artist ID is " + artistID)
        
    // Get request with Artist ID to grab all the albums from that artist
    let returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
        .then(response => response.json())
        .then(data => {
        console.log(data)
        setAlbums(data.items)
        })
    // Display those albums to the user
    }

    return (
        <div>
        <Container>
        <InputGroup className="mb-3" size="lg">
            <FormControl
            placeholder="Search for Artist"
            type="input"
            onKeyDown={event => {
                if (event.key === "Enter") {
                search();
                }
            }}
            onChange={event => setSearchInput(event.target.value)}
            />
            <Button onClick={search}>
            Search
            </Button>
        </InputGroup>
        </Container>
        <Container>
        <Row className="mx-2 row row-cols-4">
            {albums.map( (album, i) => {
            return (
                <Card>
                <Card.Img src={album.images[0].url} />
                <Card.Body>
                    <Card.Title>{album.name}</Card.Title>
                </Card.Body>
                </Card>
            )
            })}
        </Row>
        </Container>
        </div>
    )
}

export default ArtistAlbumSearch;