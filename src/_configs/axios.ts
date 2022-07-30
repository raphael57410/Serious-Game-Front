import axios from "axios";

export const httpClient = axios.create({
    baseURL: process.env.SERIOUS_GAME_API,
    timeout: 1000,
});

export const fetcher = <T>(url: string, bearerToken?: string) =>
    httpClient.get<T>(url, {
        headers: {
            Authorization: `Bearer ${bearerToken ? bearerToken : ""}`,
        },
    });

export default httpClient;
