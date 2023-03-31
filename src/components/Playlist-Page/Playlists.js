import { useHistory } from "react-router-dom";
import { Container, Accordion, Button } from 'react-bootstrap';
import { BsSpotify } from "react-icons/bs";
import { useEffect } from "react";

const Playlists = ({ allLikedSongs, allTopSongs, allNewSongs, allPlaylists, setAllPlaylists, generalToggle, setGeneralToggle }) => {
    
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
                        <BsSpotify style={{cursor:"pointer", color:"#1DB954", scale:"2.5"}} />
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
                        <BsSpotify style={{cursor:"pointer", color:"#1DB954", scale:"2.5"}} />
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

    const renderUserSongs = (playlist) => {
        console.log("TESTING 1 2 3", playlist)
        return playlist.songs.map((song) => {
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

    const handleDeletePlaylist = (id) => {
        fetch(`http://localhost:8000/playlists/${id}`, {
            method: "DELETE"
        })
        const remainingPlaylists = allPlaylists.filter((playlist) => playlist.id != id)
        setAllPlaylists(remainingPlaylists)
    }

    useEffect(() => {
        setGeneralToggle(!generalToggle)
    }, [])

    useEffect(() => {
        renderUserPlaylists()
    }, [generalToggle])

    const renderUserPlaylists = () => allPlaylists.map((playlist) => {
        console.log(playlist)
        return (
            <span>
            <Accordion style={{position:"relative", overflow:"visible", margin:"2.5rem 0 2.5rem 0"}} defaultActiveKey={null}>
                <Accordion.Item>
                <Accordion.Header>{playlist.name}</Accordion.Header>
                    {renderUserSongs(playlist)}
                </Accordion.Item>
                <Button onClick={() => handleDeletePlaylist(playlist.id)} style={{position:"absolute", display:"flex", justifyContent:"center", right:"-175px", bottom:"7.5px", width:"150px"}}>Delete Playlist</Button>
            </Accordion>
            </span>
        )
    })

    return (
        <Container className="playlistDiv">
            <h1 style={{marginTop:"50px"}}>Your Playlists</h1>
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
            {renderUserPlaylists()}
            <Button onClick={() => history.push({pathname:"/playlists/new-playlist"})}>Create A Playlist</Button>
        </Container>
    )
}

export default Playlists;