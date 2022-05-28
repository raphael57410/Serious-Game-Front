import styles from "./_css/text.module.css";
import clsx from "clsx";

type Props = {
    text: string,
    white?: boolean,
};

export function Text(props: Props) {
    return (
        <p className={clsx(
            styles.container,
            { "text-white": props.white },
            { "text-textColor": !props.white },
        )}>{props.text}</p>
    );
}
