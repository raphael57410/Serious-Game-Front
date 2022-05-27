import clsx from "clsx";
import styles from "./_css/title.module.css";

type Props = {
    text: string,
    white?: boolean,
    size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null,
};

export function Title(props: Props) {

    return (
        <h1 className={clsx(
            `m-0 w-full text-titleMobileSize text-center font-bold text-textColor md:text-5xl lg:text-titleSize`,
            { [styles.white]: props.white },
        )}
        >{props.text}
        </h1>
    );
}
