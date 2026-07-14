import userModel from "../models/userModel";

export const findOne = (email: string) => {
    return userModel.findOne({email})
}

export const findById = (userId: string) => {
    return userModel.findById(userId)
}