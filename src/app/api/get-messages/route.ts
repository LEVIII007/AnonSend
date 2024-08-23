import { getServerSession} from "next-auth";

import { AuthOptions } from "next-auth";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user";
import {User} from  "next-auth";                          // this is not the user we stored in session before. it comes with session in next auth
import { authOptions } from "../auth/[...nextauth]/options";
import mongoose from "mongoose";

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

    const userId = new mongoose.Types.ObjectId(user.id);

    const {acceptMessages} = await request.json();

    try{
        const user = await UserModel.aggregate([              // pipeline to get the user and unwind the messages array
            {
                $match: { id: userId }
            },
            {
                $unwind: '$messages'
            },
            {
                $sort: { 'messages.createdAt': -1 }
            },
            {
                $group: {
                    _id : '$_id', messages : {$push : '$messages'}
                }
            }
        ]);
        if(!user || user.length === 0){
            return Response.json({
                success : false,
                message : "User not found "
            }, {status : 401});
        }
        else{
            return Response.json({
                success : true,
                messages : user[0].messages,                             // user[0] because we are getting the user in array
            }, {status : 200});
        }
}
    catch(err){
        console.log("failed to get messages");
        console.log(err);
        return Response.json({
            success : false,
            message : "failed to get messages",
        }, {status : 500});
    }
}