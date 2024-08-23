import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user";


export async function POST(request : Request){
    dbConnect();
            const { username, code} = await request.json();
            const decodedUsername = decodeURIComponent(username);                             // not really necessary
            const user = await UserModel.findOne({username : decodedUsername});

            if(!user){
                return Response.json({
                    success : false,
                    message : "User not found"
                }, {status : 404});
            }
            const isCodeValid = await user.verifyCode == code;
            const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date();
            if(isCodeValid && isCodeNotExpired){
                user.isVerified = true;
                await user.save();
                return Response.json({
                    success : true,
                    message : "Account verified successfully"
                }, {status : 200});
            }
            else if(isCodeValid && !isCodeNotExpired){
                // user.verifyCodeExpiry = Date() + 1000*60*60*24;
                // await user.save();
                return Response.json({
                    success : false,
                    message : "Code expired. please sign-up again to get new code"
                }, {status : 400});
            }
            else if(!isCodeValid){

                return Response.json({
                    success : false,
                    message : "Invalid code"
                }, {status : 400});
            }

    try {

    }
    catch(err){
        console.log("error verifying code");
        console.log(err);
        return Response.json({
            success : false,
            message : "Error verifying code",
        }, {status : 500});
    }
}