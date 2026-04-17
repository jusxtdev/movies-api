import { prisma } from "../config/db.js";
import bcrypt from "bcrypt"
import { generateToken } from "../utils/generateToken.js";

const signUp = async (req, res) => {
    const { name, email, password } = req.body;

    // find user by email
    const userExists = await prisma.user.findUnique({
        where: { email: email }
    })
    // user already exists
    if (userExists) {
        return res
            .status(400)
            .json({ error: 'User Already Exists' })
    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt)

    // create new user
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashPassword
        }
    });

    // generate token
    const token = generateToken(user.id, res)

    res.status(201).json({
        status: "success",
        data: {
            user: {
                id: user.id,
                name: name,
                email: email,
            },
            token,
        },
    });

}

const signIn = async (req, res) => {
    const { email, password } = req.body

    // check if user exists
    const userExists = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (!userExists) {
        return res
            .status(400)
            .json({ error: 'Invalid Email or password' })
    }

    // validate password
    const isValidPassword = await bcrypt.compare(password, userExists.password)
    if (!isValidPassword) {
        return res
            .status(400)
            .json({ error: "Incorrect password" })
    }

    // generate token
    const token = generateToken(userExists.id, res)

    // respond
    res.status(200).json({
        status: "success",
        data: {
            user: {
                id: userExists.id,
                email: userExists.email
            },
            token
        }
    })
}

const logOut = async (req, res) => {
    res.cookie("jwt", {
        httpOnly: true,
        expires: new Date(0),
    })
    res.status(200).json({
        status: "success",
        msg: "Logged out successfully"
    })
}

const authController = {
    signUp, signIn, logOut
}

export default authController