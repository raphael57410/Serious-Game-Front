import clsx from "clsx";
import styles from "./_css/title.module.css";

type Props = {
    textCenter: true | false,
    text: string,
    white?: boolean,
    size?: string,
    className?: string,
};

export function Title(props: Props) {
    return (
        <h1 className={clsx(
            "m-0 w-full text-titleMobileSize font-bold text-textColor lg:text-5xl",
            props.className,
            { [styles.white]: props.white },
            { "text-center": props.textCenter },
        )}
        >{props.text}
        </h1>
    );
}
