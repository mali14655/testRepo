import mongoose from "mongoose"

const connectToMongoDB=async(url)=>{
    try{
        const connection = await mongoose.connect(url);
        console.log("Connected To MongoDB");
        return connection;
    }
    catch(err){
        console.log(err);
        // throw err;
    }

}
export {connectToMongoDB};