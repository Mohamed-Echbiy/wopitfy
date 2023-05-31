import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProp>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={
          (twMerge(
            `w-full rounded-full bg-green-500 border border-transparent p-3 disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-75 font-bold transition-all`
          ),
          className)
        }
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
