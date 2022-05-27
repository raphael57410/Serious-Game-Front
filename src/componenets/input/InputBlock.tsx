import React from "react";

type Props = {
    label: string;
    extralabel?: string;
    text?: string;
    required?: boolean;
    className?: string;
    inputClassName?: string;
};

export function InputBlock(props: React.PropsWithChildren<Props>) {
    return (
        <div className={props.className}>
            <div className={"flex-row"}>
                <div className={"mr-10 mb-1"}>
                    {props.label}
                    {props.required && <span className={"text-red-900 font-bold "}>*</span>}
                </div>
                <div>{props.extralabel}</div>
            </div>
            {props.text && <div className={"mb-3 opacity-5"}>{props.text}</div>}
            <div className={props.inputClassName ?? "mb-3"}>{props.children}</div>
        </div>
    );
}
