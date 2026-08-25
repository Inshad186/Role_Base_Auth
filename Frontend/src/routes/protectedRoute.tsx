import React from 'react'
import { Navigate } from 'react-router-dom'
import type{ RootState } from '../redux/store'
import { useSelector } from 'react-redux'

type Props = {
    children: React.ReactNode
}

const ProtectedRoute = ({children} : Props) => {
    const token = useSelector((state: RootState) => state.auth?.accessToken)
    console.log("Protected Route Token : ",token)

    if(!token){
        return <Navigate to={"/login"} replace />
    }
    return <>{children}</>
}

export default ProtectedRoute
