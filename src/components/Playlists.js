import { useState } from "react";
import { Row, Container, Accordion } from 'react-bootstrap';
import { VscArrowCircleRight } from "react-icons/vsc";
import PlaylistSongCard from "./SongCard";

const Playlists = ({ allLikedSongs, allTopSongs, allNewSongs, handleLikedSong, accessToken }) => {
    
    const renderEachNewSong = () => {
            return allNewSongs.map((song) => {
                return (
                    <Accordion.Body style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <img src={song.track.album.images[0].url} style={{width:"50px", marginLeft:"0", borderRadius:"7.5px"}}></img>
                        {song.track.name} - {song.track.artists[0].name}
                        <video controls name="media" style={{right:"0", height:"50px", width:"350px", alignItems:"center", justifyContent:"flex-end"}}>
                            <source src={song.track.preview_url} alt="no preview available" type="audio/mp3" />
                        </video>
                    </Accordion.Body>
            )
        })
    }

    const renderEachTopSong = () => {
            return allTopSongs.map((song) => {
                return (
                    <Accordion.Body style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <img src={song.track.album.images[0].url} style={{width:"50px", marginLeft:"0", borderRadius:"7.5px"}}></img>
                        {song.track.name} - {song.track.artists[0].name}
                        <video controls name="media" style={{right:"0", height:"50px", width:"350px", alignItems:"center", justifyContent:"flex-end"}}>
                            <source src={song.track.preview_url} alt="no preview available" type="audio/mp3" />
                        </video>
                    </Accordion.Body>
            )
        })
    }

    const renderEachLikedSong = () => {
            return allLikedSongs.map((song) => {
                return (
                    <Accordion.Body style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <img src={song.image} style={{width:"50px", marginLeft:"0", borderRadius:"7.5px"}}></img>
                        {song.song_name} - {song.artists}
                        <video controls name="media" style={{right:"0", height:"50px", width:"350px", alignItems:"center", justifyContent:"flex-end"}}>
                            <source src={song.preview_url} alt="no preview available" type="audio/mp3" />
                        </video>
                    </Accordion.Body>
            )
        })
    }

    return (
        <Container className="playlistDiv">
            <h1>Your Playlists</h1>
            <Accordion style={{margin:"2.5rem 0 2.5rem 0"}} defaultActiveKey={null}>
                <Accordion.Item>
                <Accordion.Header>Top Songs</Accordion.Header>
                    {allTopSongs !== "" ? renderEachTopSong() : null}
                </Accordion.Item>
            </Accordion>
            <Accordion style={{margin:"2.5rem 0 2.5rem 0"}} defaultActiveKey={null}>
                <Accordion.Item>
                <Accordion.Header>New Songs</Accordion.Header>
                   {allNewSongs !== "" ? renderEachNewSong() : null}
                </Accordion.Item>
            </Accordion>
            <Accordion style={{margin:"2.5rem 0 2.5rem 0"}} defaultActiveKey={null}>
                <Accordion.Item>
                <Accordion.Header>Liked Songs</Accordion.Header>
                   {allLikedSongs !== "" ? renderEachLikedSong() : null}
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}


export default Playlists;