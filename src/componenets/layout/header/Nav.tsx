import clsx from "clsx";
import styles from "../_css/header.module.css";
import { Button } from "../../button";
import { NavLink, useNavigate } from "react-router-dom";
import { URLS } from "../../../_configs/URLS";
import { useCallback } from "react";

type Props = {};

export function Nav
(props: Props) {
    const navigate = useNavigate();

    return (
        <nav
            className={clsx(styles.nav_container, "hidden md:flex justify-center items-center justify-between w-full mr-10 ")}>
            <NavLink to="/">formations</NavLink>
            <NavLink to="/">Contact</NavLink>
            <Button onClick={
                useCallback(() => navigate(URLS.auth.signIn(), { replace: true }), [navigate])
            } name={"Se connecter"} full={true} width="w-56"/>
            <Button onClick={
                useCallback(() => navigate(URLS.home(), { replace: true }), [navigate])
            } name={"S'inscrire"} full={false} width="w-56"/>
        </nav>
    );
}
