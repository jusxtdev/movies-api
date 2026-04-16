import express from "express"

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ msg: "All movies" })
})

router.post('/', (req, res) => {
    res.json({msg : "Add movie"})
})

router.put('/:id', (req, res) => {
    const movie_id = req.params.id
    res.json({msg : `Update movie with id ${movie_id}`})
})

router.delete('/:id', (req, res) => {
    const movie_id = req.params.id
    res.json({msg : `Delete movie with id ${movie_id}`})
})

export default router