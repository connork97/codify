
function Navbar() {
    return (
        <div id="navBar" style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <h1>
                <span className="menuSpan">Home</span> | 
                <span className="menuSpan">New Playlist</span>
            </h1>
        </div>
    )
}

export default Navbar;