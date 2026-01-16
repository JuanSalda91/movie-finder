// DEPENDENCIES and PORT //
require("dotenv").config();
const express = require("express");
const movieRoutes = require("./routes/movieRoutes");
const app = express();

const PORT = process.env.PORT || 3000;

// MIDDLEWARE //
app.use(express.json());

// MOVIE ROUTES //
app.use("/movies", movieRoutes);

// ROOT ROUTE TO TEST IF SERVER IS RUNNING //
app.get("/", (req, res) => {
    res.json({ message: "Movie Finder API is running!" });
});

// START SERVER //
app.listen(PORT, () => {
    console.log(`Server is runnirg on http://localhost:${PORT}`);
});