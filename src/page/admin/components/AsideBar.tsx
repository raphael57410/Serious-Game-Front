import { useState } from "react";
import chevron from "../../../assets/logo/icons_chevron-right.svg";
import clsx from "clsx";

type Props = {};

export function AsideBar(props: Props) {
    const [showUsers, setShowUsers] = useState(false);
    const [showQuizz, setShowQuizz] = useState(false);
    const [showFormations, setShowFormations] = useState(false);
    return (
        <aside className="w-64" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-textColor min-h-screen rounded dark:bg-gray-800">
                <ul className="space-y-2">
                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-white font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg
                                className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                            <span className="ml-3 text-white">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <div
                            onClick={() => setShowUsers(!showUsers)}
                            className="bg-inherit text-white text-sm rounded-lg flex justify-between w-full p-2.5 hover:cursor-pointer">
                            Utilisateurs
                            <img src={chevron} className={clsx({ "rotate-90": showUsers }, "w-4")}/>
                        </div>
                        {showUsers && <ul className={"text-white text-sm rounded-lg w-full p-2.5"}>
                          <li className={"hover:bg-primaryColor"} value="liste">Liste</li>
                          <li className={"hover:bg-primaryColor"} value="formation">Formations</li>
                        </ul>}
                    </li>
                    <li>
                        <div
                            onClick={() => setShowQuizz(!showQuizz)}
                            className="bg-inherit text-white text-sm rounded-lg flex justify-between w-full p-2.5 hover:cursor-pointer">
                            Quizz
                            <img src={chevron} className={clsx({ "rotate-90": showQuizz }, "w-4")}/>
                        </div>
                        {showQuizz && <ul className={"text-white text-sm rounded-lg w-full p-2.5"}>
                          <li className={"hover:bg-primaryColor"} value="liste">Liste</li>
                          <li className={"hover:bg-primaryColor"} value="formation">Formations</li>
                        </ul>}
                    </li>
                    <li>
                        <div
                            onClick={() => setShowFormations(!showFormations)}
                            className="bg-inherit text-white text-sm rounded-lg flex justify-between w-full p-2.5 hover:cursor-pointer">
                            Formations
                            <img src={chevron} className={clsx({ "rotate-90": showFormations }, "w-4")}/>
                        </div>
                        {showFormations && <ul className={"text-white text-sm rounded-lg w-full p-2.5"}>
                          <li className={"hover:bg-primaryColor"} value="liste">Liste</li>
                          <li className={"hover:bg-primaryColor"} value="formation">Formations</li>
                        </ul>}
                    </li>
                </ul>
            </div>
        </aside>
    );
}

