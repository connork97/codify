import { useParams, useLocation } from "react-router-dom";

const SearchDetails = ( ) => {

    const location = useLocation();
    console.log(location.state)
    const { category } = useParams();

    return (
        <div>
            <h1>{category}</h1>
        </div>
    )
}

export default SearchDetails;