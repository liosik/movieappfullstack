import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./App.css"
import RegisterUser from "./elements/RegisterUser";
import ShowMovies from "./elements/ShowMovies";
import LoginUser from "./elements/LoginUser";
import AddMovie from "./elements/AddMovie";
import SingleMovie from "./elements/SingleMovie";

const App = () => {
    const [user, setUser] = useState(null)
    const [movies, setMovies] = useState([])

    useEffect(() => {
    }, [user])

    return (
        <div className='container'>
            <Router>
                <div className='d-flex space-e a-center'>
                    {user && <h5>User: {user.username}</h5>}
                    <Link to='/'>
                        <button>Show Movies</button>
                    </Link>
                    <Link to='/addmovie'>
                        <button>Add Movie</button>
                    </Link>

                    <Link to='/register'>
                        <button>Register</button>
                    </Link>
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>


                </div>
                <Routes>
                    <Route path="/" element={<ShowMovies movies={movies}/>}/>
                    <Route path="/register" element={<RegisterUser/>}/>
                    <Route path="/addmovie" element={<AddMovie setMovies={setMovies} user={user}/>}/>
                    <Route path="/singlemovie/:id" element={<SingleMovie setMovies={setMovies} movies={movies}/>}/>
                    <Route path="/login" element={<LoginUser setUser={setUser} user={user}/>}/>
                </Routes>
            </Router>
        </div>
    );
};

export default App;