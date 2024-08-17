import mongoose from "mongoose";


type ConnectionObject = {
    isConnected? : number;
}


const connection : ConnectionObject = {};

async function dbConnect() : Promise<void>
{
    try{
    if(connection.isConnected)                                 // to prevent db chocking. If already connected, then return
    {
        console.log("Already connected to the database");
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI || "", {});
    connection.isConnected = db.connections[0].readyState;                    
    console.log("Connected to the database");
}
catch(err)
{
    console.log("Database connection failed");
    console.log(err);
    process.exit(1);
}
}


export default dbConnect;