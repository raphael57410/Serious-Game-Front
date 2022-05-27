import { Header } from "../componenets/layout/Header";
import React from "react";

type Props = {
    children: React.ReactNode
};

export function PageRegular(props: Props) {
    return (
        <>
            <Header textWhite={false}/>
            <main className="main_container flex">
                {props.children}
            </main>
        </>
    );
}
