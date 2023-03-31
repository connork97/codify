import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const CreatePlaylist = () => {

    const [playlistName, setPlaylistName] = useState("")
    const [playlistDescription, setPlaylistDescription] = useState("")

    const postPlaylist = (event) => {
        event.preventDefault()
        fetch("http://localhost:8000/playlists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: playlistName,
                description: playlistDescription,
                songs: []
            })
        })
        .then((response) => response.json())
        .then((playlistData) => console.log(playlistData))
    }

    return (
        <Form style={{margin:"auto", width:"75vw", textAlign:"center"}} onSubmit={(event) => postPlaylist(event)}>
            <h1>Your New Playlist</h1>
            <Form.Group className="mb-3">
                <Form.Label>Playlist Name</Form.Label>
                <Form.Control type="text" placeholder="Playlist Name" value={playlistName} onChange={(event) => setPlaylistName(event.target.value)}></Form.Control>
                <Form.Text>C'mon, be creative!</Form.Text>
                <br></br><br></br>
                <Form.Label>Playlist Description</Form.Label>
                <Form.Control type="text" placeholder="Playlist Description" value={playlistDescription} onChange={(event) => setPlaylistDescription(event.target.value)}></Form.Control>
                <Form.Text>What's the vibe?</Form.Text>
            </Form.Group>
            <Button type="submit">Create Playlist!</Button>
        </Form>
    )
}

export default CreatePlaylist;