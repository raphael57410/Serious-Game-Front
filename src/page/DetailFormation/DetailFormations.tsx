import { DetailFormationsCard } from "./components/DetailFormationsCard";
import BanniereImg from "assets/images/banniereImg.png";
import { Title } from "../../componenets/title";
import { Text } from "../../componenets/text";

type Props = {};

export function DetailFormations(props: Props) {
    return (
        <main className={"min-h-screen flex flex-col items-center "}>
            <div className={"w-full z-0 flex items-center justify-center gap-40"}>
                <div className={"absolute flex flex-col justify-center items-center gap-40"}>
                    <Title textCenter
                           text={"Formations bac à bac+5 en développement web et logiciel, réseaux et cybersécurité"}
                           className={" lg:w-1/2"} white/>
                    <Text text={"ici le texte"} size={"lg"} className={"bottom-0"} white/>
                </div>
                <img src={BanniereImg} className={"w-full"}/>
            </div>
            <div className={"w-full flex items-center lg:w-1/2 my-8"}>
                <Text className={"font-bold w-full md:w-1/4"} size={"lg"} text={"Liste de nos formations"}/>
                <div className={"h-px w-full border-b-2 border-indigo-500"}></div>
            </div>
            <DetailFormationsCard/>
            <DetailFormationsCard/>
            <DetailFormationsCard/>
            <DetailFormationsCard/>
        </main>
    );
}
