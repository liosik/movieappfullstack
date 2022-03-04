import React from 'react';
import ShowMovie from "./ShowMovie";

const ShowMovies = ({movies}) => {
    return (
        <div>
            {movies && movies.map((x,i)=> <ShowMovie movie={x} key={i
            }/>)}
        </div>
    );
};

export default ShowMovies;