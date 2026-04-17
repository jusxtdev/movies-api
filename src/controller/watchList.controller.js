import { prisma } from "../config/db.js"


const getList = async (req, res) => {
    const data = await prisma.watchListItem.findMany()
    res.status(200).json({
        status : "success",
        data : data 
    })
}

const getItem = async (req, res) => {
    const itemId = req.params.id

    const item = await prisma.watchListItem.findUnique({
        where : {
            id : itemId
        }
    })
    if (!item){
        return res.status(404).json({
            error : "Watchlist Item not found"
        })
    }

    res.status(200).json({
        status : "success",
        data : item
    })
}

const addItem = async (req, res) => {
    const data = req.body
    const userId = req.userId

    data.userId = userId
    const newItem = await prisma.watchListItem.create({
        data: data
    })

    res.status(201).json({
        status: "success",
        data: newItem
    })
}

const updateItem = async (req, res) => {
    const itemId = req.params.id
    const updateData = req.body

    const itemExists = await prisma.watchListItem.findUnique({
        where: {
            id: itemId
        }
    })
    if (!itemExists) {
        return res.status(404).json({
            error: 'Item Not found'
        })
    }

    const updatedItem = await prisma.watchListItem.update({
        where: { id: itemId },
        data: updateData
    })
    res.status(200).json({
        status: "success",
        data: updatedItem
    })
}

const deleteItem = async (req, res) => {
    const itemId = req.params.id
    const itemExists = await prisma.watchListItem.findUnique({
        where: {
            id: itemId
        }
    })
    if (!itemExists) {
        return res.status(404).json({
            error: 'Item Not found'
        })
    }

    const deletedItem = await prisma.watchListItem.delete({
        where : {
            id : itemId
        }
    })
    res.status(200).json({
        status : "success",
        data : deletedItem
    })
}

const watchListController = {
    getList, getItem, addItem, updateItem, deleteItem
}

export default watchListController