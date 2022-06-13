import { Title } from "../components/title";
import { Text } from "../components/text";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { URLS } from "../_configs/URLS";
import { useCallback } from "react";
import styles from "./_css/home.module.css";
import clsx from "clsx";

type Props = {};

export function Home(props: Props) {
    const navigate = useNavigate();

    return (

        <main
            className={clsx(styles.main_container, "flex flex-col-reverse justify-around md:flex-row")}>
            <div className="w-full h-full flex flex-col justify-around items-center md:w-3/6">
                <Title text={"Bienvenue sur Metz Numeric Game"} textCenter size={"7xl"}/>
                <Text
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum "}
                    size={"lg"}/>
                <Button onClick={
                    useCallback(() => navigate(URLS.auth.signIn(), { replace: true }), [navigate])
                } name={"En savoir plus"} full={false} borderColor={true} width="w-56"/>
            </div>
            <div className="w-full h-full flex items-center justify-center ">
                <div className="img w-full h-full"></div>
            </div>
        </main>

    );
}
