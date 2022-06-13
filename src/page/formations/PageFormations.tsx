import { Title } from "../../components/title";
import { Text } from "../../components/text";
import { FormationSection } from "./FormationSection";
import Image1 from "../../assets/images/image1.png";

const FAKEDATA = [
    {
        imgUrl: Image1,
        text: "L'école Metz Numeric School est l'école de référence pour préparer les apprenants aux métiers du numérique dans les domaines de l'informatique, de la cybersécurité et du marketing digital. Les formations proposées peuvent être réalisées en formation initiale (Post-Bac et demandeurs d'emploi) ou en alternance dans le cadre d'un contrat d'apprentissage ou de professionnalisation (après un BAC+2 ou un BAC+3).",
        title: "Les formations Metz Numeric School",
    },
    {
        imgUrl: Image1,
        text: "L'école Metz Numeric School est l'école de référence pour préparer les apprenants aux métiers du numérique dans les domaines de l'informatique, de la cybersécurité et du marketing digital. Les formations proposées peuvent être réalisées en formation initiale (Post-Bac et demandeurs d'emploi) ou en alternance dans le cadre d'un contrat d'apprentissage ou de professionnalisation (après un BAC+2 ou un BAC+3).",
        title: "Les formations Metz Numeric School",
    },
    {
        imgUrl: Image1,
        text: "L'école Metz Numeric School est l'école de référence pour préparer les apprenants aux métiers du numérique dans les domaines de l'informatique, de la cybersécurité et du marketing digital. Les formations proposées peuvent être réalisées en formation initiale (Post-Bac et demandeurs d'emploi) ou en alternance dans le cadre d'un contrat d'apprentissage ou de professionnalisation (après un BAC+2 ou un BAC+3).",
        title: "Les formations Metz Numeric School",
    },
    {
        imgUrl: Image1,
        text: "L'école Metz Numeric School est l'école de référence pour préparer les apprenants aux métiers du numérique dans les domaines de l'informatique, de la cybersécurité et du marketing digital. Les formations proposées peuvent être réalisées en formation initiale (Post-Bac et demandeurs d'emploi) ou en alternance dans le cadre d'un contrat d'apprentissage ou de professionnalisation (après un BAC+2 ou un BAC+3).",
        title: "Les formations Metz Numeric School",
    },
];

type Props = {};

export function PageFormations(props: Props) {
    return (
        <main className={"h-full flex flex-col items-center justify-center "}>
            <div className={" p-10 border-b-2 border-b-cyan-600 lg:w-1/2"}>
                <Title size={"2xl"} textCenter text={"Les formations Metz Numeric School"}/>
                <Text
                    center
                    text={"L'école Metz Numeric School est l'école de référence pour préparer les apprenants aux métiers du numérique dans les domaines de l'informatique, de la cybersécurité et du marketing digital. Les formations proposées peuvent être réalisées en formation initiale (Post-Bac et demandeurs d'emploi) ou en alternance dans le cadre d'un contrat d'apprentissage ou de professionnalisation (après un BAC+2 ou un BAC+3)."}
                    size={"base"}/>
            </div>
            {
                FAKEDATA && FAKEDATA.map((data, index) => (
                    <FormationSection key={index} title={data.title} text={data.text} imgUrl={data.imgUrl}/>))
            }
        </main>
    );
}
