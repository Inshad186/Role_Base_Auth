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

export const authRepository = {
    findOne,
    findById,
    create
}