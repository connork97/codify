# Phase-2-React-Group-Project

Component Tree:

App
    Navbar
    Home
        LikedSongs (Preview)
        TopSongs (Preview)
        NewSongs (Preview)
    Playlists
        LikedSongs (Full)
            LikedSongCard
        TopSongs (Full)
            SongCard
        NewSongs (Full)
            SongCard
    Search
        ArtistSearch
        SongSearch
        AlbumSearch

Client Side Routing: 
- When button is clicked, display all likes, all top songs, and all new songs with detail and ability to play songs
- When search bar is used, render new page with Albums

Stretch Goals:
- When album is clicked, display a new page with songs from the album with song detail and ability to play songs
- On homepage, create a scroll feature to see more than 5 songs

Tasks for 3/30:

Fix Bugs:
    1 - When Searching for Songs, if you redo the search it keeps the data from the original search.  Make that update upon new search.
    2 - Some songs have a preview_url on the song itself, but not when in an album/playlist.  Create a secondary fetch request upon failed preview_url fetch that looks for said preview_url by song ID before displaying "preview not available" on page

Other Tasks:
    1 - Create a form for website (ideally a create a playlist form, but at least a "request a song" form for songs with no preview_url)


    // const fetchPreviewUrl = async (trackName) => {
    //     let backupPreview;
    //     const response = await fetch('https://api.spotify.com/v1/search?q=' + trackName + '&type=track', {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": "Bearer " + accessToken
    //         }
    //     })
    //     const data = await response.json()
    //     backupPreview = data.tracks.items[0].preview_url;
    //     console.log(backupPreview);
    //     return backupPreview;
    // }


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