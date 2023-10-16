import React, { ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  id: string;
  type?: "text" | "password" | "number"; 
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  id,
  type = "text",
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-semibold">
        {label}:
      </label>
      <input
        type={type}
        id={id}
        className="w-full border-2 border-gray-300 rounded-md p-2"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField