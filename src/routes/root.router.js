import express from "express"
import movieRouter from "./movie.router.js"

const rootRouter = express.Router()

rootRouter.get('/', (req, res) => {
	res.json({ msg: 'API root' })
})

rootRouter.use('/movies', movieRouter)

export default rootRouter