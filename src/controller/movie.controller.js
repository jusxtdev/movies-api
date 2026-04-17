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

const getMovieById = async (req, res) => {
    const movieId = req.params.id
    const requestedMovie = await prisma.movie.findFirst({
        where: {
            id: movieId
        }
    })

    if (!requestedMovie) {
        res.status(404).json({
            status: "failure",
            error: "Movie not found"
        })
    }

    res.status(200).json({
        status: "success",
        data: requestedMovie
    })
}

const addMovie = async (req, res) => {
    const newMovieData = req.body

    const userId = req.userId
    newMovieData.createdBy = userId
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

const updateMovie = async (req, res) => {
    const movieId = req.params.id
    const updateData = req.body

    const movieExists = await prisma.movie.findUnique({
        where: {
            id: movieId
        }
    })
    if (!movieExists) {
        return res.status(404).json({
            error: "Movie Not found"
        })
    }

    const updatedMovie = await prisma.movie.update({
        where: {
            id: movieId
        },
        data: updateData
    })
    res.status(200).json({
        status: "success",
        data: updatedMovie
    })

}

const deleteMovie = async (req, res) => {
    const movieId = req.params.id

    const movieExists = await prisma.movie.findUnique({
        where: {
            id: movieId
        }
    })
    if (!movieExists) {
        return res.status(404).json({
            error: "Movie Not found"
        })
    }

    const deletedMovie = await prisma.movie.delete({
        where: {
            id: movieId
        }
    })
    res.status(200).json({
        status: "success",
        data: deletedMovie
    })

}

const movieController = {
    getMovies, getMovieById, addMovie, updateMovie, deleteMovie
}

export default movieController