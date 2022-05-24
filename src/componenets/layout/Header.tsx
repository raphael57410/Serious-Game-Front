import styles from "./_css/header.module.css";
import { Button } from "../button";
import clsx from "clsx";

type Props = {};

export function Header(props: Props) {
    return (
        <header className={clsx(styles.header_container, "flex justifyContent_spaceBetween ")}>
            <div className={styles.logo_container}>
                <div className={styles.logo}></div>
            </div>
            <nav
                className={clsx(styles.nav_container, "flex justifyContent_flexEnd alignItems_center justifyContent_spaceBetween")}>
                <a href="/">formations</a>
                <a href="/">Contact</a>
                <Button name={"Se connecter"} full={true}/>
                <Button name={"S'inscrire"} full={false}/>
            </nav>
        </header>
    );
}
