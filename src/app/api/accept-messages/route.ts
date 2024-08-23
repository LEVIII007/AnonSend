import { getServerSession} from "next-auth";

import { AuthOptions } from "next-auth";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user";
import {User} from  "next-auth";                          // this is not the user we stored in session before. it comes with session in next auth
import { authOptions } from "../auth/[...nextauth]/options";

export async function POST(request : Request){
    dbConnect();
    const session = await getServerSession(authOptions);

    const user : User = session?.user;                          //  : User is asseriting the type of session.user to User type

    if(!session || !session.user){
        return Response.json({
            success : false,
            message : "not authenticated"
        }, {status : 401});
    }

    const userId = user.id;
    const {acceptMessages} = await request.json();

    try{
        const updatedUser = await UserModel.findOneAndUpdate({_id : userId}, {acceptMessages : acceptMessages}, {new : true});           // new = true will return the updated user
        if(!updatedUser){
            return Response.json({
                success : false,
                message : "failed to update user status to accept messages"
            }, {status : 401});
        }
        else{
            return Response.json({
                success : true,
                message : "User status updated successfully",
                user : updatedUser
            }, {status : 200});
        }
    }
    catch(err){
        console.log("failed to update user status to accept messages");
        console.log(err);
        return Response.json({
            success : false,
            message : "failed to update user status to accept messages",
        }, {status : 500});
    }
}


export async function GET(request : Request){
    dbConnect();

    const session = await getServerSession(authOptions);
    const user : User = session?.user;
    try{
    if(!session || !session.user){
        return Response.json({
            success : false,
            message : "not authenticated"
        }, {status : 401});
    }

    const userId = user.id;

    const userfromdb = await UserModel.findOne({_id : userId});
    if(!userfromdb){
        return Response.json({
            success : false,
            message : "User not found or not accepting messages"
        }, {status : 404});
    }

    if(userfromdb.isAcceptingMessages){
        return Response.json({
            success : true,
            message : "User is accepting messages",
            user : userfromdb
        }, {status : 200});
    }

}
catch(err){
    console.log("error getting user status to accept messages");
    console.log(err);
    return Response.json({
        success : false,
        message : "Error getting user status to accept messages",
    }, {status : 500});
}

}