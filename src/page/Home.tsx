import { Title } from "../componenets/title";
import { Text } from "../componenets/text";
import { useNavigate } from "react-router-dom";
import { Button } from "../componenets/button";
import { URLS } from "../_configs/URLS";
import { useCallback } from "react";

type Props = {};

export function Home(props: Props) {
    const navigate = useNavigate();

    return (
        <>
            <div className="w-full flex flex-col justify-between items-center md:w-3/6 lg:p-10">
                <Title text={"Bienvenue sur Metz Numeric Game"}/>
                <Text
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum "}/>
                <Button onClick={
                    useCallback(() => navigate(URLS.auth.signIn(), { replace: true }), [navigate])
                } name={"En savoir plus"} full={false} borderColor={true} width="w-56"/>
            </div>
            <div className="img_container flex items-center justify-center lg:p-10">
                <div className="img"></div>
            </div>
        </>
    );
}
