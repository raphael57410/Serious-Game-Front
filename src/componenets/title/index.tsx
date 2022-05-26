import clsx from "clsx";
import styles from "./_css/title.module.css";

type Props = {
    text: string,
    white?: boolean,
};

export function Title(props: Props) {

    return (
        <h1 className={clsx("m-0 w-full text-titleMobileSize text-center text-titleSize font-bold text-textColor md:text-5xl lg:text-titleSize", { [styles.white]: props.white })}>{props.text}</h1>
    );
}
