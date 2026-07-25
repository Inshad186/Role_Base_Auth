import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/authLayout"
import Input from "../../components/common/input";
import Button from "../../components/common/button";
import SocialLogin from "../../components/auth/socialLogin";

const Signup = () => {
    const navigate = useNavigate()
return (
  <AuthLayout
    title="Create Account"
    subtitle="Join our freelance community and start your journey."
    imagePosition="right"
  >
    <form>

      <Input
        label="Full Name"
        type="text"
        name="name"
        placeholder="Enter your full name"
        value=""
      />

      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        value=""
      />

      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="Create a password"
        value=""
      />

      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password"
        value=""
      />

      <Button text="Create Account" 
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
          Sign In
        </span>
      </p>

    </form>
  </AuthLayout>
);
};

export default Signup;
