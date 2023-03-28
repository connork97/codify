import TopCharts from "./TopCharts"
import LikedSongs from "./LikedSongs";
import NewSongs from "./NewSongs";


function Home({ accessToken }) {
    return (
        <>
            <TopCharts accessToken={accessToken} />
            <LikedSongs accessToken={accessToken} />
            <NewSongs accessToken={accessToken} />
        </>
    )
}

export default Home;