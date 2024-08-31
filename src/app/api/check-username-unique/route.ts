import {z} from 'zod';
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/user';
import { usernameValidation } from '@/schemas/signupSchema';

const UsernameQuerySchema = z.object({                  // coming username should meet username validation schema conditions
    username : usernameValidation
})

export async function GET(request : Request){
    await dbConnect();

    // if(request.method !== 'GET'){               // not required for next.js new versions
    //     return Response.json({
    //         success : false,
    //         message : "Invalid method, only GET method is allowed"
    //     }, {status : 405});
    // }

    // localhost:3000/api/cuu?username=abc?phone=1234567890
    try{
        const { searchParams } = new URL(request.url);                               // simple way in next.js to get query parameters
        const queryParam = {
            username :  searchParams.get('username');
                            // parse the query parameters
                               }
    const result = UsernameQuerySchema.safeParse(queryParam);
                      // validating the query parameters
    if(!result.success){
        const usernameErrors = result.error.format().username?._errors || [];
        return Response.json({
            success : false,
            message : usernameErrors?.length > 0 ?  usernameErrors.join(", ") : "Invalid username"
        }, {status : 400});
    }

    UserModel.findOne({username : queryParam.username, isVerified : true}).then((user) => {              // check if the username already exists and is verified.
        if(user){
            return Response.json({
                success : false,
                message : "Username already exists"
            }, {status : 400});
        }
        return Response.json({
            success : true,
            message : "Username is unique"
        }, {status : 200});
    });
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
