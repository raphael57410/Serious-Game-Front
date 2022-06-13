import React, { useState } from "react";
import clsx from "clsx";

type Props = {
    label: string;
    extralabel?: string;
    text?: string;
    required?: boolean;
    className?: string;
    inputClassName?: string;
};

export function InputBlock(props: React.PropsWithChildren<Props>) {
    const [onFocusInput, setOnFocusInput] = useState(false);
    return (
        <div className={props.className} onBlur={() => {
            setOnFocusInput(false);
        }} onClick={() => {
            setOnFocusInput(true);
        }}>
            <div className={"flex-row"}>
                <div className={clsx({ "text-primaryColor": onFocusInput }, "mr-10 mb-1")}>
                    {props.label}
                    {props.required && <span className={"text-primaryColor font-bold "}>*</span>}
                </div>
                <div>{props.extralabel}</div>
            </div>
            {props.text && <div className={"mb-3 opacity-5"}>{props.text}</div>}
            <div className={props.inputClassName ?? "mb-3"}>{props.children}</div>
        </div>
    );
}
