import { render } from "@testing-library/react";
import { useEffect, useState } from "react";

const TrackListItem = ({ track, artistName, accessToken }) => {
    
    // const [allBackups, setAllBackups] = useState ([]);
    const [backupPreview, setBackupPreview] = useState("");
    const [isFetched, setIsFetched] = useState(false);

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

    return (
        <>
            {isFetched ?
            <video controls name="media" style={{position:"absolute", right:"75px", height:"50px", width:"350px", alignItems:"center", justifyContent:"flex-end"}}>
                <source src={backupPreview} alt="no preview available" type="audio/mp3" />
            </video>
            : <span style={{position:"absolute", right:"75px", width:"350px", alignItems:"center", justifyContent:"flex-end"}}>Preview Not Available</span>}
        </>
    )
}

export default TrackListItem;