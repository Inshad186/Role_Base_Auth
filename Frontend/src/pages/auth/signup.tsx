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
import { useTranslation } from "react-i18next";

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

    const { t } = useTranslation()

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
    title={t("langSignup.title")}
    subtitle={t("langSignup.subtitle")}
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
        style={{ padding: "clamp(6px, 1.5vh, 8px) clamp(16px, 3vw, 24px)", fontSize: "clamp(0.8rem, 2vh, 1rem)" }}
        className={`px-6 py-2 cursor-pointer rounded-full border transition-all duration-300
          ${formData.role === "STUDENT"
            ? "bg-green-500 text-black border-green-500"
            : "border-white/20 text-white hover:border-green-400"
        }`}>{t("langSignup.student")}</button>

        <button 
        type="button"
        onClick={() => {
          setFormData((prev) => ({
            ...prev,
            role: "INSTRUCTOR",
          }));

          setError({});
        }}
        style={{ padding: "clamp(6px, 1.5vh, 8px) clamp(16px, 3vw, 24px)", fontSize: "clamp(0.8rem, 2vh, 1rem)" }}
        className={`px-6 py-2 cursor-pointer rounded-full border transition-all duration-300
          ${formData.role === "INSTRUCTOR"
            ? "bg-green-500 text-black border-green-500"
            : "border-white/20 text-white hover:border-green-400"
        }`}>{t("langSignup.instructor")}</button>

      </div>

      {error.field === "role" && (
        <p className="mb-4 text-sm text-red-500">
          {error.message}
        </p>
      )}

    <form onSubmit={handleSubmit}>
      <Input
        label={t("langSignup.name")}
        type="text"
        name="name"
        placeholder={t("langSignup.namePlaceholder")}
        value={formData.name}
        autocomplete="name"
        onChange={handleChange}
        error={error.field === "name"? error.message : ""}
      />

      <Input
        label={t("langSignup.email")}
        type="email"
        name="email"
        placeholder={t("langSignup.emailPlaceholder")}
        value={formData.email}
        autocomplete="email"
        onChange={handleChange}
        error={error.field === "email"? error.message : ""}
      />

      <Input
        label={t("langSignup.password")}
        type="password"
        name="password"
        placeholder={t("langSignup.passwordPlaceholder")}
        value={formData.password}
        autocomplete="new-password"
        onChange={handleChange}
        error={error.field === "password"? error.message : ""}
      />

      <Button 
      text={loading ? t("langSignup.creating") : t("langSignup.createButton")}
      className="w-full rounded-xl bg-green-500 py-3 font-semibold text-black transition-all duration-300 
        hover:scale-[1.02] hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/40"/>

      <div className="flex items-center" style={{ margin: "clamp(12px, 3vh, 24px) 0" }}>
        <div className="h-px flex-1 bg-white/10"></div>
        <span className="mx-4 text-gray-500" style={{ fontSize: "clamp(0.75rem, 1.8vh, 0.875rem)" }}>
          {t("langSignup.or")}
        </span>
        <div className="h-px flex-1 bg-white/10"></div>
      </div>

      <SocialLogin />

      <p className="mt-8 text-center text-gray-400">
        {t("langSignup.existAccount")}{" "}
        <span
          onClick={() => navigate("/login")}
          className="cursor-pointer text-green-400 hover:text-green-300"
        >
          {t("langSignup.loginButton")}
        </span>
      </p>

    </form>
  </AuthLayout>
);
};

export default Signup;
