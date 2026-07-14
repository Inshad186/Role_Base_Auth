import mongoose from "mongoose";

const connetDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL!)
        console.log("MongoDB is Connected")
    } catch (error) {
        console.log(error)
    }
}
export default connetDB;