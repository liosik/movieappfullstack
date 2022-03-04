import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";

const ShowMovie = ({movie}) => {

    const nav = useNavigate()

    const navigateToSingleMovie = () => {
        nav(`/singlemovie/${movie.movieId}`)
    }

    return (
        <div className="d-flex column space-a a-center border">
            <h3>Title:{movie.title}</h3>
            <h3>Year:{movie.year}</h3>
            <img onClick={navigateToSingleMovie} src={movie.poster} alt=""/>
            <h3>Rating:{movie.rating}</h3>
            <h3>Genre:{movie.genre}</h3>
            <h5>Added By:{movie.addedBy}</h5>

        </div>
    );
};

export default ShowMovie;