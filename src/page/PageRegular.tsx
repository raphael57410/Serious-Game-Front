import { Header } from "../components/layout/Header";
import React from "react";

type Props = {
    children: React.ReactNode,
    fixedHeader?: boolean,
    textWhite?: boolean,
};

export function PageRegular(props: Props) {
    return (
        <>
            <Header textWhite={props.textWhite} fixed={props.fixedHeader}/>
            {props.children}
        </>
    );
}
