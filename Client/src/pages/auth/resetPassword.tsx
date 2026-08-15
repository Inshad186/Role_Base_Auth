import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthLayout from "../../components/auth/authLayout";
import Input from "../../components/auth/authInput";
import Button from "../../components/common/button";
import { resetPassword } from "../../api/userApi";
import { passwordRegex } from "../../utils/regex.utils";

interface Error {
  field: string;
  message: string;
}

const ResetPassword = () => {
  const navigate = useNavigate();
  const { resetToken } = useParams();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<Error>({field: "", message: ""})
  const [loading, setLoading] = useState(false)


  const handleSubmit = async(e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!resetToken){
      setError({field:"token", message: "token is invalid"});
      return
    }

    if(!passwordRegex.length.test(password)){
      setError({field: "password", message: "Password must be at least 6 characters"})
    }
    if(!passwordRegex.digit.test(password)){
      setError({field: "password", message: "Password must contain a number"})
    }
    if(!passwordRegex.letter.test(password)){
      setError({field: "password", message: "Password must contain a letter"})
    }
    if(!passwordRegex.specialChar.test(password)){
      setError({field: "password", message: "Password must contain a special character"})
    }
    if(password !== confirmPassword){
      setError({field: "confirmPassword", message: "Passwords do not match"})
    }

    try {
      setLoading(true)

      const response = await resetPassword(resetToken, password)
      if(response.success){
        console.log("Successfully password Resetted...")
        navigate("/login")
      }
    } catch (error) {
      throw Error()
      
    } finally {
      setLoading(false)
    }
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Create a new password for your Examix account."
      imagePosition="left"
    >
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* New Password */}
        <Input
          label="New Password"
          type="password"
          name="password"
          placeholder="Enter your new password"
          value={password}
          autocomplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Confirm Password */}
        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm your new password"
          value={confirmPassword}
          autocomplete="new-password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* Reset Button */}
        <Button
          type="submit"
          text={loading? "Resetting.." : "Reset Password"}
          className="w-full rounded-xl bg-green-500 py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02]
          hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/40"
        />

        {/* Back to Login */}
        <p className="pt-3 text-center text-gray-400">
          Remember your password?{" "}
          <span
            onClick={() => navigate("/login")}
            className="cursor-pointer text-green-400 transition-colors hover:text-green-300"
          >
            Login
          </span>
        </p>

      </form>
    </AuthLayout>
  );
};

export default ResetPassword;