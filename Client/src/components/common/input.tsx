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
    <div className="mb-4">

      <label className="mb-2 block text-sm text-gray-300">{label}</label>

      <div className="relative">
        <input
          type={type === "password" 
            ? showPassword
              ? "text"
              : "password"
            : type
          }
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          autoComplete={autocomplete}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-green-400 focus:ring-2 focus:ring-green-500/30"
          />

          {type === "password" && (
            <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white"
            >
              {showPassword? <FiEye/> : <FiEyeOff/> }
            </button>
          )}
        </div>

        {error && (
          <p className="mt-1 text-sm text-red-500">
            {error}
          </p>
        )}
    </div>
  );
};

export default Input;