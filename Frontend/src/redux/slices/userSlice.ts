import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
    _id: string;
    name: string;
    email: string;
    role: "STUDENT" | "INSTRUCTOR" | ""
}

const initialState:User = {
    _id: "",
    name: "",
    email: "",
    role: ""
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser : (state, action: PayloadAction<User>) => {
            return {...state, ...action.payload}
        },
        removeUser: () => {
            return initialState
        }
    }
})

export const {setUser, removeUser} = userSlice.actions
export default userSlice.reducer