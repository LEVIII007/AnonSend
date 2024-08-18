import {z} from 'zod';
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/user';
import { usernameValidation } from '@/schemas/signupSchema';

const UsernameQuerySchema = z.object({                  // coming username should meet username validation schema conditions
    username : usernameValidation
})

export async function GET(request : Request){
    await dbConnect();
    // localhost:3000/api/cuu?username=abc?phone=1234567890

    try{
        
    }
    catch(err){
        console.log("error checking username uniqueness");
        console.log(err);
        return Response.json({
            success : false,
            message : "Error checking username uniqueness",
        }, {status : 500});
    }
}



