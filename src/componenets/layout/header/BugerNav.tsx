import clsx from "clsx";
import { useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../../button";
import { URLS } from "../../../_configs/URLS";


type Props = {};

export function BurgerNav(props: Props) {
    const navigate = useNavigate();

    return (
        <nav
            className={clsx(
                "w-full bg-bgColor h-56 flex flex-col" +
                " justify-end items-center" +
                " justify-between absolute top-14",
            )}>
            <NavLink to="/">formations</NavLink>
            <NavLink to="/">Contact</NavLink>
            <Button onClick={
                useCallback(() => navigate(URLS.auth.signIn(), { replace: true }), [navigate])
            } name={"Se connecter"} full={true} width="w-full"/>
            <Button onClick={
                useCallback(() => navigate(URLS.auth.signUp(), { replace: true }), [navigate])
            } name={"S'inscrire"} full={false} width="w-full"/>
        </nav>
    );
}
