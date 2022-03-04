const {v4: uuid} = require("uuid")
const IMDb = require('imdb-light');
let users = []
let movies = []


module.exports = {
    register: (req, res) => {
        const newUser = req.body
        newUser.id = uuid()
        users.push(newUser)
        res.send({success:true, users})

    },
    login: (req, res) => {

        const currentUser = users.find(x=> x.username === req.body.username)
        if(currentUser) return res.send({success:true, currentUser})
        else return res.send({success:false, errorMessage: "USER NOT FOUND"})


    },
    addMovie: (req, res) => {
        const {movieId} = req.body
        const currentUser = users.find(x=> x.id === req.body.userId)
        if(currentUser){
            IMDb.fetch(movieId, (details) => {

                const movie = {
                    poster: details.Poster,
                    title: details.Title,
                    year: details.Year,
                    rating: details.Rating,
                    genre: details.Genres,
                    director: details.Director,
                    addedBy: currentUser.username,
                    addedById: currentUser.id,
                    movieId: uuid(),
                    reviews: []
                }
                movies.push(movie)
                res.send({success: true, movies})
            })
        }else return res.send({success:false, errorMessage: "ERROR"})

    },

    addReview: (req, res) => {
        const {movieId, comment, rating} = req.body
        const movie = movies.find(x=> x.movieId === movieId)
        movie.reviews.push({comment, rating})
        res.send({success: true, movies})
    },
}