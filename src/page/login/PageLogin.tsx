import { InputBlock } from "../../componenets/input/InputBlock";
import { Input } from "../../componenets/input/Input";
import { Title } from "../../componenets/title";

type Props = {};

export function PageLogin(props: Props) {
    return (
        <div className={"w-1/2 ml-9 flex flex-col p-10"}>
            <Title size text={"S'inscrire"} textCenter={false}/>
            <InputBlock className={"p-1"} label={"Nom"} required>
                <Input/>
            </InputBlock>
            <InputBlock className={"p-1"} label={"Prénom"} required>
                <Input/>
            </InputBlock>
            <InputBlock className={"p-1"} label={"Email"} required>
                <Input/>
            </InputBlock>
            <InputBlock className={"p-1"} label={"Mot de passe"} required>
                <Input/>
            </InputBlock>
        </div>
    );
}
