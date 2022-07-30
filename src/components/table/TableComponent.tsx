import { ResourcesColumns } from "./ResourcesColumns";
import { ResourceRowList } from "./ResourceRowList";

type Props = {};

const FAKE_COLUMNS = [
    {
        key: "name",
        label: "prenom/nom",
    },
    {
        key: "email",
        label: "Email",
    },
    {
        key: "date",
        label: "Date de naissance",
    },
    {
        key: "adresse",
        label: "Adresse",
    },
    {
        key: "phone",
        label: "Téléphone",
    },
    {
        key: "subscribe",
        label: "inscrit",
    },
    {
        key: "role",
        label: "Rôle",
    },
    {
        key: "_id",
        label: "ID",
    },
];

const FAKE_ROW_DATA = [
    {
        _id: "if35435435DiSfsdfsdf",
        name: "John Doe",
        email: "JohnDoe@gmail.com",
        date: "15/06/2022",
        adresse: "25 rue des pinpin",
        phone: "5432567890",
        subscribe: "oui",
        role: "ADMIN",
    },
    {
        _id: "if35435435dDSfsdfsdf",
        name: "John Doe",
        email: "JohnDoe@gmail.com",
        date: "15/06/2022",
        adresse: "25 rue des pinpin",
        phone: "5432567890",
        subscribe: "oui",
        role: "ADMIN",
    },
    {
        _id: "if35435l435DSfsdfsdf",
        name: "John Doe",
        email: "JohnDoe@gmail.com",
        date: "15/06/2022",
        adresse: "25 rue des pinpin",
        phone: "5432567890",
        subscribe: "oui",
        role: "ADMIN",
    },
    {
        _id: "if35435435DxSfsdfsdf",
        name: "John Doe",
        email: "JohnDoe@gmail.com",
        date: "15/06/2022",
        adresse: "25 rue des pinpin",
        phone: "5432567890",
        subscribe: "oui",
        role: "ADMIN",
    },
    {
        _id: "if35435435DSnfsdfsdf",
        name: "John Doe",
        email: "JohnDoe@gmail.com",
        date: "15/06/2022",
        adresse: "25 rue des pinpin",
        phone: "5432567890",
        subscribe: "oui",
        role: "ADMIN",
    },
    {
        _id: "if35435435vDSfsdfsdf",
        name: "John Doe",
        email: "JohnDoe@gmail.com",
        date: "15/06/2022",
        adresse: "25 rue des pinpin",
        phone: "5432567890",
        subscribe: "oui",
        role: "ADMIN",
    },
    {
        _id: "if3543543b5DSfsdfsdf",
        name: "John Doe",
        email: "JohnDoe@gmail.com",
        date: "15/06/2022",
        adresse: "25 rue des pinpin",
        phone: "5432567890",
        subscribe: "oui",
        role: "ADMIN",
    },
    {
        _id: "if35435435sDSfsdfsdf",
        name: "John Doe",
        email: "JohnDoe@gmail.com",
        date: "15/06/2022",
        adresse: "25 rue des pinpin",
        phone: "5432567890",
        subscribe: "oui",
        role: "ADMIN",
    },
    {
        _id: "if354354d35DSfsdfsdf",
        name: "John Doe",
        email: "JohnDoe@gmail.com",
        date: "15/06/2022",
        adresse: "25 rue des pinpin",
        phone: "5432567890",
        subscribe: "oui",
        role: "ADMIN",
    },
];

export function TableComponent(props: Props) {
    return (
        <div className="relative shadow-md sm:rounded-lg">
            <table className="text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <ResourcesColumns resourceColumns={FAKE_COLUMNS}/>
                </thead>
                <tbody>
                {
                    FAKE_ROW_DATA.map(item =>

                        <ResourceRowList key={item._id} item={item} resourceColumns={FAKE_COLUMNS}/>,
                    )
                }
                </tbody>
            </table>
        </div>
    );
}
