import React, { useState } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap';
import TrackSearchSongCard from "./TrackSearchSongCard";
import SearchDetails from "./SearchDetails";

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

    async function search() {

        setShouldRender(true);

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
        })
    }

    // Rendering Artists, Albums, and Playlists (since they have similar/identical data structures)

    // const handleDetailsClick = (element, item) => {
    //     console.log(item)
    //     return (
    //         <>
    //             <Redirect />

    //             {/* <Link to="search-details"></Link> */}
    //         </>
    //     )
    // }

    const renderSearchComponent = (element) => {
        return (
            <Container>
                <Row className="mx-2 row row-cols-6">
                    {element.map( (item, i) => {
                    return (
                        <Card onClick={() => history.push({pathname:`${url}/${item.name}/search-details`, state:item})} >
                        <Card.Img src={item.images[0]?.url || process.env.PUBLIC_URL + "logo192.png"} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Link to={`${url}/${item.name}/search-details`}>Click For More Details</Link>
                        </Card.Body>
                        </Card>
                    )
                    })}
                </Row>
            </Container>
        )
    }

    // Actual Return of Components to be rendered on page
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
                        console.log(track)
                    return (
                        <TrackSearchSongCard track={track} handleLikedSong={handleLikedSong} />
                    )
                    })}
                </Row>
            </Container>

            {shouldRender && searchInput !== "" ? <h2>Top Artists</h2> : null}
            {renderSearchComponent(artists)}

            {shouldRender && searchInput !== "" ? <h2>Top Albums</h2> : null}
            {renderSearchComponent(albums)}

            {shouldRender && searchInput !== "" ? <h2>Top Playlists</h2> : null}
            {renderSearchComponent(playlists)}

        </div>
    )
}

export default Search;