import React, { ChangeEvent } from "react";

interface TextAreaFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  id: string;
  rows?: number;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  value,
  onChange,
  id,
  rows = 3, 
}) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-semibold">
        {label}:
      </label>
      <textarea
        id={id}
        className="w-full border-2 border-gray-300 rounded-md p-2"
        rows={rows}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextAreaField;