import express from "express"

import authMiddleware from "../middleware/auth.middleware.js"
import watchListController from "../controller/watchList.controller.js"
import watchListSchema from "../schemas/watchList.schema.js"
import validate from "../middleware/validate.middleware.js"

const router = express.Router()

router.use(authMiddleware)

router.get('/', watchListController.getList)

router.get('/:id', watchListController.getItem)

router.post('/', validate(watchListSchema.createItem), watchListController.addItem)

router.put('/:id', validate(watchListSchema.updateItem), watchListController.updateItem)

router.delete('/:id', watchListController.deleteItem)

export default router