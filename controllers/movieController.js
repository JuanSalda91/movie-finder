// IMPORT EXPRESS ROUTER //
const express = require('express');
const router = express.Router();

// IMPORT CONTROLLER FUNCTIONS //
const { searchMovies, getMovieDetails } = require("../controllers/movieController.js");

// DEFINE MOVIE ROUTES //
// GET /api/movies/search?title=movieTitle
router.get("/search", searchMovies);

// GET /api/movies/:id
router.get("/movies/:id", getMovieDetails);

// EXPORT ROUTER //
module.exports = router;