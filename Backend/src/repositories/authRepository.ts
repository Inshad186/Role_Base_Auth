import userModel from "../models/userModel";

const findOne = (email: string) => {
    return userModel.findOne({email})
}

const findById = (userId: string) => {
    return userModel.findById(userId)
}

const create = (data: any) => {
    return userModel.create(data)
}

const updatePassword = (userId: string, password: string) => {
    return userModel.findByIdAndUpdate(
        userId,
        {$set: {password}}
    )
}

export const authRepository = {
    findOne,
    findById,
    create,
    updatePassword
}