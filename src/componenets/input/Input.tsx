import React, { ReactNode } from "react";
import { FieldError } from "react-hook-form";

export type TInputProps<T = string> = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement> & {
    error?: FieldError;
    onValueChange?: (value: T, event: React.ChangeEvent<HTMLInputElement>) => void;
    endIcon?: ReactNode;
};

export const Input = React.forwardRef<HTMLInputElement, TInputProps>(
    ({ error, className, endIcon, onValueChange, onChange, ...props }, ref) => {
        return (
            <>
                <div className={"relative"}>
                    <input
                        {...props}
                        className={"w-full h-10 rounded focus:outline-none focus:border-primaryColor focus:ring-primaryColor focus:ring-1 "}
                        ref={ref}
                        onChange={(event) => {
                            if (onChange) onChange(event);
                            if (onValueChange) onValueChange(event.target.value, event);
                        }}
                    />
                    {endIcon && <div className={"absolute"}>{endIcon}</div>}
                </div>
                {error && <div className={"text-red-900 font-bold"}>{error.message}</div>}
            </>
        );
    },
);