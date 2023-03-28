import React, { useEffect, useState } from "react";
import { Row, Container, Card } from 'react-bootstrap';
import SongCard from "./SongCard";

function TopCharts({accessToken}) {

    const [topFive, setTopFive] = useState("");

     useEffect(() => {
        let renderTopCharts = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + accessToken
            }
          }
            fetch('https://api.spotify.com/v1/playlists/37i9dQZEVXbNG2KDcFcKOF', renderTopCharts)
            .then(response => response.json())
            .then(data => {
                console.log(data.tracks.items[0])
                setTopFive(data.tracks.items.slice(0, 5))
            })
    }, [accessToken])
    
    // let firstOfFive = topFive[0].track.name;
    const eachTrack = () => {
        return topFive.map((track) => {
            return <SongCard track={track} />
    })
    }

    return (
        <Container className="homePageDiv">
            <h2 className="homeDivTitle">Top Songs</h2>
            <Row className="mx-2 row row-cols-5">
                {topFive !== "" ? eachTrack() : null}
            </Row>
        </Container>
    )
}

export default TopCharts;