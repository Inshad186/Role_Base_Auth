import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface AuthInputProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  value: string;
  autocomplete?: string;
  onChange?: ( event: React.ChangeEvent<HTMLInputElement> ) => void;
  error?: string;
}

const Input = ({ label, type, placeholder, name, value, onChange, autocomplete, error }: AuthInputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div style={{ marginBottom: "clamp(8px, 2vh, 16px)" }}>
      <label
        className="block text-gray-300"
        style={{ marginBottom: "clamp(4px, 1vh, 8px)", fontSize: "clamp(0.75rem, 1.8vh, 0.875rem)" }}
      >
        {label}
      </label>

      <div className="relative">
        <input
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          autoComplete={autocomplete}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-green-400 focus:ring-2 focus:ring-green-500/30"
          style={{ paddingTop: "clamp(6px, 1.5vh, 10px)", paddingBottom: "clamp(6px, 1.5vh, 10px)", fontSize: "clamp(0.85rem, 2vh, 1rem)" }}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white"
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        )}
      </div>

      {error && (
        <p className="mt-1 text-red-500" style={{ fontSize: "clamp(0.7rem, 1.6vh, 0.875rem)" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;