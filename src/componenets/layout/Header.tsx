import styles from "./_css/header.module.css";
import clsx from "clsx";
import BurgerMenu from "./header/BurgerMenu";
import { useState } from "react";
import { BurgerNav } from "./header/BugerNav";
import { Nav } from "./header/Nav";

type Props = {
    textWhite: true | false,
};

export function Header(props: Props) {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

    function openMobileMenu() {
        setMobileMenuOpened(!mobileMenuOpened);
    };
    return (
        <header className={clsx(styles.header_container, "flex justify-between relative", {
            "text-white": props.textWhite,
        })}>
            <div className={clsx(styles.logo_container, "ml-10")}>
                <div className={clsx(styles.logo, "h-56 w-40")}></div>
            </div>
            <BurgerMenu visible={mobileMenuOpened} openMobileMenu={openMobileMenu}/>
            {mobileMenuOpened && <BurgerNav/>}
            <Nav/>
        </header>
    );
}
