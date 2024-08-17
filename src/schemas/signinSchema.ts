import {z} from "zod";



export const signinSchema = z.object({
    identifier : z.string(),
    password : z.string().min(6, {message : "password must be atleast 6 chars"})
})