import { createContext, useEffect, useReducer } from "react";
import {
    ADD_TO_CART,
    CLEAR_CART,
    DECREASE_QUANTITY,
    INCREASE_QUANTITY,
    LOAD_CART,
    REMOVE_FROM_CART,
} from "./cartActions";

export const CartContext = createContext();

const initialState = {
    cart: [],
};

function CartProvider({ children }) {
    const Reducers = (state, action) => {
        switch (action.type) {
            case ADD_TO_CART:
                if (state.cart.some(item => item._id === action.payload._id)) {
                    return {
                        ...state,
                        cart: state.cart.map(item =>
                            item._id === action.payload._id ? { ...item, qty: item.qty + 1 } : item
                        ),
                    };
                } else {
                    return {
                        ...state,
                        cart: [...state.cart, { ...action.payload, qty: 1 }],
                    };
                }
            case REMOVE_FROM_CART:
                return {
                    ...state,
                    cart: state.cart.filter(item => item._id !== action.payload._id),
                };
            case CLEAR_CART:
                return { ...state, cart: [] };
            case INCREASE_QUANTITY:
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item._id === action.payload._id ? { ...item, qty: item.qty + 1 } : item
                    ),
                };
            case DECREASE_QUANTITY:
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item._id === action.payload._id ? { ...item, qty: item.qty - 1 } : item
                    ),
                };
            case "LOAD_CART":
                return { ...state, cart: action.payload };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(Reducers, initialState);
    // load cart from localStorage
    useEffect(() => {
        dispatch({
            type: LOAD_CART,
            payload: JSON.parse(localStorage.getItem("cart")),
        });
    }, []);

    // save cart to localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
    }, [state.cart]);

    return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
}

export default CartProvider;
