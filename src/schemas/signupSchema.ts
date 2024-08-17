import {z} from "zod";

export const usernameValidation = z
        .string()
        .min(2, "Username must be atleast 2 characters")
        .max(20, "Username must be less than 20 letters")
        .regex(/[a-zA-Z][a-zA-Z0-9-_]{3,32}/ , "Username must not contain special characters")


export const signUpSchema = z.object({
    username : usernameValidation,
    email : z.string().email({message : "invalid email address"}),
    password : z.string().min(6, {message : "password must be atleast 6 chars"}),
})

