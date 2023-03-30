import React, { useState } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap';
import TrackSearchSongCard from "./TrackSearchSongCard";

const Search = ({ handleLikedSong, accessToken }) => {

    const history = useHistory();
    const { url, path } = useRouteMatch();
    
    const [searchInput, setSearchInput] = useState("");
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [shouldRender, setShouldRender] = useState(false);

    // Search Function runs when user inputs text and hits enter key or search button

    async function searchMusic() {

        setShouldRender(true);

        let searchParameters = {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
            }
        }

    // fetch 6 artists, 6 albums, 6 tracks, and 6 playlists and set to state artists, albums, tracks, and playlists
        await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
        .then(response => response.json())
        .then(data => {
            setArtists(data.artists.items.slice(0,5))
        })

        await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=album', searchParameters)
        .then(response => response.json())
        .then(data => {
            setAlbums(data.albums.items.slice(0, 5))
        })
        
        await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=track', searchParameters)
        .then(response => response.json())
        .then(data => {
            console.log("Working Songs", data.tracks.items.slice(0,5))
            setTracks(data.tracks.items.slice(0, 5))
        })

        await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=playlist', searchParameters)
        .then(response => response.json())
        .then(data => {
            setPlaylists(data.playlists.items.slice(0,5))
        })
    }
    

// Callback function for rendering artists, albums and playlists from return below.
// Take in artists, albums, and playlists states, map through them, and render a row container 
// with the images and name. Also, create an onclick that routes you to a new URL depending on...?
    const renderSearchComponent = (element) => {
        return (
            <Container>
                <Row className="mx row row-cols-5">
                    {element.map((item, i) => {
                    return (
                        <Card onClick={() => history.push({pathname:`${url}/${item.type}/${item.name}/details`, state:item})} >
                        <br></br>
                        <Card.Img src={item.images[0]?.url || process.env.PUBLIC_URL + "logo192.png"} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            {/* <Link to={`${url}/${item.type}/${item.name}/details`}>Click For More Details</Link> */}
                        </Card.Body>
                        </Card>
                    )
                    })}
                </Row>
            </Container>
        )
    }

    // Top Container: Render of the search bar. If keydown event = "Enter" or clicks the search button, trigger 
    // searchMusic function which fetches the artists, albums, tracks, and playlists. Also, put an onChange
    // event listener to set the search input state to the user's input, which is used in the fetch requests
    return (
        <div>
            <Container>
                <br></br>
                <InputGroup className="mb-3" size="lg">
                    <FormControl
                    placeholder="Search for Artist"
                    type="input"
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                        searchMusic();
                        }
                    }}
                    onChange={(event) => setSearchInput(event.target.value)}
                    />
                    <Button onClick={searchMusic}>
                    Search
                    </Button>
                </InputGroup>
            </Container>
            <br></br>
            {/* shouldRender is initially set to false, and is set to true when the onClick or
            search function fires. If shouldRender and searchInput is not equal to an empty string, 
            render Top Tracks, else null. Return a TrackSearchSongCard component. */}
            {shouldRender && searchInput !== "" ? <h2>Top Tracks</h2> : null}
            <br></br>
            <Container>
                <Row className="mx row row-cols-5">
                    {tracks.map( (track, i) => {
                        console.log(track)
                    return (
                        <TrackSearchSongCard track={track} handleLikedSong={handleLikedSong} />
                    )
                    })}
                </Row>
                {/* Render the rows of cards for artists, albums, and playlists from a callback function
                renderSearchComponent*/}
            </Container>
            <br></br>
            {shouldRender && searchInput !== "" ? <h2>Top Artists</h2> : null}
            <br></br>
            {renderSearchComponent(artists)}
            <br></br>
            {shouldRender && searchInput !== "" ? <h2>Top Albums</h2> : null}
            <br></br>
            {renderSearchComponent(albums)}
            <br></br>
            {shouldRender && searchInput !== "" ? <h2>Top Playlists</h2> : null}
            <br></br>
            {renderSearchComponent(playlists)}

        </div>
    )
}

export default Search;