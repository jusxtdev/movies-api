import { z } from "zod"

const createItem = z.object({
    status: z.enum(["PLANNED", "WATCHING", "COMPLETED", "DROPPED"]).optional(),
    rating: z.int().optional(),
    notes: z.string().optional()
})

const updateItem = createItem

const watchListSchema = { createItem, updateItem }

export default watchListSchema