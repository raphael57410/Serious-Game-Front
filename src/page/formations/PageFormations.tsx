import { Title } from "../../componenets/title";
import { Text } from "../../componenets/text";
import Image1 from "assets/images/image1.png";
import { Button } from "../../componenets/button";

type Props = {};

export function PageFormations(props: Props) {
    return (
        <main className={"h-full flex flex-col items-center justify-center "}>
            <div className={"w-1/2 p-10 border-b-2 border-b-cyan-600"}>
                <Title textCenter text={"Les formations Metz Numeric School"}/>
                <Text
                    center
                    text={"L'école Metz Numeric School est l'école de référence pour préparer les apprenants aux métiers du numérique dans les domaines de l'informatique, de la cybersécurité et du marketing digital. Les formations proposées peuvent être réalisées en formation initiale (Post-Bac et demandeurs d'emploi) ou en alternance dans le cadre d'un contrat d'apprentissage ou de professionnalisation (après un BAC+2 ou un BAC+3)."}/>
            </div>
            <div className={"w-1/2 p-10 flex border-b-2 border-b-cyan-600"}>
                <img src={Image1} alt={"formations"}/>
                <div className={"flex flex-col items-center justify-center"}>
                    <Title textCenter text={"Les formations Metz Numeric School"}/>
                    <Text
                        center
                        text={"L'école Metz Numeric School est l'école de référence pour préparer les apprenants aux métiers du numérique dans les domaines de l'informatique, de la cybersécurité et du marketing digital. Les formations proposées peuvent être réalisées en formation initiale (Post-Bac et demandeurs d'emploi) ou en alternance dans le cadre d'un contrat d'apprentissage ou de professionnalisation (après un BAC+2 ou un BAC+3)."}/>
                    <Button borderColor name={"Voir les informations"} full={false} width={"w-56"}/>
                </div>

            </div>
        </main>
    );
}
