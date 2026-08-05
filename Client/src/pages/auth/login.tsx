import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/authLayout"
import Input from "../../components/common/input";
import Button from "../../components/common/button";
import SocialLogin from "../../components/auth/socialLogin";
import { login } from "../../api/userApi";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { setAccessToken } from "../../redux/slices/authSlice";

interface LoginForm {
  email: string;
  password: string;
}

interface ErrorState {
  field?: string;
  message?: string;
}

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<ErrorState>({field: "", message: ""});
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch<AppDispatch>()

  const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError({});
  };

  const handleSubmit = async ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true)

    try {
      const response = await login(formData);

      if (!response.success) {
        setError({
          field: "form",
          message: response.error,
        });
        return;
      }

      if (response.success) {
        dispatch(setAccessToken(response.data?.accessToken));

        if (response.data.role === "STUDENT") {
          navigate("/studentHome");
        } else if(response.data.role === "INSTRUCTOR") {
          navigate("/instructorHome");
        }
      }
    } catch (error) {
      setError({ field: "form", message: "Invalid Email or Password" });
    } finally {
      setLoading(false)
    }
  };

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login to continue your online examination journey."
      imagePosition="left"
    >
      <form onSubmit={handleSubmit}>

        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          autocomplete="email"
          onChange={handleChange}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          autocomplete="current-password"
          onChange={handleChange}
        />

        {error.field === "form" && (
          <p className="mb-4 text-center text-red-500">
            {error.message}
          </p>
        )}

        <div className="mb-6 text-right">

          <button
            type="button"
            className="text-sm text-green-400 hover:text-green-300"
          >
            Forgot Password?
          </button>

        </div>

        <button 
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-green-500 py-3 font-semibold text-black transition-all duration-300 
        hover:scale-[1.02] hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/40">
          {loading? "Logging in.." : "Login"}
        </button>

        <div className="my-6 flex items-center">

          <div className="h-px flex-1 bg-white/10"></div>

          <span className="mx-4 text-sm text-gray-500">
            OR
          </span>

          <div className="h-px flex-1 bg-white/10"></div>

        </div>

        <SocialLogin />

        <p className="mt-8 text-center text-gray-400">

          Don't have an account?{" "}

          <span
            onClick={() => navigate("/signup")}
            className="cursor-pointer text-green-400 hover:text-green-300"
          >
            Create Account
          </span>

        </p>

      </form>
    </AuthLayout>
  );
};

export default Login;
