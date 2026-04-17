import { prisma } from "../config/db.js"


const getMovies = async (req, res) => {
    const allMovies = await prisma.movie.findMany()
    res
        .status(200)
        .json({
            status: "success",
            data: allMovies
        })
}

const addMovie = async (req, res) => {
    const newMovieData = req.body
    const newMovie = await prisma.movie.create({
        data: newMovieData
    })

    res.status(201).json({
        status: "success",
        data: {
            movie: newMovie
        }
    })
}
const updateMovie = async (req, res) => { }
const deleteMovie = async (req, res) => { }

const movieController = {
    getMovies, addMovie, updateMovie, deleteMovie
}

export default movieController