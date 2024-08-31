import dbConnect from "@/lib/dbConnect";
import User from "@/model/user";

import bcryptjs from "bcryptjs";  
import { sendVerificationEmail} from "@/helpers/sendVerificationEmail";
import { NextRequest } from "next/server";
import UserModel from "@/model/user";

export async function POST(request : Request){
    await dbConnect();
    try{
        const {username, email, password} = await request.json();
        const verifiedUser = await UserModel.findOne({username, isVerified : true});
        const verifyCode = Math.random().toString(36).slice(2);
        if(verifiedUser)                                                               // another user exists and is verified already
        {
            console.log("Username already exists");
            return Response.json("Username already exists", {status : 400});
        }
        const existingUserByemail = await UserModel.findOne({email});
        if(existingUserByemail)                                                        // same email user exist
        {
           if(existingUserByemail.isVerified)                                            // used is already verified
           {
                console.log("Email already exists");
               return Response.json("Email already exists", {status : 400});
           }
              else                                                                          // user exist but is not verified so let's verify him, but change the new password, expiry and code
              {
                const hashedPassword = await bcryptjs.hash(password, 12);
                const verifyCodeExpiry = new Date(Date.now() + 60 * 60 * 1000*24);
                
        }
    }
    else{                                                                                           // first time user registering
        const hashedPassword = await bcryptjs.hash(password, 12);
        const verifyCodeExpiry = new Date(Date.now() + 60 * 60 * 1000*24);
        const newUser = new UserModel({
            username,
            email,
            password : hashedPassword,
            verifyCode,
            verifyCodeExpiry,
            isVerified : false,
            isAcceptingMessages : true,
            messages : []
        });
        await newUser.save();
    }
        const emailResponse = await sendVerificationEmail(email, username, verifyCode);
        if(emailResponse.success)
        {
            return Response.json({message : "Verified successfuly!"}, {status : 200});
        }
        else
        {
            return Response.json({message : emailResponse.message}, {status : 500});
        }
}
catch(err)
{
    console.log(err);
    return Response.json("Error registering user", {status : 500});
}

}