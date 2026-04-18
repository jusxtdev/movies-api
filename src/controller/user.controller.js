import { prisma } from "../config/db.js"

const profile = async (req, res) => {
    const userId = req.userId
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true
        },
        include: {
            movies
        }
    })

    if (!user) {
        return res.status(404).json({
            error: "User not found"
        })
    }

    res.status(200).json({
        status: "success",
        data: user
    })
}

const stats = async (req, res) => { }

const userController = { profile, stats }

export default userController