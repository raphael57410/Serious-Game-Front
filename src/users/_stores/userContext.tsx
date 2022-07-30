import React, { FC, PropsWithChildren, useContext } from "react";
import { UserStore } from "./userStore";

const UserCtx = React.createContext<UserStore>({} as UserStore);

const UserProvider: FC<{ store: UserStore; children: PropsWithChildren<any> }> = ({ store, children }) => {
    return <UserCtx.Provider value={store}>{children}</UserCtx.Provider>;
};

function useUserStore() {
    return useContext(UserCtx);
}

export { UserProvider, useUserStore };
