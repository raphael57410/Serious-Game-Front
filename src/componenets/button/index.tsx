import styles from "./_css/button.module.css"
import clsx from "clsx";
type Props = {
    name:string,
    full:boolean,
};

export function Button(props: Props) {
    console.log(props.full);
    return (
        <button className={clsx(styles.width220,styles.height50,
            { [styles.container_full]: props.full,
            [styles.container_border]: !props.full}
        )}
        >{props.name}</button>
    );
}
