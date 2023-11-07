
const mongoose = require("mongoose")
const dotenv = require("dotenv")


const MONGODB_URL = "mongodb://localhost:27017/tracking-habits"

dotenv.config()
 
const DB = async()=>{
    try {
        const con = await mongoose.connect(MONGODB_URL)
        console.log(`mongodb connected: ${con.connection.host}`)
    } catch (error) {
         console.error(error);
    }


}
module.exports = DB ;
