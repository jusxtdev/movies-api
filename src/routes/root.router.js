import express from "express"
import movieRouter from "./movie.router.js"
import authRouter from "./auth.router.js"
const rootRouter = express.Router()

rootRouter.get('/', (req, res) => {
	res.json({ msg: 'API root' })
})

rootRouter.use('/auth', authRouter)
rootRouter.use('/movies', movieRouter)

export default rootRouter