import React from "react";

interface ButtonProps {
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { disabled, onClick, children } = props;

  return (
    <button
      className="py-2 px-4 uppercase font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 disabled:opacity-25 disabled:cursor-default ease-linear duration-150"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
