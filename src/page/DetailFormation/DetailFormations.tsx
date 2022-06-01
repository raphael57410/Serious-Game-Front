import { DetailFormationsCard } from "./components/DetailFormationsCard";

type Props = {};

export function DetailFormations(props: Props) {
    return (
        <main className={"h-screen flex flex-col items-center"}>
            <DetailFormationsCard/>
            <DetailFormationsCard/>
            <DetailFormationsCard/>
            <DetailFormationsCard/>
        </main>
    );
}
