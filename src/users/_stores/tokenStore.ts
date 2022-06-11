import { appConfig } from "../../_config/config";
import jwt_decode from "jwt-decode";


function getToken() {
    try {
        const token = localStorage.getItem(appConfig.token.storageKey);
        if (!token) {
            return undefined;
        }
        return token;
    } catch (e) {
    }
    return undefined;
}

export class TokenStore {
    token = getToken();

    constructor() {
    }

    getTokenData<TTokenData>() {
        return this.token ? jwt_decode<{ data: TTokenData }>(this.token).data : undefined;
    }
}

export const tokenStore = new TokenStore();