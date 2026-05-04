import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
}

export const Button = ({children, variant = "primary", className, ...props }: ButtonProps) => {
 const baseStyles = "px-6 py-2 rounded-lg font-semibold transition-all duration-200 active:scale-95";

    const variantClasses = {
primary:"bg-blue-500 text-white hover:bg-blue-700",
secondary:"bg-slate-800 text-white hover:bg-slate-900",
outline:"border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
    };

    return (
        <button className={`${baseStyles} ${variantClasses[variant]} ${className}`} 
        {...props} >{children} </button>
    );
};