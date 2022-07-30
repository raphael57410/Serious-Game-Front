import clsx from "clsx";
import { AsideBar } from "./components/AsideBar";
import { TableComponent } from "../../components/table/TableComponent";

type Props = {};

export function AdminPage(props: Props) {
    return (
        <div className={clsx("h-screen w-screen bg-contain flex")}>
            <AsideBar/>
            <main className={"w-full h-full flex items-center justify-center"}>
                <TableComponent/>
            </main>
        </div>


    );
}
