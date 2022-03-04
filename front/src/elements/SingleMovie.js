import React, {useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import ShowRating from "./ShowRating";
import {Rating} from "@mui/material";

const SingleMovie = ({movies, setMovies}) => {
    const params = useParams()

    const [rating, setRating] = useState(0)

    const changeRating = (event, newValue) => {
        setRating(newValue)
    }
    const movie = movies.find(x=> x.movieId === params.id )
    const commentRef = useRef()

    async function addReview() {
        const item = {

            comment: commentRef.current.value,
            rating: rating,
            movieId: movie.movieId

        }

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(item)
        }


        const response = await fetch(`http://localhost:4000/addreview`, options)
        const data = await response.json()
        if (data.success) {
            alert("Success! You've Reviewed Movie")
            console.log(data.movies)
            setMovies(data.movies)
        } else {
            alert(data.errorMessage)
        }

    }



    return (
        <div>
            <div className="d-flex column space-a a-center border">
                <h3>Title:{movie.title}</h3>
                <h3>Year:{movie.year}</h3>
                <img src={movie.poster} alt=""/>
                <h3>Rating:{movie.rating}</h3>
                <h3>Genre:{movie.genre}</h3>
                <h5>Added By:{movie.addedBy}</h5>

            </div>
            <div>

            </div>
            <div>
                <input ref={commentRef} defaultValue="Best Movie" type="text"/>
                <Rating
                    name="size-large"
                    onChange={changeRating}
                    value={rating}
                />
                <button onClick={addReview}>Add Review</button>
            </div>
            <div className='d-flex center a-center column m-20'>
                {movie.reviews.map((x,i) => {
                    return(
                        <div key={i} className='m-20 review d-flex center a-center'>
                            <ShowRating key={i} getAverage={Number(x.rating)}/><h3>{x.comment}</h3>

                        </div>

                    )
                })}
            </div>
        </div>

    );
};

export default SingleMovie;