import { createContext } from "react";

const dataContext = {
    isLoggedIn: false,
    token: null,
    userInfos: null,
    likes: null,
    bookmarks: null,
    login: () => {},
    logout: () => {},
};

const AuthContext = createContext(dataContext);

export default AuthContext;
