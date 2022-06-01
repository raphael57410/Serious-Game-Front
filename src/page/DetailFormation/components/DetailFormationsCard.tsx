import { Title } from "../../../componenets/title";
import GrandEstLogo from "assets/logo/Grand_Est_Logo 1.svg";
import ChevronLogo from "assets/logo/icons_chevron-right.svg";
import CardImg from "assets/images/card_image.png";

type Props = {};

export function DetailFormationsCard(props: Props) {
    return (
        <div className={"bg-white mb-8 rounded-3xl lg:w-4/12 "}>
            <div className={"h-full flex rounded-3xl w-full justify-between"}>
                <div className={"rounded-3xl w-52"}>
                    <img src={CardImg} alt={"formation picture"} className={"h-full w-full rounded-3xl"}/>
                </div>
                <div className={"bg-white rounded-3xl p-3 flex flex-col gap-2 w-full"}>
                    <Title textCenter={false} size={"lg"} text={"Mise à niveau dans les métiers du numérique"}/>
                    <span className={"text-primaryColor"}>BAC+2</span>
                    <span>Avec le soutien de:</span>
                    <img src={GrandEstLogo} alt={"grand EST"} className={"w-20"}/>
                </div>
                <div className={"rounded-3xl flex items-center justify-end "}>
                    <img src={ChevronLogo} alt={"chevron"} className={"cursor-pointer"}/>
                </div>
            </div>
        </div>
    );
}
