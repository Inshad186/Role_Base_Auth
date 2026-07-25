import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/authLayout"
import Input from "../../components/common/input";
import Button from "../../components/common/button";
import SocialLogin from "../../components/auth/socialLogin";

import { login } from "../../api/userApi";

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

  const [error, setError] = useState<ErrorState>({});

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError({});
  };

  const handleSubmit = async ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await login(formData);

      if (response.success) {
        localStorage.setItem(
          "accessToken",
          response.data.accessToken
        );

        if (response.data.role === "STUDENT") {
          navigate("/studentHome");
        } else {
          navigate("/instructorHome");
        }
      }
    } catch (error) {
      setError({
        field: "form",
        message: "Invalid Email or Password",
      });
    }
  };

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login to continue your freelance journey."
      imagePosition="left"
    >
      <form onSubmit={handleSubmit}>

        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />

        {error.field === "form" && (
          <p className="mb-4 text-center text-red-400">
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

        <Button text="Sign In" 
        className="w-full rounded-xl bg-green-500 py-3 font-semibold text-black transition-all duration-300 
        hover:scale-[1.02] hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/40"
        />

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
