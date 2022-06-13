import clsx from "clsx";

type Props = {
    arrayOfQuestions: { id: number, status: boolean, published: boolean, label: string }[]
};

export function ProgressBar(props: Props) {

    return (
        <div className={"w-full flex justify-between"}>
            {
                props.arrayOfQuestions.map(question =>
                    <span key={question.id} className={clsx({
                        "bg-red-300": !question.status && question.published,
                        "bg-green-300": question.status && question.published,
                        "bg-slate-300": !question.published,
                    }, "w-16 h-4 m-1")}></span>,
                )
            }
        </div>
    );
}
