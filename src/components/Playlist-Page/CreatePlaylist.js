import { Card, Form, Button } from "react-bootstrap"

const CreatePlaylist = () => {
    return (
        <Form style={{margin:"auto", width:"75vw", textAlign:"center"}}>
            <h1>Your New Playlist</h1>
            <Form.Group className="mb-3">
                <Form.Label>Playlist Name</Form.Label>
                <Form.Control type="text" placeholder="Playlist Name"></Form.Control>
                <Form.Text>C'mon, be creative!</Form.Text>
                <br></br><br></br>
                <Form.Label>Playlist Description</Form.Label>
                <Form.Control type="text" placeholder="Playlist Description"></Form.Control>
                <Form.Text>What's the vibe?</Form.Text>
            </Form.Group>
            <Button type="submit">Create Playlist!</Button>
        </Form>
    )
}

export default CreatePlaylist;