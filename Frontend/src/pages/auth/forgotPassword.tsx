import React, { useState } from 'react'
import Input from '../../components/auth/authInput'
import { emailRegex } from '../../utils/regex.utils';
import { forgotPassword } from '../../api/userApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface ErrorState {
    field?: string;
    message?: string;
}

const ForgotPassword = () => {

    const [email, setEmail] = useState("")
    const [error, setError] = useState<ErrorState>({field: "", message: ""})
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setEmail(value);
        setError({});
    }

    const handleSubmit = async(e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!emailRegex.test(email)){
            setError({field: "email", message: "Enter valid email"})
            return;
        }
        try {
          setLoading(true)

          const response = await forgotPassword(email)
          if(!response.success){
            toast.error("Unable to send reset link")
          }
          if(response.success){
            toast.success("Reset link sent! Please check your email.")
            navigate(`/verifyOtp?email=${encodeURIComponent(email)}`)
          }
        } catch (error) {
            toast.error("Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070B08]">
      <div className=" bg-green-500/10 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-center font-bold text-3xl text-white mb-6">Forgot Password</h1>

        <form className="space-y-4" onSubmit={handleSubmit} >
          <div>
            <Input
            label="Email"
            type="email"
            name='email'
            value={email}
            placeholder='Enter your email'
            onChange={handleChange}
            />
            {error.field === "email" && <p className="text-red-500 text-sm">{error.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-green-500 py-3 font-semibold text-black transition-all duration-300 
            hover:scale-[1.02] hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/40">
            {loading ? "Sending.." : "Send Code"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword
