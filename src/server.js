import express from "express"
import rootRouter from "./routes/root.router.js"

const app = express()

const PORT = 5001

app.get('/', (req, res) => {
    res.json({ msg: "123" })
})

app.use('/api', rootRouter)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})