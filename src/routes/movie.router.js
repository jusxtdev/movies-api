import express from "express"

import validate from "../middleware/validate.middleware.js"
import MovieSchema from "../schemas/movie.schema.js"
import movieController from "../controller/movie.controller.js"

const router = express.Router()

router.get('/', movieController.getMovies)

router.post('/', validate(MovieSchema.createMovie), movieController.addMovie)

router.put('/:id', validate(MovieSchema.updateMovie), movieController.updateMovie)

router.delete('/:id', movieController.deleteMovie)

export default router