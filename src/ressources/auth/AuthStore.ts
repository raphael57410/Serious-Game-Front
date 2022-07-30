import httpClient from "../../_configs/axios";
import { TTokenData } from "../../_common/_types/baseTypes";
import { tokenStore } from "../../users/_stores/tokenStore";

export type TCredentials = { email: string; password: string };

export type signUpCredentials = {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    address: string;
    phone: string;
};


class AuthStore {
    protected httpClient = httpClient;

    public async signIn(credentials: TCredentials) {
        try {
            const response = await this.httpClient.post<{ token: string }>(`/signIn`, credentials);
            if (response && response.status === 200 && response.data.token) {
                tokenStore.setToken(response.data.token);
                const tokenData = tokenStore.getTokenData<TTokenData>();
                if (tokenData) return tokenData;
            }
            return undefined;
        } catch (e) {
            return undefined;
        }
    }

    public async signUp(credentials: signUpCredentials) {
        try {
            const response = await this.httpClient.post<{ token: string }>(
                `http://localhost:3500/user/signUp`,
                credentials,
            );
            console.log(response, response.status, response.data);
            if (response && response.status === 201 && response.data.token) {
                tokenStore.setToken(response.data.token);
                const tokenData = tokenStore.getTokenData<TTokenData>();
                console.log(tokenData);
                if (tokenData) return tokenData;
            }
            return undefined;
        } catch (e) {
            return e;
        }
    }

    signOut() {
        tokenStore.setToken(undefined);
        window.location.reload();
    }

}

export const authStore = new AuthStore();
