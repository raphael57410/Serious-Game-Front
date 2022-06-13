import clsx from "clsx";
import { AsideBar } from "./components/AsideBar";

type Props = {};

export function AdminPage(props: Props) {
    return (
        <div className={clsx("h-screen w-screen bg-contain flex ")}>
            <AsideBar/>
            <main className={"w-full h-full flex items-center justify-center"}>
                <div className={"w-1/2 h-1/2 bg-red-800"}>

                    <div>ici le tableau des données</div>
                </div>
            </main>
        </div>


    );
}
