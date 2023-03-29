import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Homepage/Home";
import Playlists from "./components/Playlist-Page/Playlists";
import ArtistAlbumSearch from "./components/Search-Page/ArtistAlbumSearch";
import Search from "./components/Search-Page/Search";

const CLIENT_ID = "1ff422b13da04c47b1d3639000b11abb";
const CLIENT_SECRET = "403561469b9c409faa37c5f49d39c46e";

function App() {
  const [accessToken, setAccessToken] = useState("");

  const [allNewSongs, setAllNewSongs] = useState("");
  const [allLikedSongs, setAllLikedSongs] = useState("");
  const [allTopSongs, setAllTopSongs] = useState("");
// Fetch Access Token and set to state
  useEffect(() => {
      let authParameters = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: "grant_type=client_credentials&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET
      }
      fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(resp => resp.json())
      .then(data => setAccessToken(data.access_token))
    }, [])

    useEffect(() => {
      if (accessToken) {
        fetch('https://api.spotify.com/v1/playlists/37i9dQZEVXbNG2KDcFcKOF', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
          }
        })
        .then(response => response.json())
        .then(data => {
          const filteredSongs = data.tracks.items.filter((song) => song.track.preview_url != null)
          setAllTopSongs(filteredSongs)
        })
      } 
  }, [accessToken])
  
  useEffect(() => {
    if (accessToken) {
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
        setAllNewSongs(filteredSongs)
    })
  }
  }, [accessToken])

  useEffect(() => {
    fetch('http://localhost:8000/likes', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        }
    })
    .then(response => response.json())
    .then(likedSongs => {
        setAllLikedSongs(likedSongs)
    })
}, [])
    
    const handleLikedSong = (likedSong) => {
      setAllLikedSongs([...allLikedSongs, likedSong])
  }

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home 
            accessToken={accessToken} 
            allNewSongs={allNewSongs} 
            setAllNewSongs={setAllNewSongs} 
            allTopSongs={allTopSongs} 
            setAllTopSongs={setAllTopSongs} 
            allLikedSongs={allLikedSongs} 
            setAllLikedSongs={setAllLikedSongs} 
            handleLikedSong={handleLikedSong}
          />
        </Route>
        <Route path="/playlists">
          <Playlists 
            allLikedSongs={allLikedSongs}
            allTopSongs={allTopSongs}
            allNewSongs={allNewSongs}
            handleLikedSong={handleLikedSong}
            accessToken={accessToken}
          />
        </Route>
        <Route path="/search">
          <Search accessToken={accessToken} />
        </Route>
        <Route path="/artist-album-search">
          <ArtistAlbumSearch accessToken={accessToken} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
