import { Text } from "../../../components/text";

type Props = {
    text: string
    children: any
};

export function DetailFormationsBlock(props: Props) {
    return (
        <>
            <div className={"w-full flex items-center lg:w-1/2 my-8"}>
                <Text className={"font-bold w-full md:w-1/4"} size={"lg"} text={props.text}/>
                <div className={"h-px w-full border-b-2 border-indigo-500"}></div>
            </div>
            {props.children}
        </>
    );
}
