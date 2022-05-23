import styles from "./_css/button.module.css"
type Props = {
name:string
};

export function Button(props: Props) {
    return (
        <button className={styles.container}>{props.name}</button>
    );
}
