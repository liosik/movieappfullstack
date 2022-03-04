const validator = require("email-validator");
const {use} = require("express/lib/router");




module.exports = {
    validateRegister: (req, res, next) => {
        const {username, pw1, pw2} = req.body

        if(username.length < 4 && username.length > 20) return res.send({success: false, errorMessage: "USERNAME NOT VALID"})
        if(pw1.length < 4 && pw1.length > 20 && username[0].toUpperCase() !== username[0]) return res.send({success: false, errorMessage: "PASSWORD NOT VALID"})
        if(pw1 !== pw2) return res.send({success: false, errorMessage: "PASSWORDS DON'T MATCH"})
        next()
    },
    validateLogin: (req, res, next) => {
        const {username, pw1} = req.body
        if(username.length < 4 && username.length > 20) return res.send({success: false, errorMessage: "USERNAME NOT VALID"})
        if(pw1.length < 4 && pw1.length > 20 && username[0].toUpperCase() !== username[0]) return res.send({success: false, errorMessage: "PASSWORD NOT VALID"})
        next()
    },
    validateReview: (req, res, next) => {
        const{comment, rating, movieId} = req.body
        if(comment.length === 0) return res.send({success: false, errorMessage: "COMMENT NOT VALID"})
        if(rating === 0) return res.send({success: false, errorMessage: "RATING NOT VALID"})
        next()
    }
}
