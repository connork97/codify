import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Container, Accordion, Button } from 'react-bootstrap';
import { BsSpotify } from "react-icons/bs";
import PlaylistSongCard from "../Homepage/SongCard";

const Playlists = ({ allLikedSongs, allTopSongs, allNewSongs, handleLikedSong, accessToken }) => {
    
    const history = useHistory()

    const renderEachNewSong = () => {
            return allNewSongs.map((song) => {
                return (
                    <Accordion.Body style={{position:"relative", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <img src={song.track.album.images[0].url} style={{width:"50px", marginLeft:"0", borderRadius:"7.5px"}}></img>
                        <span style={{position:"absolute", left:"100px"}} >{song.track.name} - {song.track.artists[0].name}</span>
                        <video controls name="media" style={{position:"absolute", right:"75px", height:"50px", width:"350px", alignItems:"center", justifyContent:"flex-end"}}>
                            <source src={song.track.preview_url} alt="no preview available" type="audio/mp3" />
                        </video>
                        <a href={song.track.external_urls.spotify} target="_blank">
                            <BsSpotify onClick={() => console.log(song.track.external_urls.spotify)} style={{cursor:"pointer", color:"#1DB954", scale:"2.5"}} />
                        </a>
                    </Accordion.Body>
            )
        })
    }

    const renderEachTopSong = () => {
            return allTopSongs.map((song) => {
                return (
                    <Accordion.Body style={{position:"relative", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <img src={song.track.album.images[0].url} style={{width:"50px", marginLeft:"0", borderRadius:"7.5px"}}></img>
                        <span style={{position:"absolute", left:"100px"}} >{song.track.name} - {song.track.artists[0].name}</span>
                        <video controls name="media" style={{position:"absolute", right:"75px", height:"50px", width:"350px", alignItems:"center", justifyContent:"flex-end"}}>
                            <source src={song.track.preview_url} alt="no preview available" type="audio/mp3" />
                        </video>
                        <a href={song.track.external_urls.spotify} target="_blank">
                            <BsSpotify onClick={() => console.log(song.track.external_urls.spotify)} style={{cursor:"pointer", color:"#1DB954", scale:"2.5"}} />
                        </a>
                    </Accordion.Body>
            )
        })
    }

    const renderEachLikedSong = () => {
            return allLikedSongs.map((song) => {
                return (
                    <Accordion.Body style={{position:"relative", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <img src={song.image} style={{width:"50px", marginLeft:"0", borderRadius:"7.5px"}}></img>
                        <span style={{position:"absolute", left:"100px"}}>{song.song_name} - {song.artists}</span>
                        <video controls name="media" style={{position:"absolute", right:"75px", height:"50px", width:"350px", alignItems:"center", justifyContent:"flex-end"}}>
                            <source src={song.preview_url} alt="no preview available" type="audio/mp3" />
                        </video>
                        <a href={song.song_link} target="_blank">
                            <BsSpotify onClick={() => console.log(song.song_link)} style={{cursor:"pointer", color:"#1DB954", scale:"2.5"}} />
                        </a>
                    </Accordion.Body>
            )
        })
    }

    return (
        <Container className="playlistDiv">
            <h1>Your Playlists</h1>
            <Accordion style={{margin:"2.5rem 0 2.5rem 0"}} defaultActiveKey={null}>
                <Accordion.Item>
                <Accordion.Header>Liked Songs</Accordion.Header>
                   {allLikedSongs !== "" ? renderEachLikedSong() : null}
                </Accordion.Item>
            </Accordion>
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
            <Button onClick={() => history.push({pathname:"/playlists/new-playlist"})}>Create A Playlist</Button>
        </Container>
    )
}


export default Playlists;