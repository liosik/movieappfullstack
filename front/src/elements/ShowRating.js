import {Rating} from "@mui/material";

function ShowRecipeRating({getAverage}) {
    return (
        <div className="App">
            <div>
                {getAverage !== 0 && <Rating name="read-only" value={Number(getAverage)} precision={0.1} readOnly/>}


            </div>

        </div>
    );
}

export default ShowRecipeRating;