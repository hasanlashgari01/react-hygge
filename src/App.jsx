import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./router";
import AuthContext from "./context/authContext";

function App() {
    const router = useRoutes(routes);

    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [token, setToken] = useState(null);
    const [userInfos, setUserInfos] = useState(null);
    const [likes, setLikes] = useState(null);
    const [bookmarks, setBookmarks] = useState(null);

    useEffect(() => {
        const localStorageData = localStorage.getItem("user");
        if (localStorageData) {
            fetch("http://localhost:4000/auth/me", {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorageData).token}`,
                },
            })
                .then(res => res.json())
                .then(userData => {
                    setIsLoggedIn(true);
                    setUserInfos(userData.user);
                    setLikes(userData.user.likes);
                    setBookmarks(userData.user.bookmarks);
                })
                .catch(error => error);
        }
    }, [likes, bookmarks]);

    const login = (userData, token) => {
        setIsLoggedIn(true);
        setToken(token);
        setUserInfos(userData.user);
        localStorage.setItem("user", JSON.stringify({ token }));
    };

    const logout = () => {
        setIsLoggedIn(false);
        setToken(null);
        setUserInfos({});
        localStorage.removeItem("user");
    };

    return (
        <div className="bg-white dark:bg-grey-3 transition-custom">
            <AuthContext.Provider
                value={{ isLoggedIn, token, userInfos, likes, bookmarks, login, logout }}>
                {router}
            </AuthContext.Provider>
        </div>
    );
}

export default App;
