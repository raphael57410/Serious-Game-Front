export interface IPrimitiveObject {
    [name: string]: string | number | null;
}

export type TTokenData = {
    _id: string;
    email: string;
    photo?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    roles: string[];
};

export type TObjWithId = {
    _id: string;
};