import { prisma } from "../config/db.js";
import bcrypt from "bcrypt"
import { generateToken } from "../utils/generateToken.js";

export const signUp = async (req, res) => {
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

export const signIn = async (req, res) => { }

export const logOut = async (req, res) => { }