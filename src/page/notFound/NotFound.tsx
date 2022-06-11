import { Title } from "../../componenets/title";
import clsx from "clsx";

type Props = {};

export function NotFound(props: Props) {
    return (
        <div className={clsx("h-screen bg-404 w-screen bg-contain flex justify-center items-center")}>
            <div className={"flex flex-col"}>
                <Title text={"404"} textCenter/>
                <Title text={"Page not found..."} textCenter/>
            </div>
        </div>


    );
}
