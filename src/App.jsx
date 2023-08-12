import { useEffect, useReducer, useState } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./router";
import AuthContext from "./context/authContext";
import CartContext from "./context/cartContext";

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item._id === action.payload._id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
            return { ...state, selectedItems: [...state.selectedItems] };
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(
                item => item._id !== action.payload._id
            );
            return {
                ...state,
                selectedItems: [...newSelectedItems],
            };
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item._id === action.payload._id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
            };
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item._id === action.payload._id);
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
            };
        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true,
            };
        case "CLEAR":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: false,
            };
        default:
            return state;
    }
};

function App() {
    const router = useRoutes(routes);

    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [token, setToken] = useState(null);
    const [userInfos, setUserInfos] = useState(null);
    const [cart, setCart] = useState(0);
    const [initialState, setInitialState] = useState({
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
    });

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

    const [state, dispatch] = useReducer(cartReducer, initialState);

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
            <AuthContext.Provider value={{ isLoggedIn, token, userInfos, login, logout }}>
                <CartContext.Provider value={{ state, dispatch }}>{router}</CartContext.Provider>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
