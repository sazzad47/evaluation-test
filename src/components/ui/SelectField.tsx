import React, { ChangeEvent } from "react";

interface SelectFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    id: string;
    options: string[];
}

const SelectField: React.FC<SelectFieldProps> = ({
    label,
    value,
    onChange,
    id,
    options,
  }) => {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value);
    };
  
    return (
      <div className="mb-4">
        <label htmlFor={id} className="block text-gray-700 font-semibold">
          {label}:
        </label>
        <select
          id={id}
          className="w-full border-2 border-gray-300 rounded-md p-2"
          value={value}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select {label.toLowerCase()}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  };

export default SelectField