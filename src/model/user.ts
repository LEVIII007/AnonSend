import mongoose, {Schema, Document} from "mongoose";              // Document include the type of the document, type safety


export interface Message extends Document
{
    content : string;
    createdAt : Date;
}

const MessageSchema : Schema<Message> = new Schema                        // Schema is a blueprint of the document
({                                                                        // :Schema<Message> is used to specify the type of the document
    content : {type : String, required : true},
    createdAt : {type : Date, required : true, Default : Date.now}
});


export interface Analytics extends Document{
    positive_keywords : string[];
    negative_keywords : string[];
}

const AnalyticsSchema : Schema<Analytics> = new Schema({
    positive_keywords : {type : [String], Default : []},
    negative_keywords : {type : [String], Default : []},
});


export interface Project extends Document{
    name : string;
    description : string;
    messages : Message[];
    analytics : Analytics;
}

const ProjectSchema : Schema<Project> = new Schema({
    name : {type : String, required : true},
    description : {type : String, required : true},
    messages : [MessageSchema],
    analytics : {type : AnalyticsSchema, Default : {}}
});


export interface User extends Document{
    username : string;
    email : string;
    password : string;
    verifyCode : string;
    verifyCodeExpiry : Date;
    isVerified : boolean;
    isAcceptingMessages : boolean;
    // messages : Message[];
    projects : Project[];
}


const UserSchema : Schema<User> = new Schema({
    username : {type : String, required : [true, "Username is required"], trim : true, unique : true},
    email : {type : String, required : true, unique : true, match : [/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/ , 'please use a valid email']},
    password : {type : String, required : [true, "password is required"]},
    verifyCode : {type : String, required : [true, "verify code is required"]},
    isVerified : {type : Boolean, Default : false},
    verifyCodeExpiry : {type : Date, required : [true, "verification code is required"]},
    isAcceptingMessages : {type : Boolean, required : true, Default : true},
    messages : [MessageSchema]
});


const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User", UserSchema))       // <User> is used in TS for typecasting. 


export default UserModel;




