import React from "react";

interface InputProps {
  id: string;
  label: string;
  type: "text" | "number";
  fullWidth?: boolean;
  disabled?: boolean;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = (props: InputProps) => {
  const { id, label, type, fullWidth, disabled, value, onChange } = props;

  return (
    <div className={`flex flex-col ${fullWidth && "w-full"}`}>
      <label className="text-sm" htmlFor={id}>
        {label}
      </label>
      <input
        className="p-2 border border-slate-200 rounded-md"
        type={type}
        name={id}
        id={id}
        min={25}
        max={100}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
