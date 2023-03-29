import React, { useState } from "react";
import { Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap';

const Search = ({ accessToken }) => {
    
    const [searchInput, setSearchInput] = useState("");
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [shouldRender, setShouldRender] = useState(false);

    async function search() {

    setShouldRender(true);

    console.log("Search for " + searchInput);

    // Get request using search to get an array of all the artists
    let searchParameters = {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
        }
    }

    await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
    .then(response => response.json())
    .then(data => {
        setArtists(data.artists.items.slice(0,6))
        // return data.artists.items[0].id;
    })

    await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=album', searchParameters)
    .then(response => response.json())
    .then(data => {
        setAlbums(data.albums.items.slice(0, 6))
    })
    
    await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=track', searchParameters)
    .then(response => response.json())
    .then(data => {
        setTracks(data.tracks.items.slice(0, 6))
    })

    await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=playlist', searchParameters)
    .then(response => response.json())
    .then(data => {
        console.log(data.playlists.items)
        setPlaylists(data.playlists.items.slice(0,6))
        // setTracks(data.tracks.items.slice(0, 6))
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
        {shouldRender && searchInput !== "" ? <h2>Top Tracks</h2> : null}
        <Container>
            <Row className="mx-2 row row-cols-6">
                {tracks.map( (track, i) => {
                return (
                    <Card>
                    <Card.Img src={track.album.images[0]?.url || process.env.PUBLIC_URL + "logo192.png"} />         
                    <Card.Body>
                        <Card.Title>{track.name}</Card.Title>
                    </Card.Body>
                    </Card>
                )
                })}
            </Row>
        </Container>
        {shouldRender && searchInput !== "" ? <h2>Top Artists</h2> : null}
        <Container>
            <Row className="mx-2 row row-cols-6">
                {artists.map( (artist, i) => {
                return (
                    <Card>
                    <Card.Img onClick={() => console.log(artist)} src={artist.images[0]?.url || process.env.PUBLIC_URL + "logo192.png"} />
                    <Card.Body>
                        <Card.Title>{artist.name}</Card.Title>
                    </Card.Body>
                    </Card>
                )
                })}
            </Row>
        </Container>
        {shouldRender && searchInput !== "" ? <h2>Top Albums</h2> : null}
        <Container>
            <Row className="mx-2 row row-cols-6">
                {albums.map( (album, i) => {
                return (
                    <Card>
                    <Card.Img src={album.images[0]?.url || process.env.PUBLIC_URL + "logo192.png"} />                 
                    <Card.Body>
                        <Card.Title>{album.name}</Card.Title>
                    </Card.Body>
                    </Card>
                )
                })}
            </Row>
        </Container> 
        {shouldRender && searchInput !== "" ? <h2>Top Playlists</h2> : null}
        <Container>
            <Row className="mx-2 row row-cols-6">
                {playlists.map( (playlist, i) => {
                return (
                    <Card>
                    <Card.Img src={playlist.images[0]?.url || process.env.PUBLIC_URL + "logo192.png"} />         
                    <Card.Body>
                        <Card.Title>{playlist.name}</Card.Title>
                    </Card.Body>
                    </Card>
                )
                })}
            </Row>
        </Container>
        </div>
    )
}

export default Search;