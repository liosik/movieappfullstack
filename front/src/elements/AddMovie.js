import React, {useRef} from 'react';

const AddMovie = ({user, setMovies}) => {

    const movieRef = useRef()

    async function addMovie() {
        const item = {

            userId: user.id,
            movieId: movieRef.current.value

        }

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(item)
        }


        const response = await fetch(`http://localhost:4000/addmovie`, options)
        const data = await response.json()
        if (data.success) {
            alert("Success! You've Added Movie")
            console.log(data.movies)
            setMovies(data.movies)
        } else {
            alert(data.errorMessage)
        }

    }

    return (
        <div>
            <input ref={movieRef} defaultValue="tt0241527" type="text"/>

            <button onClick={addMovie}>Add</button>
        </div>
    );
};

export default AddMovie;