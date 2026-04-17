import { z } from "zod"

const createItem = z.object({
    movieId: z.string(),
    status: z.enum(["PLANNED", "WATCHING", "COMPLETED", "DROPPED"]).optional(),
    rating: z.int().optional(),
    notes: z.string().optional()
})

const updateItem = createItem.partial()

const watchListSchema = { createItem, updateItem }

export default watchListSchema