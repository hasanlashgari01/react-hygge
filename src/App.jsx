import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import AuthContext from "./context/authContext";
// import CartContext from "./context/cartContext";
import { routes } from "./router";

function App() {
    const router = useRoutes(routes);

    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [token, setToken] = useState(null);
    const [userInfos, setUserInfos] = useState(null);
    // const [cart, setCart] = useState([]);

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
                })
                .catch(error => error);
        }
    }, []);

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
    /*
    const addProductToCart = (product, quantity) => {
        let productDetail = { product, quantity };
        localStorage.setItem("cart", JSON.stringify(productDetail));
    };
    const removeProductFromCart = () => {};
    const removeAllProductsFromCart = () => {};
    const increaseProduct = () => {};
    const decreaseProduct = () => {};
    */

    return (
        <div className="bg-white dark:bg-grey-3 transition-dark">
            <AuthContext.Provider value={{ isLoggedIn, token, userInfos, login, logout }}>
                {/* <CartContext.Provider
                    value={{
                        cart,
                        addProductToCart,
                        removeProductFromCart,
                        removeAllProductsFromCart,
                        increaseProduct,
                        decreaseProduct,
                    }}> */}
                {router}
                {/* </CartContext.Provider> */}
            </AuthContext.Provider>
        </div>
    );
}

export default App;
