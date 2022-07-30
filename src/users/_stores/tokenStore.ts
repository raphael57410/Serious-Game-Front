import { appConfig } from "../../_configs/config";
import jwt_decode from "jwt-decode";
import { deleteCookie, setCookie } from "../../utils/cookieUtils";
import { __BROWSER__ } from "../../utils/coreUtils";


function getToken() {
    try {
        const token = localStorage.getItem(appConfig.token.storageKey);
        console.log("TOKEN", token);
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

    setToken = (token: string | undefined) => {
        this.token = token;
        try {
            if (__BROWSER__) {
                if (token) setCookie(appConfig.token.storageKey, token);
                else deleteCookie(appConfig.token.storageKey);
            }
        } catch (e) {
            //nothing to do
        }
    };
}

export const tokenStore = new TokenStore();