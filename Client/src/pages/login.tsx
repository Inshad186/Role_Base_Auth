import React, { useState } from "react"
import Button from "../components/button"
import { home, login } from "../api/userApi"
import { useNavigate } from "react-router-dom"

interface LoginForm {
    email: string,
    password: string
}

interface ErrorState {
    field?: string,
    message?: string
}

const Login = () => {

    const[formData, setFormData] = useState<LoginForm>({email: "", password: ""})
    const[error, setError] = useState<ErrorState>({})

    const navigate = useNavigate()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name,  value} = event.target
        setFormData(prev => ({
            ...prev,
            [name] : value
        }))
        if(name === "email"){
            if(value.trim() === ""){
                setError({field: "email", message: "Enter a valid email"})
            }else{
                setError({})
            }
        }
        if(name === "password"){
            if(value.trim() === ""){
                setError({
                    field: "password",
                    message: "Enter a valid password"
                })
            }else{
                setError({})
            }
        }
    }

    const handleSubmit = async(e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault()
        try {
            const response = await login(formData)
            console.log("Responsse >>>>>>>>>>>>>>>> :",response)
            if(response.success){
                localStorage.setItem("accessToken", response.data.accessToken)
                if(response.data?.role === "CLIENT"){
                    navigate("/clientHome")
                }else if(response.data?.role === "FREELANCER"){
                    navigate("/freelancerHome")
                }
            }
        } catch (error) {
            console.log(error);
            setError({ field: "form", message: "Invalid email or password" });
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="bg-slate-300 w-full max-w-md rounded-md p-4">
            <h1 className="text-2xl text-blue-500 font-normal text-center">Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-md"
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                    name="password"
                    type="password" 
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border rounded-md"
                    />
                </div>
                <div className="text-center">
                    <Button
                    type="submit"
                    text="Submit"
                    className="rounded-full bg-white px-6 py-2 font-normal text-blue-500 mt-2"
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
