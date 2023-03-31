import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, Button, Dropdown } from "react-bootstrap";
import { BsSpotify, BsList } from "react-icons/bs";


const TrackListItem = ({ track, artistName, albumImage, accessToken, allPlaylists, setAllPlaylists, generalToggle, setGeneralToggle }) => {
    
    // const [allBackups, setAllBackups] = useState ([]);
    const [backupPreview, setBackupPreview] = useState("");
    const [isFetched, setIsFetched] = useState(false);
    const [isPlaylistClicked, setIsPlaylistClicked] = useState(false);

    const history = useHistory();

    console.log(track)

    const likedSong = {
        song_id: track.id,
        song_name: track.name,
        song_link: track.external_urls.spotify,
        artists_id: track.artists[0].id,
        artists: track.artists[0].name,
        artists_link: track.artists[0].external_urls.spotify,
        // album_id: track.album.id,
        //     album_name: track.album.name,
        //     album_link: track.album.external_urls.spotify,
        image: albumImage,
    //     popularity: track.popularity,
        preview_url: backupPreview
    }

    useEffect(() => {
        fetch('https://api.spotify.com/v1/search?q=' + track.name + '&type=track', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((response) => response.json())
        .then((data) => {
            filterBackups(data.tracks.items)
        })
    }, [])
    
    const filterBackups = (generalBackups) => {
        const backupObj = generalBackups.find((backup) => backup.artists[0].name.toLowerCase() == artistName.toLowerCase())
        let verifiedBackupObj;
        if (backupObj !== undefined) {
            verifiedBackupObj = backupObj
            // setBackupPreview(verifiedBackupObj.preview_url)
            setIsFetched(true)
        }
        setBackupPreview(verifiedBackupObj.preview_url)
    }

    const dropDownOptions = () => {
        return allPlaylists.map((playlist) => {
            // console.log(playlist.songs)
            return <Dropdown.Item style={{zIndex:"15"}} onClick={() => handleAddToPlaylist(playlist)}>{playlist.name}</Dropdown.Item>
        })
    }

    const handleAddToPlaylist = (playlist) => {
        console.log(playlist.songs)
        // console.log(likedSong)
        fetch(`http://localhost:8000/playlists/${playlist.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                songs: [
                    ...playlist.songs,
                    likedSong
                ]
            })
        })
        .then((response) => response.json())
        .then((addedSongData) => console.log(addedSongData))
        setAllPlaylists([...allPlaylists, likedSong])
        // setGeneralToggle(!generalToggle)
        handleToggle()
    }

    const handleToggle = () => {
        setGeneralToggle(!generalToggle)
    }

    const handleCreateNewPlaylist = () => {
        history.push({pathname:"/playlists/new-playlist"})
    }

    //Alternative Method to Render the Audio Player On First Page Load

    // useEffect(() => {
    //     const backupObj = allBackups.find((backup) => backup.artists[0].name.toLowerCase() == artistName.toLowerCase())
    //     console.log(backupObj)
    //     // debugger;
    //     let verifiedBackupObj;
    //     if (backupObj !== undefined) {
    //         verifiedBackupObj = backupObj
    //         console.log(verifiedBackupObj)
    //         setBackupPreview(verifiedBackupObj.preview_url)
    //         setIsFetched(true)
    //     }
    // }, [allBackups])

            // <video controls name="media" style={{position:"absolute", right:"75px", height:"50px", width:"350px", alignItems:"center", justifyContent:"flex-end"}}>
            //     <source src={backupPreview} alt="no preview available" type="audio/mp3" />
            // </video>
    return (
        <>
            {isFetched ?
            <span style={{display:"inline-flex", zIndex:"10", justifyContent:"space-between", alignItems:"center"}}>
                <audio controls name="media" style={{position:"absolute", right:"75px", height:"50px", width:"350px", alignItems:"center", justifyContent:"flex-end"}}>
                    <source src={backupPreview} alt="no preview available" type="audio/mp3" />
                </audio>
                <Dropdown style={{zIndex:"8"}}>
                    <Dropdown.Toggle variant="none" style={{marginBottom:"15px"}}>
                        <BsList type="select" onClick={() => setIsPlaylistClicked(!isPlaylistClicked)} style={{display:"inline-flex", cursor:"pointer", scale:"1.75", zIndex:"9"}} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{zIndex:"15"}}>
                        <span style={{display:"flex", justifyContent:"center"}}><strong>Add to...</strong></span>
                        <Dropdown.Item style={{zIndex:"15"}} onClick={() => handleCreateNewPlaylist()}>New Playlist</Dropdown.Item>
                    {dropDownOptions()}
                    </Dropdown.Menu>
                </Dropdown>
            </span>
            : <span style={{position:"absolute", right:"75px", width:"350px", alignItems:"center", justifyContent:"flex-end"}}>Preview Not Available</span>}
        </>
    )
}

export default TrackListItem;