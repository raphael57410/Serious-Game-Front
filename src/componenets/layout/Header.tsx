import styles from "./_css/header.module.css";
import clsx from "clsx";
import BurgerMenu from "./header/BurgerMenu";
import { useState } from "react";
import { BurgerNav } from "./header/BugerNav";
import { Nav } from "./header/Nav";
import { URLS } from "../../_configs/URLS";
import { useNavigate } from "react-router-dom";

type Props = {
    textWhite?: boolean,
    fixed?: boolean,
};

export function Header(props: Props) {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    const navigate = useNavigate();


    function openMobileMenu() {
        setMobileMenuOpened(!mobileMenuOpened);
    };
    return (
        <header className={clsx(
            "flex justify-between w-full pt-3",
            {
                "text-white": props.textWhite,
                "fixed": props.fixed,
            },
        )}>
            <div className={clsx("w-2 ml-10")}>
                <div className={clsx(styles.logo, "w-20 cursor-pointer")} onClick={
                    () => navigate(URLS.home(), { replace: true })
                }></div>
            </div>
            <BurgerMenu visible={mobileMenuOpened} openMobileMenu={openMobileMenu}/>
            {mobileMenuOpened && <BurgerNav/>}
            <Nav/>
        </header>
    );
}
