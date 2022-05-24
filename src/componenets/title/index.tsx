import clsx from "clsx";
import styles from './_css/title.module.css'

type Props = {
    text: string,
    white?: boolean,
};

export function Title(props: Props) {

    return (
        <h1 className={clsx(styles.title_container, { [styles.white]: props.white})}>{props.text}</h1>
    );
}
