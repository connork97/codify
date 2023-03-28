import React, { useEffect, useState } from "react";
import { Row, Container } from 'react-bootstrap';
import SongCard from "./SongCard";

function NewSongs({ accessToken }) {

    const [topFive, setTopFive] = useState("");

     useEffect(() => {
            fetch('https://api.spotify.com/v1/playlists/37i9dQZF1DX4JAvHpjipBk', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + accessToken
                }
            })
            .then(response => response.json())
            .then(data => {
                const filteredSongs = data.tracks.items.filter((song) => song.track.preview_url != null)
                setTopFive(filteredSongs.slice(0, 5))
            })
    }, [accessToken])
    
    const eachTrack = () => {
        return topFive.map((song) => {
            return <SongCard song={song} key={song.track.id} />
        })
    }

    return (
        <Container className="homePageDiv">
            <h2 className="homeDivTitle">{accessToken === "" ? "Loading " : null}New Songs</h2>
            <Row className="mx-2 row row-cols-5">
                {topFive !== "" ? eachTrack() : null}
            </Row>
        </Container>
    )
}

export default NewSongs;