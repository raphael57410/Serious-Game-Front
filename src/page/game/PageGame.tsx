import { ProgressBar } from "../../componenets/game/ProgressBar";
import Timer from "../../componenets/game/Timer";
import { ResponseCard } from "../../componenets/game/ResponseCard";
import { useState } from "react";

type Props = {};

const FAKE_QUESTIONS = [
    {
        id: 1,
        status: true,
        published: true,
        label: "question1",
        response: [
            {
                id: 1,
                label: "response1",
                status: false,
            },
            {
                id: 2,
                label: "response2",
                status: true,
            },
            {
                id: 3,
                label: "response3",
                status: false,
            },
            {
                id: 4,
                label: "response4",
                status: false,
            },
        ],
    },
    {
        id: 2,
        status: false,
        published: true,
        label: "question2",
        response: [
            {
                id: 1,
                label: "response1",
                status: false,
            },
            {
                id: 2,
                label: "response2",
                status: false,
            },
            {
                id: 3,
                label: "response3",
                status: true,
            },
            {
                id: 4,
                label: "response4",
                status: false,
            },
        ],
    },
    {
        id: 3,
        status: true,
        published: true,
        label: "question3",
        response: [
            {
                id: 1,
                label: "response1",
                status: false,
            },
            {
                id: 2,
                label: "response2",
                status: true,
            },
            {
                id: 3,
                label: "response3",
                status: false,
            },
            {
                id: 4,
                label: "response4",
                status: false,
            },
        ],
    },
    {
        id: 4,
        status: false,
        published: false,
        label: "question4",
        response: [
            {
                id: 1,
                label: "response1",
                status: true,
            },
            {
                id: 2,
                label: "response2",
                status: false,
            },
            {
                id: 3,
                label: "response3",
                status: false,
            },
            {
                id: 4,
                label: "response4",
                status: false,
            },
        ],
    },
    {
        id: 5,
        status: false,
        published: false,
        label: "question5",
        response: [
            {
                id: 1,
                label: "response1",
                status: true,
            },
            {
                id: 2,
                label: "response2",
                status: false,

            },
            {
                id: 3,
                label: "response3",
                status: false,

            },
            {
                id: 4,
                label: "response4",
                status: false,

            },
        ],
    },
];

export function PageGame(props: Props) {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    return (
        <main className={"h-screen flex items-center justify-center"}>
            <div className={"rounded-lg shadow-2xl pl-4 py-4"}>
                <div className={"flex justify-between"}>
                    <div>
                        <div>Question {currentQuestion + 1}/{FAKE_QUESTIONS.length}</div>
                        <ProgressBar arrayOfQuestions={FAKE_QUESTIONS}/>
                        <p className={"mt-11"}>{FAKE_QUESTIONS[currentQuestion].label}</p>
                    </div>
                    <div
                        className={"bg-timer w-52 h-52 bg-contain flex items-center justify-center text-white bold ml-4"}>
                        <div className={"mr-5 mb-5"}>
                            <h2 className={"text-center"}>Temps restant:</h2>
                            <Timer initialMinute={10} initialSeconds={10} className={"text-center"}/>
                        </div>
                    </div>
                </div>
                <div className={"flex items-center justify-center"}>
                    <div className={"grid  grid-rows-2 grid-cols-2 gap-4"}>
                        {
                            FAKE_QUESTIONS[currentQuestion].response.map(response =>
                                <ResponseCard key={response.id} {...response} setCurrentQuestion={setCurrentQuestion}
                                              currentQuestion={currentQuestion}/>,
                            )
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}
