import clsx from "clsx";
import { Button } from "../../button";

type Props = {};

export function BurgerNav(props: Props) {
    return (
        <nav
            className={clsx(
                "w-full bg-bgColor h-56 flex flex-col" +
                " justify-end items-center" +
                " justify-between absolute -bottom-40",
            )}>
            <a href="/">formations</a>
            <a href="/">Contact</a>
            <Button name={"Se connecter"} full={true} width="w-full"/>
            <Button name={"S'inscrire"} full={false} width="w-full"/>
        </nav>
    );
}
