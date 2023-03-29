import React, { useState } from "react";
import { Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap';

const ArtistSearch = ({ accessToken }) => {
    
    const [searchInput, setSearchInput] = useState("");
    const [artists, setArtists] = useState([]);

    async function search() {

    console.log("Search for " + searchInput);

    // Get request using search to get an array of all the artists
    let searchParameters = {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
        }
    }

    let artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
    .then(response => response.json())
    .then(data => {
        console.log(data.artists.items)
        setArtists(data.artists.items)
        // return data.artists.items[0].id;
    })

    // let returnedArtists = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/tracks' + '?include_groups=album&market=US&limit=50', searchParameters)
    // .then(response => response.json())
    // .then(data => {
    // console.log(data)
    // })
// Display those albums to the user
}

//const singleArtist = artists.map((artist) => console.log(singleArtist));
    

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
                {artists.map( (artist, i) => {
                return (
                    <Card>
                    <Card.Img src={artist.images[0]?.url || process.env.PUBLIC_URL + "logo192.png"} />
                  
                    <Card.Body>
                        <Card.Title>{artist.name}</Card.Title>
                    </Card.Body>
                    </Card>
                )
                })}
            </Row>
        </Container> 
        </div>
    )
}

export default ArtistSearch;