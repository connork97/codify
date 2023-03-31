import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div id="navBar" style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
            <Link to="/" exact="true"><h1 className="menuSpan">Home</h1></Link>
            <Link to="/playlists" exact="true"><h1 className="menuSpan">Playlists</h1></Link>
            <Link to="/search" exact="true"><h1 className="menuSpan">Search</h1></Link>
        </div>
    )
}

export default Navbar;