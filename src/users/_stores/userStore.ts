import { tokenStore } from "./tokenStore";
import { TTokenData } from "../../_common/_types/baseTypes";

export class UserStore {
    user: TTokenData | undefined = undefined;

    constructor() {
        const token = tokenStore.token;
        this.setDataFromToken(token);
    }

    setUserConnected = (user: TTokenData) => {
        this.user = user;
    };

    protected readonly setDataFromToken = (_token: string | undefined) => {
        const tokenData = tokenStore.getTokenData<TTokenData>();
        if (!tokenData) {
            // if (this.isLogged) authStore.signOut();
            console.log("pas d'utilisateur");
        } else {
            this.user = tokenData;
            console.log("connecté");
        }
    };


}

export const userStore = new UserStore();
