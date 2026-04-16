import { z } from "zod";

const createMovie = z.object({
    title: z.string(),
    overview: z.string().optional(),
    releaseYear: z.int(),
    genres: z.array(z.string()).optional(),
    runtime: z.int().optional(),
    posterURL: z.string().optional(),
})

const updateMovie = createMovie.partial()
const MovieSchema = {
    createMovie,
    updateMovie
}

export default MovieSchema