import styles from "./_css/notFound.module.css";
import { Title } from "../../componenets/title";
import clsx from "clsx";

type Props = {};

export function NotFound(props: Props) {
    return (
        <div className={clsx(styles.img, "h-full w-full flex justify-center items-center")}>
            <div className={"flex flex-col"}>
                <Title text={"404"} textCenter/>
                <Title text={"Page not found..."} textCenter/>
            </div>

        </div>


    );
}
