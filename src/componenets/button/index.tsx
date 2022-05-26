import styles from "./_css/button.module.css";
import clsx from "clsx";

type Props = {
    name: string,
    full: boolean,
    borderColor?: boolean,
    width: "w-full" | "w-56"
};

export function Button(props: Props) {

    return (
        <button className={clsx(
            `h-12 ${props.width} md:w-24 lg:w-28 xl:${props.width}`,
            {
                [styles.container_full]: props.full,
                [styles.container_border]: !props.full,
                [styles.container_border_color]: props.borderColor,
            },
        )}
        >{props.name}</button>
    );
}
