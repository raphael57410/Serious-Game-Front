import { Title } from "../../components/title";
import { Text } from "../../components/text";
import { Button } from "../../components/button";

type Props = {
    title: string,
    text: string,
    imgUrl: string
};

export function FormationSection(props: Props) {
    return (
        <div className={" p-10 flex flex-col border-b-2 border-b-cyan-600 md:w-1/2 lg:flex-row "}>
            <img src={props.imgUrl} alt={"formations"}/>
            <div className={"flex flex-col items-center justify-center pl-10 gap-8"}>
                <Title size={"xl"} textCenter text={props.title}/>
                <Text
                    center
                    text={props.text}
                    size={"base"}/>
                <Button borderColor name={"Voir les informations"} full={false} width={"w-56"}/>
            </div>

        </div>
    );
}
