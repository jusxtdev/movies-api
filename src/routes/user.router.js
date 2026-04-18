import expresss from "express"  
import userController from "../controller/user.controller"
import authMiddleware from "../middleware/auth.middleware"

const router = expresss.Router()

router.use(authMiddleware)

router.get('/profile', userController.profile)

router.get('/stats', userController.stats)

export default router