import { Link } from "react-router-dom";
import { BsMusicNote } from "react-icons/bs"

function Header() {
    return (
        <div id="navBar" style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly", paddingTop:"10px", paddingBottom:"10px"}}>
            <span style={{display:"flex"}}><h1>Codify</h1><BsMusicNote style={{scale:"2", marginLeft:"15px", marginTop:"17.5px"}} /></span>
            <Link to="/" exact="true" className="navBarLink"><h1 className="menuSpan">Home</h1></Link>
            <Link to="/search" exact="true" className="navBarLink"><h1 className="menuSpan">Search</h1></Link>
            <Link to="/playlists" exact="true" className="navBarLink"><h1 className="menuSpan">Playlists</h1></Link>
        </div>
    )
}

export default Header;