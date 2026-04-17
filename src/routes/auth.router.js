import express from "express"
import authController from "../controller/auth.controller.js"
import validate from "../middleware/validate.middleware.js"
import UserSchema from "../schemas/user.schema.js"
import { authMiddleware } from "../middleware/auth.middleware.js"

const router = express.Router()

router.post('/signup', validate(UserSchema.signUpUser), authController.signUp)

router.post('/signin', validate(UserSchema.signInUser), authController.signIn)

router.post('/logout', authMiddleware, authController.logOut)

export default router