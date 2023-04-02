import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, Button, Dropdown } from "react-bootstrap";
import { BsSpotify, BsList } from "react-icons/bs";

const LikedSongCard = ({ song, handleRemovedLike, allPlaylists, setAllPlaylists, generalToggle, setGeneralToggle }) => {

    const [isPlaylistClicked, setIsPlaylistClicked] = useState(false);
    const history = useHistory();

// Render a LikedSongCard component (image, song name, artist, and song preview url)
// Render a Remove from likes component with an onclick that is passed to a function
// handleRemoveLike in the LikedSong component which sends a delete request to our JSON

    const dropDownOptions = () => {
        return allPlaylists.map((playlist) => {
            return <Dropdown.Item onClick={() => handleAddToPlaylist(playlist)}>{playlist.name}</Dropdown.Item>
        })
    }

    const handleAddToPlaylist = (playlist) => {
        fetch(`http://localhost:8000/playlists/${playlist.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                songs: [
                    ...playlist.songs,
                    song
                ]
            })
        })
        .then((response) => response.json())
        .then((addedSongData) => console.log(addedSongData))
        setAllPlaylists([...allPlaylists, song])
        setGeneralToggle(!generalToggle)
    }

    const handleCreateNewPlaylist = () => {
        history.push({pathname:"/playlists/new-playlist"})
    }

    return (
        <Card>
            <Card.Body>
                <Card.Img src={song.image} />
                <Card.Title>{song.song_name}</Card.Title>
                <Card.Text>{song.artists}</Card.Text>
            </Card.Body>
            <span style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                <Button onClick={() => handleRemovedLike(song)}>Remove From Likes</Button>
                <a href={song.song_link} target="_blank">
                    <BsSpotify style={{cursor:"pointer", color:"#1DB954", scale:"2.5"}} />
                </a>
            </span>
            <span style={{display:"inline-flex", marginTop:"50px", zIndex:"10", justifyContent:"space-between", alignItems:"center"}}>
                <audio controls name="media" style={{marginBottom:"15px", width:"200px"}}>
                    <source src={song.preview_url} alt="no preview available" type="audio/mp3" />
                </audio>
                <Dropdown>
                    <Dropdown.Toggle variant="none" style={{marginBottom:"15px"}}>
                        <BsList type="select" onClick={() => setIsPlaylistClicked(!isPlaylistClicked)} style={{display:"inline-flex", cursor:"pointer", scale:"1.75", zIndex:"10"}} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <span style={{display:"flex", justifyContent:"center"}}><strong>Add to...</strong></span>
                        <Dropdown.Item onClick={() => handleCreateNewPlaylist()}>New Playlist</Dropdown.Item>
                    {dropDownOptions()}
                    </Dropdown.Menu>
                </Dropdown>
            </span>
        </Card>
        )
}

export default LikedSongCard;