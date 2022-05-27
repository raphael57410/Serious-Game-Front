import clsx from "clsx";
import styles from "./_css/title.module.css";

type Props = {
    textCenter: true | false,
    text: string,
    white?: boolean,
    size?: true | false,
};

export function Title(props: Props) {

    return (
        <h1 className={clsx(
            `m-0 w-full text-titleMobileSize  font-bold text-textColor md:text-5xl lg:text-titleSize`,
            { [styles.white]: props.white },
            { "text-center": props.textCenter },
            { "lg:text-mediumSize": props.size },
        )}
        >{props.text}
        </h1>
    );
}
