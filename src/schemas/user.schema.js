import { z } from "zod"

const signUpUser = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string()
})

const signInUser = z.object({
    email: z.string().email(),
    password: z.string()
})

const UserSchema = {signUpUser, signInUser}
export default UserSchema