import clsx from "clsx";
import { Button } from "../../button";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { URLS } from "../../../_configs/URLS";

type Props = {};

export function Nav
(props: Props) {
    const navigate = useNavigate();
    let location = useLocation();

    return (
        <nav
            className={clsx("w-2/5 hidden md:flex justify-center items-center justify-between w-full mr-10 ")}>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "text-primaryColor" : undefined
                }
                to={URLS.formations()}>formations</NavLink>
            <NavLink to="/" className={({ isActive }) =>
                isActive ? "text-primaryColor" : undefined
            }>Contact</NavLink>
            {location.pathname != URLS.auth.signIn() && <Button onClick={
                () => navigate(URLS.auth.signIn(), { replace: true })
            } name={"Se connecter"} full={true} width="w-56"/>}
            {location.pathname != URLS.auth.signUp() && <Button onClick={
                () => navigate(URLS.auth.signUp(), { replace: true })
            } name={"S'inscrire"} full={location.pathname === URLS.auth.signIn()} width="w-56"/>}
        </nav>
    );
}
