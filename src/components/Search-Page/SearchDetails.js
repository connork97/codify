import { useParams, useLocation } from "react-router-dom";

const SearchDetails = ( ) => {

    const location = useLocation();
    const id = location.state.id;
    console.log(id)
    const { category } = useParams();

    return (
        <div>
            <h1>{category}</h1>
        </div>
    )
}

export default SearchDetails;