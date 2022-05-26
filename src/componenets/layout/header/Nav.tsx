import clsx from "clsx";
import styles from "../_css/header.module.css";
import { Button } from "../../button";

type Props = {};

export function Nav
(props: Props) {
    return (
        <nav
            className={clsx(styles.nav_container, "hidden md:flex justify-center items-center justify-between w-full mr-10 ")}>
            <a href="/">formations</a>
            <a href="/">Contact</a>
            <Button name={"Se connecter"} full={true} width="w-56"/>
            <Button name={"S'inscrire"} full={false} width="w-56"/>
        </nav>
    );
}
