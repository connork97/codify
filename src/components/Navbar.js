import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div id="navBar" style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <Link to="/" exact><h1 className="menuSpan">Home</h1></Link>
            <Link to="/playlists" exact><h1 className="menuSpan">Playlists</h1></Link>
            <Link to="/artist-album-search" exact><h1 className="menuSpan">Search Albums</h1></Link>
        </div>
    )
}

export default Navbar;