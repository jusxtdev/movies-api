import express from "express"
import movieRouter from "./movie.router.js"
import authRouter from "./auth.router.js"
import watchListRouter from "./watchList.router.js"
import userRouter from "./user.router.js"


const rootRouter = express.Router()

rootRouter.get('/', (req, res) => {
	res.json({ msg: 'API root' })
})

rootRouter.use('/auth', authRouter)
rootRouter.use('/movies', movieRouter)
rootRouter.use('/watchlist', watchListRouter)
rootRouter.use('/user', userRouter)

export default rootRouter