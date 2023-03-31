import { render } from "@testing-library/react";
import { useEffect, useState } from "react";

const TrackListItem = ({ track, artistName, accessToken }) => {
    
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

    const [allBackups, setAllBackups] = useState ([]);
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
            setAllBackups(data.tracks.items)
            filterBackups()
        })
    }, [])


    const filterBackups = () => {
        // console.log(track.)
        const backupObj = allBackups.find((backup) => backup.artists[0].name.toLowerCase() == artistName.toLowerCase())
        let verifiedBackupObj;
        if (backupObj !== undefined) {
            verifiedBackupObj = backupObj
            setBackupPreview(verifiedBackupObj.preview_url)
            setIsFetched(true)
        }
    }

    // useEffect(() => {
    //     if (isFetched) {
    //       return (
    //         <video controls name="media" style={{position:"absolute", right:"75px", height:"50px", width:"350px", alignItems:"center", justifyContent:"flex-end"}}>
    //           <source src={backupPreview} alt="no preview available" type="audio/mp3" />
    //         </video>
    //       )
    //     }
    //   }, [isFetched]);

    // const renderTrackAudio = () => {
    //     if (isFetched) {
    //         return (
    //             <video controls name="media" style={{position:"absolute", right:"75px", height:"50px", width:"350px", alignItems:"center", justifyContent:"flex-end"}}>
    //                 <source src={backupPreview} alt="no preview available" type="audio/mp3" />
    //             </video>
    //         )
    //     }
    // }

    useEffect(() => {
        renderSomething();
    }, [isFetched, backupPreview])

    const renderSomething = () => {
        return isFetched ?
            <video controls name="media" style={{position:"absolute", right:"75px", height:"50px", width:"350px", alignItems:"center", justifyContent:"flex-end"}}>
                <source src={backupPreview} alt="no preview available" type="audio/mp3" />
            </video>
            : null
    }
    

    return (
        <>
            {/* {isFetched ?
            <video controls name="media" style={{position:"absolute", right:"75px", height:"50px", width:"350px", alignItems:"center", justifyContent:"flex-end"}}>
                <source src={backupPreview} alt="no preview available" type="audio/mp3" />
            </video>
            : null
            } */}
            {renderSomething()}
        </>
    )
}

export default TrackListItem;