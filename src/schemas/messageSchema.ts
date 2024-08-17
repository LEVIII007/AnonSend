import {z} from "zod";



export const acceptMessageSchema = z.object({
    content : z.string().min(10, {message : "Message must be atleast 10 character"})
                .max(300, {message : "Message must be less than 300 characters"})
})