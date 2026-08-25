import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/authLayout"
import Input from "../../components/auth/authInput";
import Button from "../../components/common/button";
import SocialLogin from "../../components/auth/socialLogin";
import { signup } from "../../api/userApi";
import { emailRegex } from "../../utils/regex.utils";
import { nameRegex } from "../../utils/regex.utils";
import { passwordRegex } from "../../utils/regex.utils";

interface FormData {
  name: string;
  email: string;
  password: string;
  role: "STUDENT" | "INSTRUCTOR" | "NONE";
}

interface ErrorState {
  field?: string;
  message?: string;
}

const Signup = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState<FormData>(
      {
        name: "",
        email: "",
        password: "",
        role: "NONE"
      }
    )
    const [error, setError] = useState<ErrorState>({field: "", message: ""})
    const [loading, setLoading] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.target

      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));

      setError({});
    }

    const handleSubmit = async(e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault()

      if(formData.role === "NONE"){
        setError({field: "role", message: "Select the required role"})
        return;
      }

      if(!formData.name.trim()){
        setError({field: "name", message: "Name is required"})
        return
      }

      if(!nameRegex.test(formData.name)){
        setError({field: "name", message: "Enter valid name"})
        return
      }

      if(!emailRegex.test(formData.email)){
        setError({field: "email", message: "Enter a valid email"})
        return
      }
      
      if(!passwordRegex.digit.test(formData.password)){
        setError({field: "password", message: "Password must contain a number"})
        return
      }

      if(!passwordRegex.length.test(formData.password)){
        setError({field: "password", message: "Password must be at least 6 characters"})
        return
      }

      if(!passwordRegex.letter.test(formData.password)){
        setError({field: "password", message: "Password must contain a letter"})
        return
      }

      if(!passwordRegex.specialChar.test(formData.password)){
        setError({field: "password", message: "Password must contain a special character"})
        return
      }

      try {
        setLoading(true)

        const response = await signup({...formData})
        if(response.success){
          navigate("/login")
        }
      } catch (error) {
        console.error("Registration failed:", error);
      } finally {
        setLoading(false)
      }
    }

return (
  <AuthLayout
    title="Create Account"
    subtitle="Join Examix and begin your online examination journey."
    imagePosition="right"
  >
      <div className="mb-6 flex gap-4">
        <button 
        type="button"
        onClick={() => {
          setFormData((prev) => ({
            ...prev,
            role: "STUDENT",
          }));
          setError({});
        }}
        className={`px-6 py-2 rounded-full border transition-all duration-300
          ${formData.role === "STUDENT"
            ? "bg-green-500 text-black border-green-500"
            : "border-white/20 text-white hover:border-green-400"
        }`}>STUDENT</button>

        <button 
        type="button"
        onClick={() => {
          setFormData((prev) => ({
            ...prev,
            role: "INSTRUCTOR",
          }));

          setError({});
        }}
        className={`px-6 py-2 rounded-full border transition-all duration-300
          ${formData.role === "INSTRUCTOR"
            ? "bg-green-500 text-black border-green-500"
            : "border-white/20 text-white hover:border-green-400"
        }`}>INSTRUCTOR</button>
      </div>

      {error.field === "role" && (
        <p className="mb-4 text-sm text-red-500">
          {error.message}
        </p>
      )}

    <form onSubmit={handleSubmit}>
      <Input
        label="Full Name"
        type="text"
        name="name"
        placeholder="Enter your full name"
        value={formData.name}
        autocomplete="name"
        onChange={handleChange}
        error={error.field === "name"? error.message : ""}
      />

      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        autocomplete="email"
        onChange={handleChange}
        error={error.field === "email"? error.message : ""}
      />

      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="Create a password"
        value={formData.password}
        autocomplete="new-password"
        onChange={handleChange}
        error={error.field === "password"? error.message : ""}
      />

      <Button 
      text={loading? "Creating.." : "Create Account"} 
      className="w-full rounded-xl bg-green-500 py-3 font-semibold text-black transition-all duration-300 
        hover:scale-[1.02] hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/40"/>

      <div className="my-6 flex items-center">
        <div className="h-px flex-1 bg-white/10"></div>

        <span className="mx-4 text-sm text-gray-500">
          OR
        </span>

        <div className="h-px flex-1 bg-white/10"></div>
      </div>

      <SocialLogin />

      <p className="mt-8 text-center text-gray-400">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="cursor-pointer text-green-400 hover:text-green-300"
        >
          Login
        </span>
      </p>

    </form>
  </AuthLayout>
);
};

export default Signup;
