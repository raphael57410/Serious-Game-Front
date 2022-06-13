import clsx from "clsx";
import { useEffect, useState } from "react";
import checkLogo from "assets/logo/check.svg";
import crossLogo from "assets/logo/cross.svg";

type Props = {
    label: string;
    status: boolean;
    setCurrentQuestion: (arg: number) => void;
    currentQuestion: number;
};

export function ResponseCard(props: Props) {
    const [response, setResponse] = useState<boolean | undefined>();

    useEffect(() => {
        console.log("laaa");
    }, [response]);

    return (
        <div
            className={clsx({
                "border-green-600 text-white bg-green-600": response,
                "border-red-600 text-white bg-red-600": response === false,
            }, "border border-blue-600 p-4 flex gap-6 items-center rounded-lg cursor-pointer hover:scale-110")}
            onClick={() => {
                if (props.status) {
                    setResponse(true);
                } else {
                    setResponse(false);
                }

            }}>
            {props.label}
            <div>{response && <img src={checkLogo} alt={"check"}/>}</div>
            <div>{response === false && <img src={crossLogo} alt={"cross"}/>}</div>
        </div>
    );
}
