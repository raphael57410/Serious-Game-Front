import BanniereImg from "assets/images/banniereImg.png";
import { Title } from "../../components/title";
import { Text } from "../../components/text";
import { DetailFormationsBlock } from "./components/DetailFormationsBlock";
import { DetailFormationsCard } from "./components/DetailFormationsCard";

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
            <DetailFormationsBlock text={"niveaux1 de la formation"}>
                <DetailFormationsCard/>
                <DetailFormationsCard/>
                <DetailFormationsCard/>
            </DetailFormationsBlock>
            <DetailFormationsBlock text={"niveaux 2 de la formation"}>
                <DetailFormationsCard/>
                <DetailFormationsCard/>
                <DetailFormationsCard/>
                <DetailFormationsCard/>
            </DetailFormationsBlock>
        </main>
    );
}
