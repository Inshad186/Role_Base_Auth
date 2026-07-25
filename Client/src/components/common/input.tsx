interface AuthInputProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange?: ( event: React.ChangeEvent<HTMLInputElement> ) => void;
}

const Input = ({ label, type, placeholder, name, value, onChange }: AuthInputProps) => {
  return (
    <div className="mb-5">

      <label className="mb-2 block text-sm text-gray-300">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className=" w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500
        outline-none transition-all duration-300 focus:border-green-400 focus:ring-2 focus:ring-green-500/30 " />

    </div>
  );
};

export default Input;