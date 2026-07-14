import mongoose, {Schema, Document} from "mongoose";

interface IUser extends Document {
    name: string,
    email: string,
    password: string,
    role: "CLIENT" | "FREELANCER" | "NONE"
    isBlocked: boolean
}

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role:{
        type: String,
        enum: ["CLIENT", "FREELANCER", 'NONE'],
        default: 'NONE'
    },
    isBlocked: {
        type: Boolean
    }
})

export default mongoose.model<IUser>("User", userSchema)