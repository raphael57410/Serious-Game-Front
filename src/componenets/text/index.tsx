import styles from './_css/text.module.css'
import clsx from "clsx";
type Props = {
    text:string,
};

export function Text(props: Props) {
    return (
        <p className={clsx(styles.container)}>{props.text}</p>
    );
}
