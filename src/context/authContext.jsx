import { createContext } from "react";

const dataContext = {
    isLoggedIn: false,
    token: null,
    userInfos: null,
    login: () => {},
    logout: () => {},
};

const AuthContext = createContext(dataContext);

export default AuthContext;
